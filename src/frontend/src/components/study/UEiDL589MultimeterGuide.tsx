import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Gauge,
  Thermometer,
  XCircle,
  Zap,
} from "lucide-react";
import type { StudyMode } from "../../types/study";

interface UEiDL589MultimeterGuideProps {
  studyMode: StudyMode;
}

export default function UEiDL589MultimeterGuide({
  studyMode,
}: UEiDL589MultimeterGuideProps) {
  const _isBeginner = studyMode.__kind__ === "beginner";

  return (
    <div className="space-y-8">
      {/* Module Header */}
      <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20">
              <Gauge className="h-8 w-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">
                UEi DL589 Multimeter Guide
              </CardTitle>
              <CardDescription className="text-base">
                Complete reference guide for HVAC diagnostics with the UEi DL589
                digital multimeter
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Section 1: AC Voltage (VAC) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Zap className="h-6 w-6 text-yellow-600" />
            1. AC Voltage (VAC) Use in HVAC
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use It</h3>
            <p className="text-muted-foreground">
              Use AC voltage measurement to verify power supply to HVAC
              components, check transformer output, test contactor coils, and
              diagnose control circuit issues. Essential for troubleshooting
              no-power conditions and voltage drops.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              Power ON or Power OFF Rules
            </h3>
            <Alert className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-600">
              <Zap className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="font-medium text-yellow-900 dark:text-yellow-100">
                Power ON: AC voltage measurements are always taken with power
                ON. Never measure voltage with power off.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              HVAC-Specific Examples
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Checking 24VAC at thermostat terminals (R to C should read
                  24VAC)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Verifying 240VAC at compressor contactor (L1 to L2)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing transformer secondary output (should be 24VAC ±10%)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Measuring voltage drop across a contactor coil during
                  operation
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Setting meter to DC voltage instead of AC voltage (will read
                  zero or incorrect values)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not checking for proper ground reference when measuring
                  control voltage
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Touching metal probe tips together while connected to live
                  circuit (creates short circuit)
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>High Voltage Hazard:</strong> Always use insulated test
                leads rated for the voltage being measured. Keep one hand in
                your pocket when measuring high voltage to prevent current path
                through your heart. Verify meter is set to correct voltage range
                before connecting leads.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: DC Voltage (VDC) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Activity className="h-6 w-6 text-blue-600" />
            2. DC Voltage (VDC) Use in Modern Systems
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use It</h3>
            <p className="text-muted-foreground">
              Use DC voltage measurement for testing flame sensors, pressure
              transducers, electronic control boards, variable-speed motor
              controllers, and inverter-driven systems. Critical for diagnosing
              modern HVAC equipment with electronic controls.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              Power ON or Power OFF Rules
            </h3>
            <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-600">
              <Activity className="h-4 w-4 text-blue-600" />
              <AlertDescription className="font-medium text-blue-900 dark:text-blue-100">
                Power ON: DC voltage measurements require power ON to read
                active signals from sensors and control boards.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              HVAC-Specific Examples
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing flame sensor signal (should read 0.5-10 microamps DC
                  when flame is present)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Checking pressure transducer output (typically 0-5VDC or
                  0-10VDC signal)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Verifying control board 5VDC or 24VDC power supply to sensors
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing inverter DC bus voltage on variable-speed compressor
                  systems (typically 300-400VDC)
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Reversing polarity (red to negative, black to positive) which
                  gives negative reading
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Using AC voltage setting instead of DC (will not read
                  correctly)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not referencing manufacturer specifications for expected DC
                  voltage ranges
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Inverter Hazard:</strong> Inverter-driven systems can
                have high DC voltage (300-400VDC) at the DC bus. Never probe
                inverter circuits without proper training. Always discharge
                capacitors before working on inverter boards.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: AC Amps (Clamp Meter) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Activity className="h-6 w-6 text-orange-600" />
            3. AC Amps (Clamp Meter Use)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use It</h3>
            <p className="text-muted-foreground">
              Use AC amp measurement to check compressor, condenser fan, and
              blower motor current draw. Essential for verifying proper motor
              operation, detecting overload conditions, and diagnosing
              electrical problems without breaking the circuit.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              Power ON or Power OFF Rules
            </h3>
            <Alert className="bg-orange-50 dark:bg-orange-950/20 border-orange-600">
              <Activity className="h-4 w-4 text-orange-600" />
              <AlertDescription className="font-medium text-orange-900 dark:text-orange-100">
                Power ON: Amperage measurements require power ON and the
                component running to measure current flow.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              HVAC-Specific Examples
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Measuring compressor amp draw and comparing to nameplate RLA
                  (Rated Load Amps)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Checking condenser fan motor current (should be within 10% of
                  nameplate FLA)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing blower motor amp draw across all speeds (low, medium,
                  high)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Verifying total system amp draw at the disconnect to check for
                  overload
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Clamping around multiple wires (clamp only one conductor at a
                  time)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not centering the wire in the clamp jaw (causes inaccurate
                  readings)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Comparing amp draw during startup instead of steady-state
                  running amps
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not zeroing the clamp meter before taking measurements
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Live Circuit Hazard:</strong> Never open the clamp jaws
                near exposed high-voltage terminals. Keep clamp meter away from
                rotating fan blades. Always clamp around insulated wires, never
                bare conductors.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: DC Amps (Inverter Systems) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Zap className="h-6 w-6 text-purple-600" />
            4. DC Amps (Inverter Systems)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use It</h3>
            <p className="text-muted-foreground">
              Use DC amp measurement for testing inverter-driven compressor
              systems, variable-speed blower motors with DC power supplies, and
              solar-powered HVAC equipment. Required for diagnosing modern
              variable-capacity systems.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              Power ON or Power OFF Rules
            </h3>
            <Alert className="bg-purple-50 dark:bg-purple-950/20 border-purple-600">
              <Zap className="h-4 w-4 text-purple-600" />
              <AlertDescription className="font-medium text-purple-900 dark:text-purple-100">
                Power ON: DC amperage measurements require power ON and the
                system operating to measure DC current flow.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              HVAC-Specific Examples
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Measuring DC current to inverter-driven compressor (varies
                  with capacity demand)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing ECM (Electronically Commutated Motor) blower current
                  draw
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Checking DC bus current on variable-speed systems during
                  modulation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Verifying control board DC output current to sensors and
                  actuators
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Using AC amp setting instead of DC amp (will not read
                  correctly)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not accounting for variable current draw in modulating systems
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Attempting to measure high DC current without proper clamp
                  meter rating
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>High DC Current Hazard:</strong> Inverter systems can
                have high DC current that does not "let go" like AC. Never work
                on energized inverter circuits without proper training. Always
                follow manufacturer lockout/tagout procedures.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Resistance (Ohms) Testing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Activity className="h-6 w-6 text-green-600" />
            5. Resistance (Ohms) Testing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use It</h3>
            <p className="text-muted-foreground">
              Use resistance measurement to test motor windings, heating
              elements, thermistors, and sensor resistance values. Essential for
              diagnosing open or shorted components and verifying component
              specifications.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              Power ON or Power OFF Rules
            </h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="font-medium">
                Power OFF: Always power OFF and disconnect component from
                circuit. Resistance testing with power ON will damage the meter
                and give false readings.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              HVAC-Specific Examples
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing compressor windings (common to start, common to run,
                  start to run)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Checking electric heat element resistance (should match
                  calculated value: V²/W)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Measuring thermistor resistance at room temperature (typically
                  10kΩ at 77°F)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing defrost sensor resistance on heat pump systems
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not disconnecting component from circuit (parallel paths give
                  false low readings)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Touching both probe tips with fingers (body resistance affects
                  reading)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Testing capacitors without discharging them first (can damage
                  meter)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not accounting for temperature effects on resistance values
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Capacitor Discharge Required:</strong> Always discharge
                capacitors before testing resistance. Stored charge can damage
                meter and cause injury. Use a 20kΩ 5W resistor to safely
                discharge capacitors.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Section 6: Continuity Testing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            6. Continuity Testing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use It</h3>
            <p className="text-muted-foreground">
              Use continuity testing to quickly verify electrical connections,
              check for open circuits, test switches and safeties, and trace
              wiring paths. The audible beep makes it faster than resistance
              testing for simple go/no-go checks.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              Power ON or Power OFF Rules
            </h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="font-medium">
                Power OFF: Always power OFF before continuity testing. Testing
                live circuits will damage the meter and create shock hazard.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              HVAC-Specific Examples
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing pressure switch operation (should beep when closed, no
                  beep when open)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Checking thermostat wire continuity from air handler to
                  thermostat
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Verifying fuse continuity (beep = good fuse, no beep = blown
                  fuse)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing contactor contacts for proper closure when energized
                  (power off first)
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>Testing continuity with power ON (destroys meter)</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not isolating component from circuit (parallel paths cause
                  false continuity)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Assuming no beep means open circuit without checking meter
                  battery
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Testing through electronic components (diodes, transistors)
                  which may show false open
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Power Must Be OFF:</strong> Continuity mode sends
                current through the circuit. Testing live circuits will damage
                the meter and can cause electrical shock. Always verify power is
                off with voltage test first.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Section 7: Capacitance (Microfarads) Testing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Activity className="h-6 w-6 text-cyan-600" />
            7. Capacitance (Microfarads) Testing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use It</h3>
            <p className="text-muted-foreground">
              Use capacitance testing to verify run capacitor and start
              capacitor values, diagnose weak or failed capacitors, and confirm
              replacement capacitor ratings. Essential for troubleshooting
              hard-starting compressors and motors.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              Power ON or Power OFF Rules
            </h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="font-medium">
                Power OFF: Always power OFF and discharge capacitor before
                testing. Disconnect at least one capacitor lead from circuit for
                accurate reading.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              HVAC-Specific Examples
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing dual run capacitor (should read within ±6% of rated
                  value for each section)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Checking compressor start capacitor (typically 88-108 µF for
                  residential units)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Verifying condenser fan motor run capacitor (typically 5-10
                  µF)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing blower motor run capacitor (typically 3-7.5 µF)
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not discharging capacitor before testing (can damage meter and
                  cause shock)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Testing capacitor while still connected in circuit (gives
                  false reading)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not allowing meter time to stabilize reading (capacitance test
                  takes several seconds)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Condemning capacitor that reads 10% low (acceptable range is
                  ±6% to ±10%)
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Discharge Capacitor First:</strong> Capacitors store
                electrical charge even when power is off. Always discharge with
                a 20kΩ 5W resistor before testing. Never short terminals with
                screwdriver (causes arc and capacitor damage).
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Section 8: Temperature Measurement (Dual Thermocouples) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Thermometer className="h-6 w-6 text-red-600" />
            8. Temperature Measurement (Dual Thermocouples)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use It</h3>
            <p className="text-muted-foreground">
              Use temperature measurement to check supply and return air
              temperatures, measure refrigerant line temperatures for
              superheat/subcooling calculations, verify proper system operation,
              and diagnose airflow issues. The DL589 has two thermocouple inputs
              (T1 and T2) for simultaneous measurements.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              Power ON or Power OFF Rules
            </h3>
            <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-600">
              <Thermometer className="h-4 w-4 text-blue-600" />
              <AlertDescription className="font-medium text-blue-900 dark:text-blue-100">
                Power ON: Temperature measurements are typically taken with
                system running to measure operating temperatures. Power state
                depends on what you're measuring.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              HVAC-Specific Examples
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Measuring supply and return air temps simultaneously (T1 on
                  supply, T2 on return)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Checking suction line temperature for superheat calculation
                  (T1 on suction line)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Measuring liquid line temperature for subcooling calculation
                  (T2 on liquid line)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Verifying heat pump defrost cycle temperatures (outdoor coil
                  temperature)
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not properly insulating thermocouple probe on refrigerant
                  lines (ambient air affects reading)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Placing supply air probe too close to evaporator coil (reads
                  coil temp, not supply air)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not allowing time for temperature reading to stabilize (wait
                  2-3 minutes)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Using wrong thermocouple type (DL589 requires K-type
                  thermocouples)
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Hot Surface Hazard:</strong> Furnace heat exchangers and
                discharge lines can exceed 200°F. Always use insulated
                thermocouple probes. Never touch hot surfaces. Be aware of
                moving fan blades when measuring supply air temperature.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Section 9: Frequency (Hz) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Activity className="h-6 w-6 text-indigo-600" />
            9. Frequency (Hz)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use It</h3>
            <p className="text-muted-foreground">
              Use frequency measurement to verify proper AC power supply
              frequency (should be 60 Hz in North America), diagnose generator
              or inverter output issues, and test variable-frequency drive (VFD)
              output to motors. Critical for troubleshooting power quality
              issues.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              Power ON or Power OFF Rules
            </h3>
            <Alert className="bg-indigo-50 dark:bg-indigo-950/20 border-indigo-600">
              <Activity className="h-4 w-4 text-indigo-600" />
              <AlertDescription className="font-medium text-indigo-900 dark:text-indigo-100">
                Power ON: Frequency measurements require power ON to measure the
                AC waveform frequency.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              HVAC-Specific Examples
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Verifying utility power frequency at disconnect (should read
                  59.5-60.5 Hz)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing VFD output frequency to variable-speed blower motor
                  (varies with speed demand)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Checking generator frequency during backup power operation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Diagnosing inverter-driven compressor frequency modulation
                  (20-120 Hz typical range)
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not recognizing abnormal frequency as sign of power quality
                  issue
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Attempting to measure frequency on DC circuits (will show
                  error or zero)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not understanding that VFD frequency varies with motor speed
                  (not always 60 Hz)
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Live Circuit Measurement:</strong> Frequency testing
                requires contact with live circuits. Use proper test lead
                technique. Abnormal frequency (below 55 Hz or above 65 Hz)
                indicates serious power problem - do not operate equipment.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Section 10: Differential Temperature (Delta T) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Thermometer className="h-6 w-6 text-blue-600" />
            10. Differential Temperature (Delta T)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold text-lg">When to Use It</h3>
            <p className="text-muted-foreground">
              Use differential temperature (Delta T or ΔT) measurement to
              automatically calculate the temperature difference between two
              points. Essential for verifying proper system capacity, diagnosing
              airflow issues, and checking heat exchanger performance. The DL589
              calculates T1-T2 automatically.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              Power ON or Power OFF Rules
            </h3>
            <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-600">
              <Thermometer className="h-4 w-4 text-blue-600" />
              <AlertDescription className="font-medium text-blue-900 dark:text-blue-100">
                Power ON: Delta T measurements require system running to measure
                temperature difference across operating components.
              </AlertDescription>
            </Alert>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">
              HVAC-Specific Examples
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Measuring cooling Delta T (return minus supply): should be
                  18-22°F for proper operation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Checking heating Delta T (supply minus return): should be
                  40-70°F for gas furnace
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Verifying heat pump heating Delta T: should be 15-25°F (lower
                  than gas furnace)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  Testing condenser coil temperature split (entering air vs.
                  leaving air)
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Common Mistakes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Taking Delta T reading before system reaches steady-state
                  (wait 15 minutes)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Placing probes in wrong locations (supply probe must be in
                  supply plenum, return in return)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Not accounting for outdoor temperature effects on Delta T
                  (higher outdoor temp = higher Delta T)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                <span>
                  Reversing T1 and T2 connections (gives negative Delta T
                  reading)
                </span>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-2 font-semibold text-lg">Safety Warnings</h3>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Hot Surfaces and Moving Parts:</strong> When measuring
                Delta T in furnaces, be aware of hot heat exchangers and moving
                blower wheels. Always turn off power before inserting or
                removing temperature probes from ductwork. Secure probe wires
                away from fan blades.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Summary Card */}
      <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Quick Reference Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold text-primary">
                Power OFF Functions
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive" />
                  <span>Resistance (Ohms)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive" />
                  <span>Continuity</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive" />
                  <span>Capacitance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-primary">
                Power ON Functions
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span>AC Voltage (VAC)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span>DC Voltage (VDC)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span>AC Amps (Clamp)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span>DC Amps</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span>Temperature</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span>Frequency (Hz)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span>Delta T</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
