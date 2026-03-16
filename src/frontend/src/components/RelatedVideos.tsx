import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { curatedVideos, isPlaylist } from "@/data/videoLibrary";
import { VideoCategory } from "@/types/local";
import { ExternalLink, ListVideo, PlayCircle } from "lucide-react";
import { useMemo } from "react";

const CATEGORY_LABELS: Partial<Record<VideoCategory, string>> = {
  [VideoCategory.epa608Prep]: "EPA 608 Prep",
  [VideoCategory.hvacFundamentals]: "HVAC Fundamentals",
  [VideoCategory.electricalCircuits]: "Electrical & Circuits",
  [VideoCategory.refrigerantDiagnostics]: "Refrigerant Diagnostics",
  [VideoCategory.hvacToolsService]: "Tools & Service",
  // legacy
  [VideoCategory.epaCore]: "EPA Core",
  [VideoCategory.typeI]: "EPA Type I",
  [VideoCategory.typeII]: "EPA Type II",
  [VideoCategory.typeIII]: "EPA Type III",
  [VideoCategory.electricalControls]: "Electrical",
  [VideoCategory.diagnosticsMeasurements]: "Diagnostics",
};

const CATEGORY_COLORS: Partial<Record<VideoCategory, string>> = {
  [VideoCategory.epa608Prep]: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  [VideoCategory.hvacFundamentals]:
    "bg-green-500/15 text-green-700 dark:text-green-300",
  [VideoCategory.electricalCircuits]:
    "bg-yellow-500/15 text-yellow-700 dark:text-yellow-300",
  [VideoCategory.refrigerantDiagnostics]:
    "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300",
  [VideoCategory.hvacToolsService]:
    "bg-orange-500/15 text-orange-700 dark:text-orange-300",
};

interface RelatedVideosProps {
  keywords: string[];
  title?: string;
  maxVideos?: number;
}

export default function RelatedVideos({
  keywords,
  title = "Related Videos",
  maxVideos = 3,
}: RelatedVideosProps) {
  const matched = useMemo(() => {
    if (!keywords.length) return [];
    const lowerKeywords = keywords.map((k) => k.toLowerCase());
    return curatedVideos
      .filter((v) => {
        const haystack =
          `${v.title} ${v.linkedLessonTopic} ${v.description}`.toLowerCase();
        return lowerKeywords.some(
          (kw) => kw.length > 2 && haystack.includes(kw),
        );
      })
      .slice(0, maxVideos);
  }, [keywords, maxVideos]);

  if (!matched.length) return null;

  return (
    <div className="mt-6" data-ocid="related-videos.section">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
        <PlayCircle className="h-4 w-4 text-primary" />
        {title}
      </h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {matched.map((video, idx) => {
          const catLabel = CATEGORY_LABELS[video.category] ?? "Training";
          const catColor =
            CATEGORY_COLORS[video.category] ?? "bg-muted text-muted-foreground";
          return (
            <Card
              key={video.id.toString()}
              className="overflow-hidden border border-border/60 transition-shadow hover:shadow-md"
              data-ocid={`related-videos.item.${idx + 1}`}
            >
              <CardContent className="p-3">
                <div className="mb-2 flex items-start gap-2">
                  {isPlaylist(video.url) ? (
                    <ListVideo className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  ) : (
                    <PlayCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  )}
                  <p className="line-clamp-2 text-sm font-medium leading-tight">
                    {video.title}
                  </p>
                </div>
                <span
                  className={`mb-3 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${catColor}`}
                >
                  {catLabel}
                </span>
                <div className="mt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 w-full gap-1 text-xs"
                    asChild
                    data-ocid={`related-videos.link.${idx + 1}`}
                  >
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Watch Video
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
