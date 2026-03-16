import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { curatedVideos, getEmbedUrl, isPlaylist } from "@/data/videoLibrary";
import { VideoCategory, type VideoRecord } from "@/types/local";
import {
  BookOpen,
  ExternalLink,
  ListVideo,
  PlayCircle,
  Search,
  Wrench,
} from "lucide-react";
import { useMemo, useState } from "react";

// ─── Category config ──────────────────────────────────────────────────────────

const TABS = [
  { key: "all", label: "All" },
  { key: VideoCategory.epa608Prep, label: "EPA 608 Certification Prep" },
  { key: VideoCategory.hvacFundamentals, label: "HVAC Fundamentals" },
  {
    key: VideoCategory.electricalCircuits,
    label: "Electrical & Control Circuits",
  },
  {
    key: VideoCategory.refrigerantDiagnostics,
    label: "Refrigerant Diagnostics",
  },
  {
    key: VideoCategory.hvacToolsService,
    label: "HVAC Tools & Service Procedures",
  },
] as const;

type TabKey = (typeof TABS)[number]["key"];

const CATEGORY_BADGE_STYLES: Partial<Record<VideoCategory, string>> = {
  [VideoCategory.epa608Prep]:
    "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-300/30",
  [VideoCategory.hvacFundamentals]:
    "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-300/30",
  [VideoCategory.electricalCircuits]:
    "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-300/30",
  [VideoCategory.refrigerantDiagnostics]:
    "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-300/30",
  [VideoCategory.hvacToolsService]:
    "bg-orange-500/15 text-orange-700 dark:text-orange-300 border-orange-300/30",
};

const CATEGORY_LABELS: Partial<Record<VideoCategory, string>> = {
  [VideoCategory.epa608Prep]: "EPA 608 Certification Prep",
  [VideoCategory.hvacFundamentals]: "HVAC Fundamentals",
  [VideoCategory.electricalCircuits]: "Electrical & Control Circuits",
  [VideoCategory.refrigerantDiagnostics]: "Refrigerant Diagnostics",
  [VideoCategory.hvacToolsService]: "HVAC Tools & Service",
};

// ─── VideoCard ────────────────────────────────────────────────────────────────

interface VideoCardProps {
  video: VideoRecord;
  index: number;
}

function VideoCard({ video, index }: VideoCardProps) {
  const playlist = isPlaylist(video.url);
  const embedUrl = getEmbedUrl(video.url);
  const badgeStyle =
    CATEGORY_BADGE_STYLES[video.category] ?? "bg-muted text-muted-foreground";
  const catLabel = CATEGORY_LABELS[video.category] ?? "Training";

  return (
    <Card
      className="overflow-hidden border border-border/70 transition-shadow hover:shadow-lg"
      data-ocid={`video-library.item.${index + 1}`}
    >
      {/* Video embed or playlist thumbnail */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {playlist ? (
          <>
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50">
              <ListVideo className="h-10 w-10 text-white" />
              <Button
                size="sm"
                className="gap-1.5 text-xs"
                asChild
                data-ocid={`video-library.link.${index + 1}`}
              >
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3" />
                  Open Playlist
                </a>
              </Button>
            </div>
          </>
        ) : (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>

      <CardHeader className="pb-2 pt-4">
        <div className="mb-1 flex items-start justify-between gap-2">
          <CardTitle className="text-base leading-snug">
            {video.title}
          </CardTitle>
          {playlist ? (
            <ListVideo className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
          ) : (
            <PlayCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
          )}
        </div>
        <span
          className={`inline-block w-fit rounded-full border px-2 py-0.5 text-xs font-medium ${badgeStyle}`}
        >
          {catLabel}
        </span>
      </CardHeader>

      <CardContent className="space-y-4 pb-4">
        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {video.description}
        </p>

        {/* Related Study Modules */}
        {video.relatedModules && video.relatedModules.length > 0 && (
          <div>
            <p className="mb-1.5 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-foreground/60">
              <BookOpen className="h-3 w-3" />
              Study Modules
            </p>
            <div className="flex flex-wrap gap-1.5">
              {video.relatedModules.map((mod) => (
                <Badge
                  key={mod}
                  variant="secondary"
                  className="cursor-default text-xs"
                >
                  {mod}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Related Tools */}
        {video.relatedTools && video.relatedTools.length > 0 && (
          <div>
            <p className="mb-1.5 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-foreground/60">
              <Wrench className="h-3 w-3" />
              Related Tools
            </p>
            <div className="flex flex-wrap gap-1.5">
              {video.relatedTools.map((tool) => (
                <Badge
                  key={tool}
                  variant="outline"
                  className="cursor-default text-xs"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Watch on YouTube */}
        <Button
          variant="outline"
          size="sm"
          className="w-full gap-1.5 text-xs"
          asChild
          data-ocid={`video-library.link.${index + 1}`}
        >
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3.5 w-3.5" />
            Watch on YouTube
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

// ─── Main VideoLibrary component ──────────────────────────────────────────────

export default function VideoLibrary() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let list = curatedVideos;
    if (activeTab !== "all") {
      list = list.filter((v) => v.category === activeTab);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q) ||
          v.linkedLessonTopic.toLowerCase().includes(q),
      );
    }
    return list;
  }, [activeTab, searchQuery]);

  return (
    <div className="space-y-6" data-ocid="video-library.section">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Video Library</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Structured training videos organized by category. Embed players,
          descriptions, and links to study modules.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="pl-9"
          placeholder="Search videos by title, topic, or keyword…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          data-ocid="video-library.search_input"
        />
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabKey)}>
        <ScrollArea className="w-full pb-2">
          <TabsList className="flex h-auto w-max gap-1 bg-transparent p-0">
            {TABS.map((tab) => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                className="whitespace-nowrap rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-ocid={"video-library.tab"}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>

        {TABS.map((tab) => (
          <TabsContent key={tab.key} value={tab.key} className="mt-6">
            {filtered.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center"
                data-ocid="video-library.empty_state"
              >
                <PlayCircle className="mb-3 h-10 w-10 text-muted-foreground/40" />
                <p className="text-sm font-medium text-muted-foreground">
                  No videos match your search
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60">
                  Try different keywords or select another category
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((video, idx) => (
                  <VideoCard
                    key={video.id.toString()}
                    video={video}
                    index={idx}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
