import {
  type ExternalResource,
  type ExternalResourceTier,
  searchExternalResources,
} from "@/data/externalResources";
import {
  type KBArticle,
  type KBCategory,
  KB_CATEGORIES,
  searchKnowledgeBase,
} from "@/data/knowledgeBase";
import { curatedVideos } from "@/data/videoLibrary";
import type { VideoRecord } from "@/types/local";
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Globe,
  Search,
  Video,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

interface AIKnowledgeBaseSearchProps {
  onBack: () => void;
  onNavigateToStudy?: (module: string) => void;
}

// ─── Internal module tier labels ────────────────────────────────────────────
const CATEGORY_COLORS: Record<KBCategory, string> = {
  "hvac-fundamentals":
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "epa-608":
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  electrical:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  refrigeration:
    "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
  diagnostics:
    "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  safety: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

const CATEGORY_LABELS: Record<KBCategory, string> = {
  "hvac-fundamentals": "HVAC Fundamentals",
  "epa-608": "EPA 608",
  electrical: "Electrical",
  refrigeration: "Refrigeration",
  diagnostics: "Diagnostics",
  safety: "Safety",
};

const TIER_COLORS: Record<ExternalResourceTier, string> = {
  epa: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  manufacturer:
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  news: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  training:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
};

const TIER_LABELS: Record<ExternalResourceTier, string> = {
  epa: "EPA Guidance",
  manufacturer: "Manufacturer",
  news: "ACHR News",
  training: "Training Institute",
};

// ─── Score internal articles by query relevance ──────────────────────────────
function scoreArticles(
  articles: KBArticle[],
  query: string,
): { article: KBArticle; score: number }[] {
  if (!query.trim()) {
    return articles.map((article) => ({ article, score: 1 }));
  }
  const words = query.toLowerCase().split(/\s+/);
  return articles
    .map((article) => {
      let score = 0;
      for (const word of words) {
        if (article.title.toLowerCase().includes(word)) score += 4;
        if (article.tags.some((t) => t.toLowerCase().includes(word)))
          score += 2;
        if (article.summary.toLowerCase().includes(word)) score += 1;
        if (article.keyPoints.some((kp) => kp.toLowerCase().includes(word)))
          score += 1;
      }
      return { article, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);
}

// ─── Score videos by query relevance ─────────────────────────────────────────
function scoreVideos(
  videos: VideoRecord[],
  query: string,
): { video: VideoRecord; score: number }[] {
  if (!query.trim()) return [];
  const words = query.toLowerCase().split(/\s+/);
  return videos
    .map((video) => {
      let score = 0;
      for (const word of words) {
        if (video.title.toLowerCase().includes(word)) score += 4;
        if (video.description?.toLowerCase().includes(word)) score += 2;
        if (video.linkedLessonTopic?.toLowerCase().includes(word)) score += 2;
      }
      return { video, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);
}

// ─── Internal Article Card ────────────────────────────────────────────────────
function InternalArticleCard({
  article,
  onNavigateToStudy,
}: {
  article: KBArticle;
  onNavigateToStudy?: (module: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const relatedVideos = curatedVideos.filter((v) =>
    article.relatedVideoIds.includes(Number(v.id)),
  );

  return (
    <div
      className="rounded-lg border border-border bg-card p-4 space-y-3 transition-shadow hover:shadow-md"
      data-ocid="ai-kb.internal.article.card"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${CATEGORY_COLORS[article.category]}`}
            >
              {CATEGORY_LABELS[article.category]}
            </span>
            <span className="text-xs text-muted-foreground">
              {article.source}
            </span>
          </div>
          <h3 className="font-semibold text-sm leading-snug">
            {article.title}
          </h3>
        </div>
        <BookOpen className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {article.summary}
      </p>

      {expanded && (
        <div className="rounded-md bg-muted/50 p-3 space-y-1">
          <p className="text-xs font-semibold text-muted-foreground mb-2">
            Key Points
          </p>
          <ul className="space-y-1">
            {article.keyPoints.map((point, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              <li key={i} className="text-sm flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
          data-ocid="ai-kb.internal.article.toggle"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-3 w-3" /> Hide points
            </>
          ) : (
            <>
              <ChevronDown className="h-3 w-3" /> Key points
            </>
          )}
        </button>

        {article.studyModuleLink && onNavigateToStudy && (
          <button
            type="button"
            onClick={() => onNavigateToStudy(article.studyModuleLink!)}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
            data-ocid="ai-kb.internal.article.study_button"
          >
            <BookOpen className="h-3 w-3" />
            {article.studyModuleLabel ?? "Study Module"}
          </button>
        )}

        {relatedVideos.map((video) => (
          <a
            key={Number(video.id)}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-red-50 dark:bg-red-900/20 px-2.5 py-1 text-xs font-medium text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
            data-ocid="ai-kb.internal.article.video_link"
          >
            <Video className="h-3 w-3" />
            {video.title}
            <ExternalLink className="h-2.5 w-2.5 opacity-60" />
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Video Result Card ────────────────────────────────────────────────────────
function VideoResultCard({ video }: { video: VideoRecord }) {
  const isPlaylist = video.url.includes("playlist?list=");
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary hover:shadow-md transition-all group"
      data-ocid="ai-kb.video.card"
    >
      <div className="shrink-0 relative">
        {video.thumbnailUrl ? (
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-20 h-14 object-cover rounded-md"
          />
        ) : (
          <div className="w-20 h-14 rounded-md bg-muted flex items-center justify-center">
            <Video className="h-6 w-6 text-muted-foreground" />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 rounded-full p-1">
            <Video className="h-3 w-3 text-white" />
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex items-center rounded-full bg-red-100 dark:bg-red-900/30 px-2 py-0.5 text-xs font-medium text-red-700 dark:text-red-300">
            {isPlaylist ? "Playlist" : "Video"}
          </span>
          {video.linkedLessonTopic && (
            <span className="text-xs text-muted-foreground truncate">
              {video.linkedLessonTopic}
            </span>
          )}
        </div>
        <p className="font-medium text-sm leading-snug group-hover:text-primary transition-colors">
          {video.title}
        </p>
        {video.description && (
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
            {video.description}
          </p>
        )}
      </div>
      <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
    </a>
  );
}

// ─── External Resource Card ───────────────────────────────────────────────────
function ExternalResourceCard({ resource }: { resource: ExternalResource }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="rounded-lg border border-border bg-card p-4 space-y-3 transition-shadow hover:shadow-md"
      data-ocid="ai-kb.external.resource.card"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${TIER_COLORS[resource.tier]}`}
            >
              {TIER_LABELS[resource.tier]}
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              {resource.source}
            </span>
          </div>
          <h3 className="font-semibold text-sm leading-snug">
            {resource.title}
          </h3>
        </div>
        <Globe className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {resource.summary}
      </p>

      {expanded && (
        <div className="rounded-md bg-muted/50 p-3 space-y-1">
          <p className="text-xs font-semibold text-muted-foreground mb-2">
            Key Guidance Points
          </p>
          <ul className="space-y-1">
            {resource.keyPoints.map((point, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              <li key={i} className="text-sm flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
          data-ocid="ai-kb.external.resource.toggle"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-3 w-3" /> Hide points
            </>
          ) : (
            <>
              <ChevronDown className="h-3 w-3" /> Key points
            </>
          )}
        </button>

        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-xs font-medium hover:bg-muted/80 transition-colors"
          data-ocid="ai-kb.external.resource.source_link"
        >
          <ExternalLink className="h-3 w-3" />
          Visit {resource.source}
        </a>
      </div>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({
  icon,
  label,
  count,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  count: number;
  badge?: string;
}) {
  return (
    <div className="flex items-center gap-2 pb-2 border-b border-border">
      {icon}
      <h3 className="font-semibold text-sm">{label}</h3>
      <span className="ml-auto text-xs text-muted-foreground">
        {count} result{count !== 1 ? "s" : ""}
      </span>
      {badge && (
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
          {badge}
        </span>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AIKnowledgeBaseSearch({
  onBack,
  onNavigateToStudy,
}: AIKnowledgeBaseSearchProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<KBCategory | "all">(
    "all",
  );

  // ── Tier 1: Internal articles ────────────────────────────────────────────
  const rawArticles = searchKnowledgeBase(query, activeCategory);

  const rankedArticles = useMemo(() => {
    if (!query.trim()) return rawArticles.map((a) => a);
    return scoreArticles(rawArticles, query).map(({ article }) => article);
  }, [rawArticles, query]);

  // ── Tier 2: Videos ───────────────────────────────────────────────────────
  const rankedVideos = useMemo(() => {
    if (!query.trim()) return [];
    // Deduplicate by id against already-linked videos in article cards
    const articleLinkedIds = new Set(
      rankedArticles.flatMap((a) => a.relatedVideoIds),
    );
    return scoreVideos(curatedVideos, query)
      .filter(({ video }) => !articleLinkedIds.has(Number(video.id)))
      .slice(0, 6)
      .map(({ video }) => video);
  }, [query, rankedArticles]);

  // ── Tier 3: External resources ───────────────────────────────────────────
  const rankedExternal = useMemo(() => {
    if (!query.trim()) return [];
    return searchExternalResources(query).slice(0, 5);
  }, [query]);

  const totalResults =
    rankedArticles.length + rankedVideos.length + rankedExternal.length;
  const hasQuery = query.trim().length > 0;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          data-ocid="ai-kb.back_button"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Community
        </button>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold">HVAC Knowledge Base</h2>
          <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
            AI Search
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-0.5">
          Search across study modules, video tutorials, and trusted HVAC
          industry resources
        </p>
      </div>

      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics, keywords, or HVAC concepts…"
          className="w-full rounded-lg border border-border bg-background pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          data-ocid="ai-kb.search_input"
        />
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2" data-ocid="ai-kb.category_filter">
        {KB_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setActiveCategory(cat.value)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              activeCategory === cat.value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            data-ocid={`ai-kb.category.${cat.value}.tab`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Result summary */}
      {hasQuery && (
        <p className="text-xs text-muted-foreground">
          {totalResults} result{totalResults !== 1 ? "s" : ""} for &ldquo;
          {query}&rdquo;
          {totalResults > 0 && (
            <span className="ml-1 text-muted-foreground/70">
              — {rankedArticles.length} study articles · {rankedVideos.length}{" "}
              videos · {rankedExternal.length} external resources
            </span>
          )}
        </p>
      )}

      {/* ── No query state ── */}
      {!hasQuery && (
        <div className="space-y-4">
          <div
            className="rounded-lg border border-dashed border-border bg-muted/20 p-6 text-center"
            data-ocid="ai-kb.empty_state"
          >
            <Zap className="mx-auto mb-3 h-8 w-8 text-primary/50" />
            <p className="font-medium text-muted-foreground">
              Start searching to see ranked results
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Results are organized by internal modules, videos, and trusted
              external resources
            </p>
          </div>

          {/* Popular search chips */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              Popular Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "superheat",
                "refrigerant recovery",
                "multimeter",
                "compressor",
                "EPA 608",
                "subcooling",
                "evacuation",
                "electrical",
                "leak detection",
                "heat pump",
                "A2L refrigerant",
                "airflow",
              ].map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setQuery(topic)}
                  className="rounded-full bg-muted px-3 py-1 text-xs hover:bg-primary/10 hover:text-primary transition-colors"
                  data-ocid="ai-kb.popular_topic.button"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TIER 1: Internal Content ── */}
      {hasQuery && rankedArticles.length > 0 && (
        <div className="space-y-3" data-ocid="ai-kb.internal_results">
          <SectionHeader
            icon={<BookOpen className="h-4 w-4 text-primary" />}
            label="Internal Study Content"
            count={rankedArticles.length}
            badge="App Content"
          />
          <div className="space-y-3">
            {rankedArticles.map((article) => (
              <InternalArticleCard
                key={article.id}
                article={article}
                onNavigateToStudy={onNavigateToStudy}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── TIER 2: Video Tutorials ── */}
      {hasQuery && rankedVideos.length > 0 && (
        <div className="space-y-3" data-ocid="ai-kb.video_results">
          <SectionHeader
            icon={<Video className="h-4 w-4 text-red-500" />}
            label="Video Library Tutorials"
            count={rankedVideos.length}
          />
          <div className="space-y-2">
            {rankedVideos.map((video) => (
              <VideoResultCard key={Number(video.id)} video={video} />
            ))}
          </div>
        </div>
      )}

      {/* ── TIER 3: External Resources ── */}
      {hasQuery && rankedExternal.length > 0 && (
        <div className="space-y-3" data-ocid="ai-kb.external_results">
          <SectionHeader
            icon={<Globe className="h-4 w-4 text-indigo-500" />}
            label="Trusted HVAC Resources"
            count={rankedExternal.length}
          />
          <div className="space-y-3">
            {rankedExternal.map((resource) => (
              <ExternalResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      )}

      {/* ── No results state ── */}
      {hasQuery && totalResults === 0 && (
        <div
          className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center"
          data-ocid="ai-kb.no_results.empty_state"
        >
          <Search className="mb-3 h-10 w-10 text-muted-foreground/50" />
          <p className="font-medium text-muted-foreground">
            No results found for &ldquo;{query}&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Try different keywords or browse by category
          </p>
        </div>
      )}

      {/* Disclaimer */}
      <div
        className="flex items-start gap-2 rounded-md bg-muted/50 px-4 py-3 text-xs text-muted-foreground"
        data-ocid="ai-kb.disclaimer"
      >
        <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
        <span>
          Summaries are original educational guidance based on EPA Section 608
          regulations, ESCO Institute, HVAC Excellence, ACHR News, and
          manufacturer technical education principles. Not a substitute for
          official documentation, manufacturer instructions, or professional
          training.
        </span>
      </div>
    </div>
  );
}
