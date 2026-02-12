import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft,
  Send,
  Mic,
  AlertTriangle,
  BookOpen,
  Calculator,
  Download,
  Loader2,
  Bot,
  User,
  ThermometerSun,
  Gauge,
  Wind,
  Zap,
  Droplets,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';
import {
  useCreateChatSession,
  useGetChatSession,
  useAddChatMessage,
  useAddChatMeasurement,
  useAddChatResourceLink,
  useUpdateChatStatus,
  useExportChatTranscript,
} from '@/hooks/useQueries';
import { MessageType, MeasurementType, MeasurementSource, ResourceType, ChatSessionStatus } from '@/types/local';
import { toast } from 'sonner';

interface TroubleshootingChatProps {
  onBack: () => void;
}

const COMMON_SYMPTOMS = [
  { label: 'No Cooling', icon: ThermometerSun },
  { label: 'Frozen Evaporator Coil', icon: Droplets },
  { label: 'High/Low Pressure', icon: Gauge },
  { label: 'Compressor Issues', icon: AlertCircle },
  { label: 'Airflow Problems', icon: Wind },
  { label: 'Electrical Problems', icon: Zap },
  { label: 'Refrigerant Leaks', icon: Droplets },
  { label: 'Strange Noises', icon: AlertTriangle },
];

export default function TroubleshootingChat({ onBack }: TroubleshootingChatProps) {
  const [sessionId, setSessionId] = useState<bigint | null>(null);
  const [inputMessage, setInputMessage] = useState('');
  const [isVoiceInput, setIsVoiceInput] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const createSession = useCreateChatSession();
  const { data: session, isLoading: sessionLoading } = useGetChatSession(sessionId);
  const addMessage = useAddChatMessage();
  const addMeasurement = useAddChatMeasurement();
  const addResource = useAddChatResourceLink();
  const updateStatus = useUpdateChatStatus();
  const exportTranscript = useExportChatTranscript();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [session?.messages]);

  const handleStartSession = async (symptom: string) => {
    try {
      const newSessionId = await createSession.mutateAsync(symptom);
      setSessionId(newSessionId);

      // Add initial AI response
      setTimeout(() => {
        addMessage.mutate({
          chatId: newSessionId,
          content: `I understand you're experiencing "${symptom}". Let me help you diagnose this issue step by step. First, let's start with some basic safety checks.\n\n⚠️ **Safety First**: Before we begin, ensure the system is powered off at the breaker if you'll be working near electrical components.\n\nLet's start with the basics:\n1. Is the thermostat set to COOL mode?\n2. Is the temperature set below the current room temperature?\n3. Can you hear the outdoor unit running?`,
          messageType: MessageType.diagnosticStep,
        });
      }, 500);
    } catch (error) {
      toast.error('Failed to start chat session');
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !sessionId) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');

    try {
      // Add user message
      await addMessage.mutateAsync({
        chatId: sessionId,
        content: userMessage,
        messageType: MessageType.text,
      });

      // Simulate AI response based on user input
      setTimeout(() => {
        generateAIResponse(userMessage, sessionId);
      }, 1000);
    } catch (error) {
      toast.error('Failed to send message');
    }
  };

  const generateAIResponse = (userInput: string, chatId: bigint) => {
    const input = userInput.toLowerCase();

    // Simple rule-based responses
    if (input.includes('yes') || input.includes('running')) {
      addMessage.mutate({
        chatId,
        content: `Good! The outdoor unit is running. Now let's check the airflow:\n\n**Airflow Check**:\n1. Check the air filter - is it clean or dirty?\n2. Feel the supply vents - is air coming out?\n3. Is the airflow strong or weak?\n\nPlease describe what you observe.`,
        messageType: MessageType.diagnosticStep,
      });

      // Add educational resource
      addResource.mutate({
        chatId,
        title: 'Airflow Fundamentals',
        url: '/study/core-lessons/airflow',
        resourceType: ResourceType.lesson,
        description: 'Learn about proper airflow and common restrictions',
      });
    } else if (input.includes('no') || input.includes('not running')) {
      addMessage.mutate({
        chatId,
        content: `The outdoor unit is not running. Let's check the power:\n\n**Power Check**:\n1. Check the breaker - is it tripped?\n2. Check the disconnect switch at the outdoor unit\n3. Look for any visible damage to wiring\n\n⚠️ **Safety Alert**: Do not touch any electrical components with wet hands or in wet conditions.\n\nWhat do you find?`,
        messageType: MessageType.safetyAlert,
      });
    } else if (input.includes('dirty') || input.includes('clogged')) {
      addMessage.mutate({
        chatId,
        content: `A dirty air filter is a common cause of cooling issues! This restricts airflow and can cause:\n- Reduced cooling capacity\n- Frozen evaporator coil\n- Higher energy bills\n- System damage\n\n**Recommendation**: Replace the air filter with a new one of the correct size. After replacement, let the system run for 15-20 minutes and check if cooling improves.\n\n📚 **Learn More**: I've added a link to our airflow lesson below.`,
        messageType: MessageType.recommendation,
      });

      addResource.mutate({
        chatId,
        title: 'Air Filter Maintenance',
        url: '/study/core-lessons/airflow',
        resourceType: ResourceType.lesson,
        description: 'Proper air filter selection and maintenance',
      });
    } else if (input.match(/\d+/)) {
      // If user enters numbers, treat as measurement
      const value = parseFloat(input.match(/\d+\.?\d*/)?.[0] || '0');
      addMeasurement.mutate({
        chatId,
        measurementType: MeasurementType.temperature,
        value,
        units: '°F',
        source: MeasurementSource.manual,
      });

      addMessage.mutate({
        chatId,
        content: `Thank you for providing that measurement (${value}°F). Let me analyze this data...\n\n**Analysis**: Based on the temperature reading, I recommend checking the superheat and subcooling values for a more complete diagnosis.\n\n🧮 **Tool**: Use our Superheat/Subcooling Calculator to determine if the refrigerant charge is correct.`,
        messageType: MessageType.recommendation,
      });

      addResource.mutate({
        chatId,
        title: 'Superheat/Subcooling Calculator',
        url: '/calculators',
        resourceType: ResourceType.calculator,
        description: 'Calculate superheat and subcooling values',
      });
    } else {
      addMessage.mutate({
        chatId,
        content: `I understand. Let me provide some general guidance:\n\n**Next Steps**:\n1. Take temperature measurements at the supply and return vents\n2. Check refrigerant pressures if you have gauges\n3. Inspect the outdoor coil for debris or blockage\n\nCould you provide more specific details about what you're observing? For example:\n- Temperature readings\n- Pressure readings\n- Visual observations\n- Any unusual sounds or smells`,
        messageType: MessageType.question,
      });
    }
  };

  const handleExportTranscript = async () => {
    if (!sessionId) return;

    try {
      await exportTranscript.mutateAsync(sessionId);
      toast.success('Chat transcript exported successfully');
    } catch (error) {
      toast.error('Failed to export transcript');
    }
  };

  const handleCompleteSession = async () => {
    if (!sessionId) return;

    try {
      await updateStatus.mutateAsync({
        chatId: sessionId,
        status: ChatSessionStatus.completed,
      });
      toast.success('Chat session completed');
      onBack();
    } catch (error) {
      toast.error('Failed to complete session');
    }
  };

  // Initial symptom selection screen
  if (!sessionId) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-2xl font-bold">AI Troubleshooting Chat</h2>
            <p className="text-sm text-muted-foreground">Get instant diagnostic help with AI-powered guidance</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Describe Your HVAC Issue</CardTitle>
            <CardDescription>
              Select a common symptom below or describe your issue in your own words
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Safety First:</strong> Before starting diagnostics, ensure proper safety precautions. Turn off
                power at the breaker when working with electrical components.
              </AlertDescription>
            </Alert>

            <div>
              <h3 className="mb-3 text-sm font-semibold">Quick Selection - Common Issues:</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {COMMON_SYMPTOMS.map((symptom) => {
                  const Icon = symptom.icon;
                  return (
                    <Button
                      key={symptom.label}
                      variant="outline"
                      className="h-auto flex-col gap-2 p-4"
                      onClick={() => handleStartSession(symptom.label)}
                      disabled={createSession.isPending}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                      <span className="text-sm">{symptom.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-3 text-sm font-semibold">Or describe your issue:</h3>
              <div className="flex gap-2">
                <Textarea
                  placeholder="Example: My AC is running but not cooling the house. The outdoor unit is hot to the touch..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              <Button
                className="mt-3 w-full"
                onClick={() => handleStartSession(inputMessage)}
                disabled={!inputMessage.trim() || createSession.isPending}
              >
                {createSession.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Starting Chat...
                  </>
                ) : (
                  <>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start Diagnostic Chat
                  </>
                )}
              </Button>
            </div>

            <div className="rounded-lg bg-muted/50 p-4">
              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <BookOpen className="h-4 w-4" />
                What to Expect
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Step-by-step diagnostic guidance</li>
                <li>• Safety alerts and best practices</li>
                <li>• Links to relevant study materials and tools</li>
                <li>• Measurement tracking and analysis</li>
                <li>• Exportable chat transcript</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Chat interface
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-xl font-bold">Diagnostic Chat Session</h2>
            <p className="text-sm text-muted-foreground">AI-powered troubleshooting assistance</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleExportTranscript} disabled={exportTranscript.isPending}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="default" size="sm" onClick={handleCompleteSession}>
            Complete Session
          </Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Main chat area */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Chat Messages</CardTitle>
              <Badge variant="outline" className="gap-1">
                <Bot className="h-3 w-3" />
                AI Assistant Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ScrollArea className="h-[500px] pr-4" ref={scrollRef}>
              <div className="space-y-4">
                {sessionLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                  </div>
                ) : (
                  session?.messages.map((message) => {
                    const isUser = message.sender === 'user';
                    const isAlert = message.messageType === MessageType.safetyAlert;
                    const isRecommendation = message.messageType === MessageType.recommendation;

                    return (
                      <div key={message.id.toString()} className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                            isUser ? 'bg-primary' : 'bg-muted'
                          }`}
                        >
                          {isUser ? <User className="h-4 w-4 text-primary-foreground" /> : <Bot className="h-4 w-4" />}
                        </div>
                        <div className={`flex-1 space-y-1 ${isUser ? 'items-end' : ''}`}>
                          <div
                            className={`rounded-lg p-3 ${
                              isUser
                                ? 'bg-primary text-primary-foreground'
                                : isAlert
                                  ? 'border-2 border-destructive bg-destructive/10'
                                  : isRecommendation
                                    ? 'border-2 border-primary bg-primary/10'
                                    : 'bg-muted'
                            }`}
                          >
                            <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                          </div>
                          <p className="px-3 text-xs text-muted-foreground">
                            {new Date(Number(message.timestamp) / 1000000).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </ScrollArea>

            <div className="flex gap-2">
              <Input
                placeholder="Type your response or measurement..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button size="icon" variant="outline" onClick={() => setIsVoiceInput(!isVoiceInput)}>
                <Mic className={`h-4 w-4 ${isVoiceInput ? 'text-destructive' : ''}`} />
              </Button>
              <Button size="icon" onClick={handleSendMessage} disabled={!inputMessage.trim() || addMessage.isPending}>
                {addMessage.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar with resources and measurements */}
        <div className="space-y-4">
          {/* Linked Resources */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Learning Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                  {session?.linkedResources && session.linkedResources.length > 0 ? (
                    session.linkedResources.map((resource) => (
                      <a
                        key={resource.id.toString()}
                        href={resource.url}
                        className="block rounded-lg border border-border p-3 transition-colors hover:bg-muted"
                      >
                        <div className="flex items-start gap-2">
                          {resource.resourceType === ResourceType.lesson && <BookOpen className="h-4 w-4 text-primary" />}
                          {resource.resourceType === ResourceType.calculator && <Calculator className="h-4 w-4 text-primary" />}
                          <div className="flex-1">
                            <p className="text-sm font-medium">{resource.title}</p>
                            <p className="text-xs text-muted-foreground">{resource.description}</p>
                          </div>
                        </div>
                      </a>
                    ))
                  ) : (
                    <p className="text-center text-sm text-muted-foreground">
                      Resources will appear here as the AI provides recommendations
                    </p>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Measurements */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Measurements</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                  {session?.measurements && session.measurements.length > 0 ? (
                    session.measurements.map((measurement) => (
                      <div key={measurement.id.toString()} className="rounded-lg border border-border p-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium capitalize">{measurement.type}</span>
                          <Badge variant="secondary">
                            {measurement.value} {measurement.units}
                          </Badge>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-sm text-muted-foreground">
                      Measurements will be tracked here as you provide them
                    </p>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Confidence Level */}
          {session?.confidenceLevel && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Diagnostic Confidence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Confidence Level:</span>
                    <Badge
                      variant={
                        session.confidenceLevel === 'high'
                          ? 'default'
                          : session.confidenceLevel === 'medium'
                            ? 'secondary'
                            : 'outline'
                      }
                    >
                      {session.confidenceLevel.toUpperCase()}
                    </Badge>
                  </div>
                  {session.likelyCauses && session.likelyCauses.length > 0 && (
                    <div className="mt-3">
                      <p className="mb-2 text-sm font-medium">Likely Causes:</p>
                      <ul className="space-y-1">
                        {session.likelyCauses.map((cause, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            • {cause}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

