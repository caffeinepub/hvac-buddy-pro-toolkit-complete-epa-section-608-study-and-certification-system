import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetVideos } from "@/hooks/useQueries";
import { VideoCategory } from "@/types/local";
import {
  AlertTriangle,
  ExternalLink,
  Info,
  List,
  PlayCircle,
  Shield,
} from "lucide-react";
import { useMemo } from "react";
import type { StudyMode } from "../../types/study";
import RecoveryTrainingContent from "./RecoveryTrainingContent";

interface EPA608ContentProps {
  studyMode: StudyMode;
  selectedSection?: "core" | "type1" | "type2" | "type3" | "universal" | null;
}

function isPlaylist(url: string): boolean {
  return url.includes("playlist?list=");
}

interface VideoLinkButtonProps {
  title: string;
  url: string;
  description?: string;
}

function VideoLinkButton({ title, url, description }: VideoLinkButtonProps) {
  const isPlaylistLink = isPlaylist(url);

  return (
    <div className="space-y-2">
      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-start gap-3 mb-3">
          {isPlaylistLink ? (
            <List className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
          ) : (
            <PlayCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
          )}
          <div className="flex-1">
            <h4 className="font-semibold text-sm mb-1">{title}</h4>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
        <Button asChild className="w-full" variant="default">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            {isPlaylistLink ? "Open Playlist" : "Watch Video"}
          </a>
        </Button>
      </div>
    </div>
  );
}

export default function EPA608Content({
  studyMode,
  selectedSection,
}: EPA608ContentProps) {
  const isBeginner = studyMode.__kind__ === "beginner";
  const { data: allVideos = [] } = useGetVideos();

  // Filter videos by section
  const sectionVideos = useMemo(() => {
    const categoryMap: Record<string, VideoCategory> = {
      core: VideoCategory.epa608Prep,
      type1: VideoCategory.epa608Prep,
      type2: VideoCategory.epa608Prep,
      type3: VideoCategory.epa608Prep,
      universal: VideoCategory.epa608Prep,
    };

    const category = selectedSection
      ? categoryMap[selectedSection]
      : VideoCategory.epa608Prep;
    return allVideos.filter((v) => v.category === category);
  }, [allVideos, selectedSection]);

  // Determine which tabs to show based on selected section
  const showAllTabs = !selectedSection || selectedSection === "core";
  const showType1 =
    !selectedSection ||
    selectedSection === "type1" ||
    selectedSection === "universal";
  const showType2 =
    !selectedSection ||
    selectedSection === "type2" ||
    selectedSection === "universal";
  const showType3 =
    !selectedSection ||
    selectedSection === "type3" ||
    selectedSection === "universal";

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            EPA Section 608 Study Content
            {selectedSection && (
              <span className="text-sm font-normal text-muted-foreground">
                -{" "}
                {selectedSection === "core"
                  ? "Core Section"
                  : selectedSection.toUpperCase()}
              </span>
            )}
          </CardTitle>
          <img
            src="/assets/generated/epa-608-badge-transparent.dim_200x200.png"
            alt="EPA 608 Certification"
            className="h-12 w-12 object-contain"
          />
        </div>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue={
            showAllTabs
              ? "ozone"
              : showType1
                ? "type1-overview"
                : showType2
                  ? "type2-overview"
                  : "type3-overview"
          }
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
            {showAllTabs && (
              <>
                <TabsTrigger value="ozone">Ozone</TabsTrigger>
                <TabsTrigger value="refrigerants">Refrigerants</TabsTrigger>
                <TabsTrigger value="recovery">Recovery</TabsTrigger>
                <TabsTrigger value="recoveryTraining">Training</TabsTrigger>
                <TabsTrigger value="leaks">Leaks</TabsTrigger>
                <TabsTrigger value="safety">Safety</TabsTrigger>
                <TabsTrigger value="regulations">Regulations</TabsTrigger>
              </>
            )}
            {showType1 && (
              <TabsTrigger value="type1-overview">Type I</TabsTrigger>
            )}
            {showType2 && (
              <TabsTrigger value="type2-overview">Type II</TabsTrigger>
            )}
            {showType3 && (
              <TabsTrigger value="type3-overview">Type III</TabsTrigger>
            )}
          </TabsList>

          {/* Core Section Content */}
          {showAllTabs && (
            <>
              <TabsContent value="ozone" className="space-y-4 pt-4">
                {isBeginner && (
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Understanding ozone depletion is fundamental to EPA 608
                      certification and environmental responsibility.
                    </AlertDescription>
                  </Alert>
                )}

                {/* Video Link Buttons */}
                {sectionVideos.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <PlayCircle className="h-5 w-5 text-primary" />
                      Educational Videos
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {sectionVideos.slice(0, 2).map((video) => (
                        <VideoLinkButton
                          key={video.id.toString()}
                          title={video.title}
                          url={video.url}
                          description={video.description}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Ozone Layer and Its Importance
                    </h3>
                    <p className="text-muted-foreground">
                      The ozone layer in the stratosphere protects Earth from
                      harmful ultraviolet (UV) radiation. Certain refrigerants,
                      particularly CFCs and HCFCs, contain chlorine that
                      destroys ozone molecules when released into the
                      atmosphere. One chlorine atom can destroy over 100,000
                      ozone molecules through a catalytic chain reaction.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Montreal Protocol</h3>
                    <p className="text-muted-foreground">
                      International agreement signed in 1987 to phase out
                      ozone-depleting substances. The U.S. Clean Air Act
                      implements these requirements, making it illegal to
                      knowingly vent refrigerants during service, maintenance,
                      or disposal. This treaty is considered one of the most
                      successful environmental agreements in history.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="refrigerants" className="space-y-4 pt-4">
                {/* Video Link Buttons */}
                {sectionVideos.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <PlayCircle className="h-5 w-5 text-primary" />
                      Refrigerant Properties Videos
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {sectionVideos.slice(0, 2).map((video) => (
                        <VideoLinkButton
                          key={video.id.toString()}
                          title={video.title}
                          url={video.url}
                          description={video.description}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Refrigerant Classifications
                    </h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                      <li>
                        <strong>CFCs (R-12, R-502):</strong> Highest ODP (1.0),
                        production banned since 1996
                      </li>
                      <li>
                        <strong>HCFCs (R-22):</strong> Lower ODP (0.055), being
                        phased out
                      </li>
                      <li>
                        <strong>HFCs (R-410A, R-134a):</strong> Zero ODP, but
                        high GWP
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="recovery" className="space-y-4 pt-4">
                <div className="mb-4 flex justify-center">
                  <img
                    src="/assets/generated/recovery-cylinder-connections.dim_700x500.png"
                    alt="Recovery cylinder connections diagram"
                    className="h-64 w-auto rounded-lg object-contain border"
                  />
                </div>

                {/* Video Link Buttons */}
                {sectionVideos.filter((v) =>
                  v.linkedLessonTopic.toLowerCase().includes("recovery"),
                ).length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <PlayCircle className="h-5 w-5 text-primary" />
                      Recovery Procedure Videos
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {sectionVideos
                        .filter((v) =>
                          v.linkedLessonTopic
                            .toLowerCase()
                            .includes("recovery"),
                        )
                        .slice(0, 2)
                        .map((video) => (
                          <VideoLinkButton
                            key={video.id.toString()}
                            title={video.title}
                            url={video.url}
                            description={video.description}
                          />
                        ))}
                    </div>
                  </div>
                )}

                <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Recovery Requirements
                    </h3>
                    <p className="text-muted-foreground">
                      Technicians must recover refrigerant to EPA-mandated
                      levels before opening systems.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="recoveryTraining" className="pt-4">
                <RecoveryTrainingContent studyMode={studyMode} />
              </TabsContent>

              <TabsContent value="leaks" className="space-y-4 pt-4">
                <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Leak Detection Methods
                    </h3>
                    <p className="text-muted-foreground">
                      Electronic leak detectors, ultrasonic detectors, soap
                      bubbles, and fluorescent dye.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="safety" className="space-y-4 pt-4">
                <Alert className="border-yellow-500/50 bg-yellow-500/10">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertDescription className="text-yellow-900 dark:text-yellow-100">
                    Safety is paramount when working with refrigerants.
                  </AlertDescription>
                </Alert>
              </TabsContent>

              <TabsContent value="regulations" className="space-y-4 pt-4">
                <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      EPA Certification Requirements
                    </h3>
                    <p className="text-muted-foreground">
                      All technicians must be EPA 608 certified.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </>
          )}

          {/* Type I Content */}
          {showType1 && (
            <TabsContent value="type1-overview" className="space-y-4 pt-4">
              {isBeginner && (
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Type I certification covers small appliances with 5 pounds
                    or less of refrigerant.
                  </AlertDescription>
                </Alert>
              )}

              {/* Video Link Buttons for Type I */}
              {allVideos.filter(
                (v) =>
                  v.category === VideoCategory.epa608Prep &&
                  v.linkedLessonTopic.includes("Type I"),
              ).length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <PlayCircle className="h-5 w-5 text-primary" />
                    Type I Educational Videos
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {allVideos
                      .filter(
                        (v) =>
                          v.category === VideoCategory.epa608Prep &&
                          v.linkedLessonTopic.includes("Type I"),
                      )
                      .slice(0, 2)
                      .map((video) => (
                        <VideoLinkButton
                          key={video.id.toString()}
                          title={video.title}
                          url={video.url}
                          description={video.description}
                        />
                      ))}
                  </div>
                </div>
              )}
            </TabsContent>
          )}

          {/* Type II Content */}
          {showType2 && (
            <TabsContent value="type2-overview" className="space-y-4 pt-4">
              {isBeginner && (
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Type II certification covers high-pressure systems.
                  </AlertDescription>
                </Alert>
              )}

              {/* Video Link Buttons for Type II */}
              {allVideos.filter(
                (v) =>
                  v.category === VideoCategory.epa608Prep &&
                  v.linkedLessonTopic.includes("Type II"),
              ).length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <PlayCircle className="h-5 w-5 text-primary" />
                    Type II Educational Videos
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {allVideos
                      .filter(
                        (v) =>
                          v.category === VideoCategory.epa608Prep &&
                          v.linkedLessonTopic.includes("Type II"),
                      )
                      .slice(0, 2)
                      .map((video) => (
                        <VideoLinkButton
                          key={video.id.toString()}
                          title={video.title}
                          url={video.url}
                          description={video.description}
                        />
                      ))}
                  </div>
                </div>
              )}
            </TabsContent>
          )}

          {/* Type III Content */}
          {showType3 && (
            <TabsContent value="type3-overview" className="space-y-4 pt-4">
              {isBeginner && (
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Type III certification covers low-pressure systems.
                  </AlertDescription>
                </Alert>
              )}

              {/* Video Link Buttons for Type III */}
              {allVideos.filter(
                (v) =>
                  v.category === VideoCategory.epa608Prep &&
                  v.linkedLessonTopic.includes("Type III"),
              ).length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <PlayCircle className="h-5 w-5 text-primary" />
                    Type III Educational Videos
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {allVideos
                      .filter(
                        (v) =>
                          v.category === VideoCategory.epa608Prep &&
                          v.linkedLessonTopic.includes("Type III"),
                      )
                      .slice(0, 2)
                      .map((video) => (
                        <VideoLinkButton
                          key={video.id.toString()}
                          title={video.title}
                          url={video.url}
                          description={video.description}
                        />
                      ))}
                  </div>
                </div>
              )}
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
}
