import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, BookOpen, Video, MapPin, Sparkles } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import TroubleshootingChat from '@/components/community/TroubleshootingChat';
import VideoLibrary from '@/components/community/VideoLibrary';
import HelpAIChat from '@/components/community/HelpAIChat';

export default function CommunityTab() {
  const [showChat, setShowChat] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [showHelpAI, setShowHelpAI] = useState(false);

  if (showChat) {
    return <TroubleshootingChat onBack={() => setShowChat(false)} />;
  }

  if (showVideos) {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setShowVideos(false)}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to Community
        </button>
        <VideoLibrary />
      </div>
    );
  }

  if (showHelpAI) {
    return <HelpAIChat onBack={() => setShowHelpAI(false)} />;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Community & Help
          </CardTitle>
          <CardDescription>Access troubleshooting resources, tutorials, and local supplier information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <MessageCircle className="h-4 w-4" />
            <AlertDescription>
              Connect with other HVAC professionals, access knowledge base articles, watch video tutorials, and find
              local suppliers.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4 md:grid-cols-2">
            <button
              onClick={() => setShowHelpAI(true)}
              className="rounded-lg border-2 border-primary bg-gradient-to-br from-primary/10 to-accent/10 p-6 text-left transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-10 w-10 text-primary" />
                <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                  NEW
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Ask AI a Question</h3>
              <p className="text-sm text-muted-foreground">
                Get instant answers to your HVAC questions with our AI assistant. Ask about EPA certification,
                troubleshooting, or app features.
              </p>
            </button>

            <button
              onClick={() => setShowChat(true)}
              className="rounded-lg border border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-md"
            >
              <MessageCircle className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">AI Troubleshooting Chat</h3>
              <p className="text-sm text-muted-foreground">
                Get instant AI-powered diagnostic help with step-by-step guidance and educational resources.
              </p>
            </button>

            <div className="rounded-lg border border-border bg-card p-6">
              <BookOpen className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Knowledge Base</h3>
              <p className="text-sm text-muted-foreground">
                Search through hundreds of articles covering common issues, best practices, and technical guides.
              </p>
            </div>

            <button
              onClick={() => setShowVideos(true)}
              className="rounded-lg border border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-md"
            >
              <Video className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Video Library</h3>
              <p className="text-sm text-muted-foreground">
                Watch comprehensive video tutorials covering EPA 608 certification, HVAC fundamentals, diagnostics, and
                more.
              </p>
            </button>

            <div className="rounded-lg border border-border bg-card p-6">
              <MapPin className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Local Suppliers</h3>
              <p className="text-sm text-muted-foreground">
                Find nearby HVAC supply stores with contact information, hours, and directions. Check the Suppliers tab
                for details.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 p-6">
            <h3 className="mb-2 text-lg font-semibold">Popular Topics</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Refrigerant Recovery',
                'Duct Sealing',
                'Thermostat Wiring',
                'Compressor Diagnosis',
                'Airflow Issues',
                'Electrical Troubleshooting',
                'System Sizing',
                'Maintenance Schedules',
              ].map((topic) => (
                <span key={topic} className="rounded-full bg-background px-3 py-1 text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
