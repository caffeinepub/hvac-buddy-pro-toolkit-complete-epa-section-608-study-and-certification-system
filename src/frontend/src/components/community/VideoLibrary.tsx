import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetVideos } from "@/hooks/useQueries";
import { VideoCategory, type VideoRecord } from "@/types/local";
import {
  BookOpen,
  Clock,
  ExternalLink,
  List,
  PlayCircle,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

const CATEGORY_LABELS: Record<VideoCategory, string> = {
  [VideoCategory.epaCore]: "EPA Core",
  [VideoCategory.typeI]: "EPA Type I",
  [VideoCategory.typeII]: "EPA Type II",
  [VideoCategory.typeIII]: "EPA Type III",
  [VideoCategory.epaPlaylists]: "EPA Playlists",
  [VideoCategory.hvacFundamentals]: "HVAC Fundamentals",
  [VideoCategory.diagnosticsMeasurements]: "Diagnostics & Measurements",
  [VideoCategory.electricalControls]: "Electrical & Controls",
  [VideoCategory.refrigerantHandling]: "Refrigerant Handling",
  [VideoCategory.toolsInstruments]: "Tools & Instruments",
};

const CATEGORY_ORDER: VideoCategory[] = [
  VideoCategory.epaCore,
  VideoCategory.typeI,
  VideoCategory.typeII,
  VideoCategory.typeIII,
  VideoCategory.epaPlaylists,
  VideoCategory.hvacFundamentals,
  VideoCategory.diagnosticsMeasurements,
  VideoCategory.electricalControls,
  VideoCategory.refrigerantHandling,
  VideoCategory.toolsInstruments,
];

function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

function isPlaylist(url: string): boolean {
  return url.includes("playlist?list=");
}

interface VideoCardProps {
  video: VideoRecord;
}

function VideoCard({ video }: VideoCardProps) {
  const isPlaylistLink = isPlaylist(video.url);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-2">
          {isPlaylistLink ? (
            <List className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
          ) : (
            <PlayCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
          )}
          <CardTitle className="line-clamp-2 text-base">
            {video.title}
          </CardTitle>
        </div>
        <CardDescription className="line-clamp-2 text-sm">
          {video.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{formatDuration(Number(video.duration))}</span>
        </div>
        {video.linkedLessonTopic && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="h-3 w-3" />
            <span className="line-clamp-1">{video.linkedLessonTopic}</span>
          </div>
        )}
        <Badge variant="secondary" className="text-xs">
          {CATEGORY_LABELS[video.category]}
        </Badge>
        <Button asChild className="w-full" variant="default">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            {isPlaylistLink ? "Open Playlist" : "Watch Video"}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function VideoLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    VideoCategory | "all"
  >("all");

  const { data: videos = [], isLoading, error } = useGetVideos();

  const filteredVideos = useMemo(() => {
    let filtered = videos;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((v) => v.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (v) =>
          v.title.toLowerCase().includes(query) ||
          v.description.toLowerCase().includes(query) ||
          v.linkedLessonTopic.toLowerCase().includes(query),
      );
    }

    return filtered;
  }, [videos, selectedCategory, searchQuery]);

  const videosByCategory = useMemo(() => {
    const grouped: Record<VideoCategory, VideoRecord[]> = {
      [VideoCategory.epaCore]: [],
      [VideoCategory.typeI]: [],
      [VideoCategory.typeII]: [],
      [VideoCategory.typeIII]: [],
      [VideoCategory.epaPlaylists]: [],
      [VideoCategory.hvacFundamentals]: [],
      [VideoCategory.diagnosticsMeasurements]: [],
      [VideoCategory.electricalControls]: [],
      [VideoCategory.refrigerantHandling]: [],
      [VideoCategory.toolsInstruments]: [],
    };

    for (const video of filteredVideos) {
      grouped[video.category].push(video);
    }

    return grouped;
  }, [filteredVideos]);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-48" />
        </div>
        <Skeleton className="h-10 w-full" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          Failed to load videos. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Video Library</h2>
          <p className="text-sm text-muted-foreground">
            {videos.length} educational videos across {CATEGORY_ORDER.length}{" "}
            categories
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search videos by title, description, or topic..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Category Tabs */}
      <Tabs
        value={selectedCategory}
        onValueChange={(v) => setSelectedCategory(v as VideoCategory | "all")}
      >
        <ScrollArea className="w-full">
          <TabsList className="inline-flex w-max">
            <TabsTrigger value="all">All ({videos.length})</TabsTrigger>
            {CATEGORY_ORDER.map((category) => {
              const count = videosByCategory[category].length;
              return (
                <TabsTrigger key={category} value={category}>
                  {CATEGORY_LABELS[category]} ({count})
                </TabsTrigger>
              );
            })}
          </TabsList>
        </ScrollArea>

        <TabsContent value="all" className="mt-6">
          {filteredVideos.length === 0 ? (
            <Alert>
              <PlayCircle className="h-4 w-4" />
              <AlertDescription>
                {searchQuery
                  ? "No videos found matching your search."
                  : "No videos available yet."}
              </AlertDescription>
            </Alert>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id.toString()} video={video} />
              ))}
            </div>
          )}
        </TabsContent>

        {CATEGORY_ORDER.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            {videosByCategory[category].length === 0 ? (
              <Alert>
                <PlayCircle className="h-4 w-4" />
                <AlertDescription>
                  No videos in this category yet.
                </AlertDescription>
              </Alert>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {videosByCategory[category].map((video) => (
                  <VideoCard key={video.id.toString()} video={video} />
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* Integration Note */}
      {videos.length > 0 && (
        <Alert>
          <BookOpen className="h-4 w-4" />
          <AlertDescription>
            These videos complement the EPA 608 study modules and core HVAC
            lessons. Click the buttons to watch videos in a new tab, then
            practice with interactive tools and simulators in the Study tab.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
