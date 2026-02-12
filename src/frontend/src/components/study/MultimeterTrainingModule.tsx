import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, CheckCircle2, Zap, Activity, Gauge } from 'lucide-react';
import type { StudyMode } from '../../types/study';

interface MultimeterTrainingModuleProps {
  studyMode: StudyMode;
}

export default function MultimeterTrainingModule({ studyMode }: MultimeterTrainingModuleProps) {
  const isBeginner = studyMode.__kind__ === 'beginner';

  return (
    <div className="space-y-8">
      {/* Module Header */}
      <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/20">
              <Gauge className="h-8 w-8 text-accent" />
            </div>
            <div>
              <CardTitle className="text-2xl">Multimeter Training</CardTitle>
              <CardDescription className="text-base">
                Master electrical testing and measurement for HVAC diagnostics
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Section 1: Continuity (Power OFF) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            1. Continuity Testing (Power OFF Only)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* When to Use */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use</h3>
            <p className="text-muted-foreground">
              Checking if switches, contactors, safeties, wires, or fuses are electrically connected. Use continuity to verify a complete electrical path exists through a component.
            </p>
          </div>

          <Separator />

          {/* Power Rules */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">Power Rules</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="font-medium">
                Always power OFF. Never use continuity on live circuits. This can destroy your meter and create a safety hazard.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          {/* HVAC Examples */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">HVAC Examples</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Testing a contactor coil for an open winding</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Checking a blown low-voltage fuse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Verifying a safety switch is closed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Testing wire integrity through walls or conduit</span>
              </li>
            </ul>
          </div>

          <Separator />

          {/* Common Mistakes */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Using continuity on a live circuit (can damage meter)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Misreading continuity as good when a component is partially failing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Relying on beeps only without checking the display reading</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Not isolating the component from parallel paths</span>
              </li>
            </ul>
          </div>

          <Separator />

          {/* Safety Warnings */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <ul className="space-y-1 mt-1">
                  <li>• Always verify zero voltage before testing</li>
                  <li>• Remove power at breaker, not just thermostat</li>
                  <li>• Wait for capacitors to discharge before testing</li>
                  <li>• Never assume power is off—always verify with voltage test first</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          {/* Practice Questions */}
          <div>
            <h3 className="mb-3 font-semibold text-lg">Practice Questions</h3>
            <div className="space-y-4">
              <Card className="bg-muted/50">
                <CardContent className="pt-4">
                  <p className="font-medium mb-2">Question 1:</p>
                  <p className="text-muted-foreground mb-3">
                    A condenser won't start. You test the contactor coil and see "OL" (overload) on your meter. What does this mean?
                  </p>
                  <details className="text-sm">
                    <summary className="cursor-pointer font-medium text-primary hover:underline">Show Answer</summary>
                    <p className="mt-2 text-muted-foreground">
                      "OL" means open line—there is no continuity. The contactor coil is open (broken) and needs to be replaced. A good coil should show low resistance (typically 10-100 ohms depending on voltage rating).
                    </p>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardContent className="pt-4">
                  <p className="font-medium mb-2">Question 2:</p>
                  <p className="text-muted-foreground mb-3">
                    You touch the probes to a door safety switch and hear no beep. What is the likely condition of the switch?
                  </p>
                  <details className="text-sm">
                    <summary className="cursor-pointer font-medium text-primary hover:underline">Show Answer</summary>
                    <p className="mt-2 text-muted-foreground">
                      No beep means no continuity—the switch is open. This could be normal if the door is open, or it could indicate a faulty switch if the door is closed. Check the switch mechanism and verify proper operation.
                    </p>
                  </details>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Resistance (Ohms) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Activity className="h-6 w-6 text-blue-600" />
            2. Resistance (Ohms) Measurement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* When to Use */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use</h3>
            <p className="text-muted-foreground">
              Checking motor windings, sensors, transformers (secondary resistance), and troubleshooting open or shorted components. Resistance testing provides more detailed information than simple continuity.
            </p>
          </div>

          <Separator />

          {/* Power Rules */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">Power Rules</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="font-medium">
                Power OFF only. Measuring ohms with power ON can destroy the meter. The meter sends a small current through the component—external voltage will damage the meter's internal circuitry.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          {/* HVAC Examples */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">HVAC Examples</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Testing compressor winding balance (all three windings should be within 10% of each other)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Checking defrost sensor resistance (compare to manufacturer specs at room temperature)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Verifying transformer secondary windings (typically 1-5 ohms for 24V transformers)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Testing heating elements for opens or shorts</span>
              </li>
            </ul>
          </div>

          <Separator />

          {/* Common Mistakes */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Measuring resistance on energized circuits (destroys meter)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Not isolating components—parallel paths give false readings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Reading false ohms due to capacitors in the circuit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Not accounting for temperature effects on resistance</span>
              </li>
            </ul>
          </div>

          <Separator />

          {/* Safety Warnings */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <ul className="space-y-1 mt-1">
                  <li>• Disconnect at least one wire from the component to avoid backfeeding</li>
                  <li>• Discharge all capacitors before testing</li>
                  <li>• Never test resistance on live circuits</li>
                  <li>• Verify power is off with voltage test before switching to ohms mode</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          {/* Practice Questions */}
          <div>
            <h3 className="mb-3 font-semibold text-lg">Practice Questions</h3>
            <div className="space-y-4">
              <Card className="bg-muted/50">
                <CardContent className="pt-4">
                  <p className="font-medium mb-2">Question 1:</p>
                  <p className="text-muted-foreground mb-3">
                    A compressor's windings measure wildly unbalanced (2Ω / 5Ω / 18Ω). What does this suggest?
                  </p>
                  <details className="text-sm">
                    <summary className="cursor-pointer font-medium text-primary hover:underline">Show Answer</summary>
                    <p className="mt-2 text-muted-foreground">
                      This indicates a failing or damaged winding. Compressor windings should be balanced within 10% of each other. The 18Ω reading suggests that winding is partially open or has internal damage. The compressor should be replaced.
                    </p>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardContent className="pt-4">
                  <p className="font-medium mb-2">Question 2:</p>
                  <p className="text-muted-foreground mb-3">
                    A defrost sensor shows infinite resistance at room temperature. What fault does this indicate?
                  </p>
                  <details className="text-sm">
                    <summary className="cursor-pointer font-medium text-primary hover:underline">Show Answer</summary>
                    <p className="mt-2 text-muted-foreground">
                      Infinite resistance means the sensor is open (broken). Most thermistors should show a specific resistance at room temperature (typically 5-50kΩ depending on type). An open sensor will prevent proper defrost operation and should be replaced.
                    </p>
                  </details>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Voltage (VAC) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Zap className="h-6 w-6 text-yellow-600" />
            3. Voltage (VAC) Testing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* When to Use */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use</h3>
            <p className="text-muted-foreground">
              Checking incoming power, control voltage, transformer output, and diagnosing power-loss conditions. Voltage testing is essential for verifying power supply and identifying where voltage drops occur in a circuit.
            </p>
          </div>

          <Separator />

          {/* Power Rules */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">Power Rules</h3>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="font-medium">
                Power ON required. Use caution and stable probe placement. Always verify your meter is set to the correct voltage range before testing. Start with the highest range if unsure.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          {/* HVAC Examples */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">HVAC Examples</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Reading 24VAC from transformer (should be 22-28VAC under load)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Checking 240VAC at a condenser (should be within 10% of rated voltage)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Verifying power across pressure switches and safeties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Testing contactor coil voltage during call for cooling</span>
              </li>
            </ul>
          </div>

          <Separator />

          {/* Common Mistakes */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Measuring voltage on the wrong scale (DC vs AC)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Touching two hot legs accidentally (creates short circuit)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Probing unstable or moving parts (fan blades, loose wires)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Not understanding voltage drop vs no voltage</span>
              </li>
            </ul>
          </div>

          <Separator />

          {/* Safety Warnings */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <ul className="space-y-1 mt-1">
                  <li>• Hold insulated probe areas only—never touch metal tips</li>
                  <li>• Stay clear of fan blades and moving parts</li>
                  <li>• Use proper PPE (insulated gloves for high voltage)</li>
                  <li>• Never work alone on live circuits</li>
                  <li>• Be aware of your surroundings and maintain stable footing</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          {/* Practice Questions */}
          <div>
            <h3 className="mb-3 font-semibold text-lg">Practice Questions</h3>
            <div className="space-y-4">
              <Card className="bg-muted/50">
                <CardContent className="pt-4">
                  <p className="font-medium mb-2">Question 1:</p>
                  <p className="text-muted-foreground mb-3">
                    You measure 0 VAC across a pressure switch. Does this prove the switch is open or closed?
                  </p>
                  <details className="text-sm">
                    <summary className="cursor-pointer font-medium text-primary hover:underline">Show Answer</summary>
                    <p className="mt-2 text-muted-foreground">
                      0 VAC across the switch means it is CLOSED (good). When a switch is closed, there is no voltage drop across it—all voltage is available downstream. If the switch were open, you would measure full supply voltage (e.g., 24VAC) across it.
                    </p>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardContent className="pt-4">
                  <p className="font-medium mb-2">Question 2:</p>
                  <p className="text-muted-foreground mb-3">
                    Your meter shows 18 VAC on a 24VAC transformer. What issues could cause this?
                  </p>
                  <details className="text-sm">
                    <summary className="cursor-pointer font-medium text-primary hover:underline">Show Answer</summary>
                    <p className="mt-2 text-muted-foreground">
                      Low voltage (18VAC instead of 24VAC) could indicate: (1) Weak or failing transformer, (2) Excessive load on the circuit (too many devices), (3) Poor connections causing voltage drop, (4) Low incoming line voltage, or (5) Shorted wiring downstream. Check transformer amp draw and inspect all connections.
                    </p>
                  </details>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Amperage (Clamp Meter) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Gauge className="h-6 w-6 text-purple-600" />
            4. Amperage (Clamp Meter)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* When to Use */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use</h3>
            <p className="text-muted-foreground">
              Measuring running load, diagnosing motor problems, checking compressor start-up amps, verifying blower or condenser fan performance. Amperage readings reveal the actual electrical load and can identify mechanical problems.
            </p>
          </div>

          <Separator />

          {/* Power Rules */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">Power Rules</h3>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="font-medium">
                Power ON required. Clamp must go around ONE conductor only. Clamping around multiple wires (supply and return) will give a zero or false reading.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          {/* HVAC Examples */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">HVAC Examples</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Measuring compressor RLA (Rated Load Amps) and comparing to nameplate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Checking blower motor amp draw vs rated value (should be within 10%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Verifying heat strip amperage matches calculated load</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Monitoring compressor start-up amps (LRA - Locked Rotor Amps)</span>
              </li>
            </ul>
          </div>

          <Separator />

          {/* Common Mistakes */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Clamping around multiple wires (gives zero or false reading)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Using the meter leads instead of the clamp for high amps (dangerous)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Not zeroing out the clamp before measurement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
                <span>Comparing running amps to LRA instead of RLA</span>
              </li>
            </ul>
          </div>

          <Separator />

          {/* Safety Warnings */}
          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <ul className="space-y-1 mt-1">
                  <li>• Keep hands away from rotating parts (fan blades, pulleys)</li>
                  <li>• Keep hands away from energized lugs and terminals</li>
                  <li>• Ensure clamp is fully closed for accurate reading</li>
                  <li>• Never force the clamp around wires—separate them carefully</li>
                  <li>• Be aware of high inrush current during compressor start-up</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          {/* Practice Questions */}
          <div>
            <h3 className="mb-3 font-semibold text-lg">Practice Questions</h3>
            <div className="space-y-4">
              <Card className="bg-muted/50">
                <CardContent className="pt-4">
                  <p className="font-medium mb-2">Question 1:</p>
                  <p className="text-muted-foreground mb-3">
                    A blower motor rated for 6A is drawing 9.5A. What does this indicate?
                  </p>
                  <details className="text-sm">
                    <summary className="cursor-pointer font-medium text-primary hover:underline">Show Answer</summary>
                    <p className="mt-2 text-muted-foreground">
                      High amp draw (9.5A vs 6A rated) indicates a problem: (1) Restricted airflow (dirty filter, blocked ductwork), (2) Bad bearings causing mechanical drag, (3) Incorrect blower speed/pulley setting, or (4) Failing motor windings. Check airflow first, then inspect motor and bearings.
                    </p>
                  </details>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardContent className="pt-4">
                  <p className="font-medium mb-2">Question 2:</p>
                  <p className="text-muted-foreground mb-3">
                    You clamp around both hot wires feeding a heat strip and get 0A. Why?
                  </p>
                  <details className="text-sm">
                    <summary className="cursor-pointer font-medium text-primary hover:underline">Show Answer</summary>
                    <p className="mt-2 text-muted-foreground">
                      When you clamp around both conductors (supply and return), the magnetic fields cancel each other out, resulting in a zero reading. The clamp meter must go around ONE conductor only. Separate the wires and clamp around just one to get an accurate amperage reading.
                    </p>
                  </details>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Card */}
      <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle>Key Takeaways</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span><strong>Continuity & Resistance:</strong> Always power OFF. Verify zero voltage first.</span>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <span><strong>Voltage:</strong> Power ON required. Use caution and proper PPE.</span>
            </li>
            <li className="flex items-start gap-2">
              <Gauge className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
              <span><strong>Amperage:</strong> Clamp around ONE conductor only. Zero the clamp first.</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
              <span><strong>Safety First:</strong> Never assume power is off. Always verify with proper testing.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
