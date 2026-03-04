import { Alert, AlertDescription } from "@/components/ui/alert";
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
import { Separator } from "@/components/ui/separator";
import {
  useAddHelpMessage,
  useClearHelpSession,
  useGetHelpSession,
  useStartHelpSession,
} from "@/hooks/useQueries";
import { MessageType } from "@/types/local";
import {
  AlertCircle,
  ArrowLeft,
  Bot,
  Loader2,
  RotateCcw,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface HelpAIChatProps {
  onBack: () => void;
}

export default function HelpAIChat({ onBack }: HelpAIChatProps) {
  const [inputMessage, setInputMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const startSession = useStartHelpSession();
  const { data: session, isLoading: sessionLoading } = useGetHelpSession();
  const addMessage = useAddHelpMessage();
  const clearSession = useClearHelpSession();

  // Auto-scroll to bottom when new messages arrive
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally scroll on message list change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [session?.messages]);

  // Start session on mount if not already started
  // biome-ignore lint/correctness/useExhaustiveDependencies: only run on mount
  useEffect(() => {
    if (!session && !startSession.isPending) {
      startSession.mutate();
    }
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");

    try {
      // Add user message
      await addMessage.mutateAsync({
        content: userMessage,
        messageType: MessageType.text,
      });

      // Simulate AI response
      setTimeout(() => {
        generateAIResponse(userMessage);
      }, 1000);
    } catch (_error) {
      toast.error("Failed to send message");
    }
  };

  const generateAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();

    // Generate contextual AI responses based on user input
    let aiResponse = "";
    let _followUps: string[] = [];

    if (
      input.includes("epa") ||
      input.includes("608") ||
      input.includes("certification")
    ) {
      aiResponse = `**EPA 608 Certification Information**

The EPA 608 certification is required for technicians who maintain, service, repair, or dispose of equipment that could release refrigerants into the atmosphere.

**Certification Types:**
• **Type I**: Small appliances (5 lbs or less of refrigerant)
• **Type II**: High-pressure systems (residential/commercial AC, heat pumps)
• **Type III**: Low-pressure systems (centrifugal chillers)
• **Universal**: All of the above

**Exam Format:**
• Core section (required for all): 25 questions
• Type-specific sections: 25 questions each
• Passing score: 70% or higher
• Open book exam allowed

**Study Resources:**
Check out our comprehensive EPA 608 study modules in the Study tab, which include:
- Complete lesson content for all sections
- Practice quizzes with detailed explanations
- Video tutorials
- Interactive tools and simulators

Would you like specific information about any certification type?`;

      _followUps = [
        "What topics are covered in the Core section?",
        "How do I prepare for Type II certification?",
        "What are the recovery requirements?",
      ];
    } else if (
      input.includes("refrigerant") ||
      input.includes("recovery") ||
      input.includes("charge")
    ) {
      aiResponse = `**Refrigerant Handling & Recovery**

Proper refrigerant handling is critical for EPA compliance and system performance.

**Key Safety Rules:**
⚠️ Always wear safety glasses and gloves
⚠️ Work in well-ventilated areas
⚠️ Never vent refrigerant to atmosphere
⚠️ Use proper recovery equipment

**Recovery Requirements:**
• Active recovery required for systems with >15 lbs
• Passive recovery allowed for small appliances
• Must achieve required vacuum levels
• Proper cylinder labeling and storage

**Charging Best Practices:**
• Weigh in refrigerant when possible
• Use subcooling method for TXV systems
• Use superheat method for fixed orifice systems
• Check manufacturer specifications

**Tools Available:**
Use our Superheat/Subcooling Calculator in the Calculators tab for accurate charge verification.

Need help with a specific refrigerant or recovery procedure?`;

      _followUps = [
        "What are the vacuum requirements?",
        "How do I calculate superheat?",
        "What refrigerants are A2L classified?",
      ];
    } else if (
      input.includes("troubleshoot") ||
      input.includes("diagnos") ||
      input.includes("not cooling")
    ) {
      aiResponse = `**HVAC Troubleshooting Guidance**

I can help you diagnose HVAC system issues! For comprehensive diagnostic assistance, I recommend using our **AI Troubleshooter** in the Troubleshooter tab.

**Common Issues & Quick Checks:**

**No Cooling:**
1. Check thermostat settings (mode, temperature)
2. Verify power to outdoor unit
3. Check air filter condition
4. Inspect for frozen coils

**Poor Cooling:**
1. Measure supply/return temperatures (Delta T)
2. Check refrigerant pressures
3. Verify proper airflow (CFM)
4. Inspect outdoor coil for blockage

**System Won't Start:**
1. Check breakers and disconnects
2. Test thermostat operation
3. Check safety switches
4. Verify control voltage

**Safety First:**
⚠️ Always turn off power before working on electrical components
⚠️ Use proper PPE (safety glasses, gloves)
⚠️ Follow lockout/tagout procedures

Would you like detailed guidance on a specific issue?`;

      _followUps = [
        "How do I check refrigerant charge?",
        "What causes frozen evaporator coils?",
        "How do I test a compressor?",
      ];
    } else if (input.includes("superheat") || input.includes("subcooling")) {
      aiResponse = `**Superheat & Subcooling Explained**

These are critical measurements for verifying proper refrigerant charge.

**Superheat:**
• Measures how much vapor is heated above saturation temperature
• Calculation: Suction line temp - Suction saturation temp
• Used for fixed orifice/piston systems
• Target: 8-12°F for most residential systems

**Subcooling:**
• Measures how much liquid is cooled below saturation temperature
• Calculation: Condensing saturation temp - Liquid line temp
• Used for TXV systems
• Target: 10-15°F for most systems

**When to Use Each:**
• **TXV Systems**: Use subcooling method
• **Fixed Orifice**: Use superheat method
• **Heat Pumps**: Check both in cooling mode

**Tools:**
Use our Superheat/Subcooling Calculator in the Calculators tab for automatic calculations with target ranges.

Need help interpreting your readings?`;

      _followUps = [
        "What if superheat is too high?",
        "What if subcooling is too low?",
        "How do I measure saturation temperature?",
      ];
    } else if (
      input.includes("electrical") ||
      input.includes("wiring") ||
      input.includes("voltage")
    ) {
      aiResponse = `**Electrical Troubleshooting & Safety**

⚠️ **SAFETY WARNING**: Electrical work can be dangerous. Always follow proper safety procedures.

**Safety Precautions:**
• Turn off power at breaker
• Use lockout/tagout procedures
• Test for voltage before touching
• Use insulated tools
• Wear safety glasses
• Never work on live circuits unless absolutely necessary

**Common Electrical Checks:**

**Voltage Testing:**
• Line voltage: 208-240V (residential)
• Control voltage: 24V AC
• Check voltage at contactor
• Verify proper grounding

**Component Testing:**
• Contactors: Check coil resistance and contacts
• Capacitors: Test with capacitor meter
• Transformers: Check primary and secondary voltage
• Relays: Verify coil voltage and contact continuity

**Wiring Issues:**
• Loose connections cause high resistance
• Corroded terminals reduce current flow
• Undersized wire causes voltage drop
• Check for proper wire gauge

**Resources:**
• Watch our Electrical Controls videos in the Video Library
• Use the Multimeter Simulator in Study Tools
• Check wiring diagrams in manufacturer documentation

What specific electrical issue are you experiencing?`;

      _followUps = [
        "How do I test a capacitor?",
        "What causes a contactor to fail?",
        "How do I wire a thermostat?",
      ];
    } else if (
      input.includes("airflow") ||
      input.includes("cfm") ||
      input.includes("duct")
    ) {
      aiResponse = `**Airflow & Duct System Guidance**

Proper airflow is essential for system efficiency and comfort.

**Target Airflow:**
• Residential: 400 CFM per ton of cooling
• Commercial: Varies by application
• Measure at supply registers or return grille

**Common Airflow Problems:**

**Restricted Airflow:**
• Dirty air filter (most common)
• Blocked return or supply vents
• Undersized ductwork
• Dirty evaporator coil
• Blower motor issues

**Excessive Airflow:**
• Oversized blower
• Incorrect fan speed setting
• Duct leakage

**Duct Sizing:**
Use our Duct Sizing Calculator in the Calculators tab to determine proper duct sizes for your application.

**Measurement Tools:**
• Anemometer for velocity
• Manometer for static pressure
• Temperature probes for Delta T

**Target Delta T:**
• Cooling: 18-22°F temperature drop
• Heating: 40-70°F temperature rise

Need help calculating CFM or sizing ducts?`;

      _followUps = [
        "How do I measure static pressure?",
        "What causes low Delta T?",
        "How do I calculate duct size?",
      ];
    } else if (
      input.includes("help") ||
      input.includes("how") ||
      input.includes("what")
    ) {
      aiResponse = `I'm here to help with any HVAC-related questions! I can assist with:

**Technical Topics:**
• EPA 608 certification preparation
• Refrigerant handling and recovery
• System diagnostics and troubleshooting
• Electrical systems and controls
• Airflow and duct design
• Superheat and subcooling calculations
• Equipment specifications
• Safety procedures

**App Features:**
• How to use the Troubleshooter
• Study materials and exam prep
• Calculator tools
• Video library resources
• Parts and refrigerant database

**Common Questions:**
• "How do I check refrigerant charge?"
• "What are EPA 608 requirements?"
• "How do I troubleshoot no cooling?"
• "What is superheat and subcooling?"
• "How do I test electrical components?"

What would you like to know more about?`;

      _followUps = [
        "Tell me about EPA 608 certification",
        "How do I troubleshoot a system?",
        "What tools are available in the app?",
      ];
    } else {
      aiResponse = `I understand you're asking about "${userInput}". Let me provide some guidance.

For the most accurate and detailed assistance, please provide more specific information about:
• What system or component you're working with
• What symptoms or issues you're experiencing
• What measurements or observations you've made
• What you've already tried

**Quick Access:**
• **Troubleshooter Tab**: Step-by-step diagnostic guidance
• **Study Tab**: EPA 608 prep and HVAC fundamentals
• **Calculators Tab**: Superheat, subcooling, load calculations
• **Video Library**: Visual tutorials and demonstrations
• **Parts Tab**: Refrigerant specifications and equipment data

How can I help you further?`;

      _followUps = [
        "I need help troubleshooting a system",
        "Tell me about EPA 608 certification",
        "How do I use the calculators?",
      ];
    }

    // Add AI response
    addMessage.mutate({
      content: aiResponse,
      messageType: MessageType.text,
    });
  };

  const handleClearChat = async () => {
    try {
      await clearSession.mutateAsync();
      toast.success("Chat cleared");
      // Restart session
      setTimeout(() => {
        startSession.mutate();
      }, 500);
    } catch (_error) {
      toast.error("Failed to clear chat");
    }
  };

  const handleFollowUpClick = (followUp: string) => {
    setInputMessage(followUp);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Ask AI a Question
            </h2>
            <p className="text-sm text-muted-foreground">
              Get instant answers to your HVAC questions
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleClearChat}
          disabled={clearSession.isPending}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Clear Chat
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            AI Assistant
          </CardTitle>
          <CardDescription>
            Ask me anything about HVAC systems, EPA certification,
            troubleshooting, or app features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              This AI assistant uses the same diagnostic engine as the
              Troubleshooter. For step-by-step system diagnostics, use the
              Troubleshooter tab.
            </AlertDescription>
          </Alert>

          <Separator />

          <ScrollArea className="h-[500px] pr-4" ref={scrollRef}>
            <div className="space-y-4">
              {sessionLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              ) : session?.messages && session.messages.length > 0 ? (
                session.messages.map((message) => {
                  const isUser = message.sender === "user";

                  return (
                    <div
                      key={message.id.toString()}
                      className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                          isUser
                            ? "bg-primary"
                            : "bg-gradient-to-br from-primary/20 to-accent/20"
                        }`}
                      >
                        {isUser ? (
                          <User className="h-4 w-4 text-primary-foreground" />
                        ) : (
                          <Bot className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div
                        className={`flex-1 space-y-1 ${isUser ? "items-end" : ""}`}
                      >
                        <div
                          className={`rounded-lg p-3 ${
                            isUser
                              ? "bg-primary text-primary-foreground ml-8"
                              : "bg-muted mr-8"
                          }`}
                        >
                          <p className="whitespace-pre-wrap text-sm leading-relaxed">
                            {message.content}
                          </p>
                        </div>
                        <p className="px-3 text-xs text-muted-foreground">
                          {new Date(
                            Number(message.timestamp) / 1000000,
                          ).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-6">
                    <Bot className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Welcome to AI Help!
                  </h3>
                  <p className="mb-6 max-w-md text-sm text-muted-foreground">
                    Ask me anything about HVAC systems, EPA certification,
                    troubleshooting techniques, or how to use this app. I'm here
                    to help!
                  </p>
                  <div className="w-full max-w-md space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground">
                      Try asking:
                    </p>
                    <div className="grid gap-2">
                      {[
                        "How do I prepare for EPA 608 certification?",
                        "What causes low superheat?",
                        "How do I troubleshoot a system that won't cool?",
                        "What are the refrigerant recovery requirements?",
                      ].map((question) => (
                        <Button
                          key={question}
                          variant="outline"
                          size="sm"
                          className="justify-start text-left h-auto py-2 px-3"
                          onClick={() => handleFollowUpClick(question)}
                        >
                          <span className="text-xs">{question}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Follow-up suggestions */}
          {session?.followUps && session.followUps.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">
                Suggested follow-up questions:
              </p>
              <div className="flex flex-wrap gap-2">
                {session.followUps.map((followUp, index) => (
                  <Button
                    // biome-ignore lint/suspicious/noArrayIndexKey: follow-up suggestions have no ID
                    key={`followup-${index}`}
                    variant="outline"
                    size="sm"
                    onClick={() => handleFollowUpClick(followUp)}
                    className="text-xs"
                  >
                    {followUp}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <Separator />

          <div className="flex gap-2">
            <Input
              placeholder="Ask a question about HVAC, EPA 608, troubleshooting, or app features..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              className="flex-1"
            />
            <Button
              size="icon"
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || addMessage.isPending}
            >
              {addMessage.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Press Enter to send • This AI provides educational guidance and
            should not replace professional judgment
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
