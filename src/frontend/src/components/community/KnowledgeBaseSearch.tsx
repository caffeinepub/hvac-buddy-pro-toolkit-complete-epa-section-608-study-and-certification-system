import {
  type KBArticle,
  type KBCategory,
  KB_CATEGORIES,
  searchKnowledgeBase,
} from "@/data/knowledgeBase";
import { curatedVideos } from "@/data/videoLibrary";
import { ArrowLeft, BookOpen, ExternalLink, Search, Video } from "lucide-react";
import { useState } from "react";

interface KnowledgeBaseSearchProps {
  onBack: () => void;
  onNavigateToStudy?: (module: string) => void;
}

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

function ArticleCard({
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
      className="rounded-lg border border-border bg-card p-5 space-y-3 transition-shadow hover:shadow-md"
      data-ocid="kb.article.card"
    >
      {/* Header */}
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
          <h3 className="font-semibold text-base leading-snug">
            {article.title}
          </h3>
        </div>
        <BookOpen className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
      </div>

      {/* Summary */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {article.summary}
      </p>

      {/* Key Points (expandable) */}
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

      {/* Toggle key points */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="text-xs text-primary hover:underline"
        data-ocid="kb.article.toggle"
      >
        {expanded ? "Show less" : "Show key points"}
      </button>

      {/* Actions row */}
      <div className="pt-1 flex flex-wrap gap-2">
        {/* Study module link */}
        {article.studyModuleLink && onNavigateToStudy && (
          <button
            type="button"
            onClick={() => onNavigateToStudy(article.studyModuleLink!)}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
            data-ocid="kb.article.study_button"
          >
            <BookOpen className="h-3.5 w-3.5" />
            {article.studyModuleLabel ?? "Study Module"}
          </button>
        )}

        {/* Related videos */}
        {relatedVideos.map((video) => (
          <a
            key={Number(video.id)}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-foreground hover:bg-accent/20 transition-colors"
            data-ocid="kb.article.video_link"
          >
            <Video className="h-3.5 w-3.5 text-red-500" />
            {video.title}
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function KnowledgeBaseSearch({
  onBack,
  onNavigateToStudy,
}: KnowledgeBaseSearchProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<KBCategory | "all">(
    "all",
  );

  const results = searchKnowledgeBase(query, activeCategory);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          data-ocid="kb.back_button"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Community
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Knowledge Base
        </h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          Search educational articles, study modules, and video tutorials
        </p>
      </div>

      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics, keywords, or concepts…"
          className="w-full rounded-lg border border-border bg-background pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          data-ocid="kb.search_input"
        />
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2" data-ocid="kb.category_filter">
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
            data-ocid={`kb.category.${cat.value}.tab`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p className="text-xs text-muted-foreground">
        {results.length} article{results.length !== 1 ? "s" : ""} found
        {query ? ` for "${query}"` : ""}
      </p>

      {/* Results */}
      {results.length > 0 ? (
        <div className="space-y-4" data-ocid="kb.results_list">
          {results.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onNavigateToStudy={onNavigateToStudy}
            />
          ))}
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center"
          data-ocid="kb.empty_state"
        >
          <Search className="mb-3 h-10 w-10 text-muted-foreground/50" />
          <p className="font-medium text-muted-foreground">No results found</p>
          <p className="text-sm text-muted-foreground mt-1">
            Try a different search term or category
          </p>
        </div>
      )}

      {/* Source note */}
      <div className="rounded-md bg-muted/50 px-4 py-3 text-xs text-muted-foreground">
        Content is summarized for educational purposes based on EPA Section 608
        guidance, HVAC industry standards, and manufacturer technical education
        principles. It is not a substitute for official documentation or
        professional training.
      </div>
    </div>
  );
}
