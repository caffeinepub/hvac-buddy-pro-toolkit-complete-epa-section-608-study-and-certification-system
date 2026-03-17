import { j as jsxRuntimeExports, C as Card, a as CardHeader, b as CardTitle, q as Calculator, d as CardDescription, e as CardContent, T as Tabs, s as TabsList, t as TabsTrigger, v as TabsContent, r as reactExports, A as Alert, g as AlertDescription, L as Label, I as Input, k as Button } from "./index-DobHR2Wc.js";
function CalculatorsTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5" }),
        "Quick Calculators"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Field calculators for common HVAC calculations" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "superheat", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "superheat", children: "Superheat" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "subcooling", children: "Subcooling" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "load", children: "Load Est." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "duct", children: "Duct Size" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "electrical", children: "Electrical" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "superheat", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SuperheatCalculator, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "subcooling", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubcoolingCalculator, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "load", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadCalculator, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "duct", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DuctSizingCalculator, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "electrical", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ElectricalCalculator, {}) })
    ] }) })
  ] });
}
function SuperheatCalculator() {
  const [suctionTemp, setSuctionTemp] = reactExports.useState("");
  const [suctionPressure, setSuctionPressure] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const calculate = () => {
    const satTemp = Number(suctionPressure) * 0.5 + 32;
    const superheat = Number(suctionTemp) - satTemp;
    setResult(superheat);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Superheat = Suction Line Temperature - Saturation Temperature (from pressure)" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "suctionTemp", children: "Suction Line Temperature (°F)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "suctionTemp",
            type: "number",
            value: suctionTemp,
            onChange: (e) => setSuctionTemp(e.target.value),
            placeholder: "e.g., 55"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "suctionPressure", children: "Suction Pressure (PSI)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "suctionPressure",
            type: "number",
            value: suctionPressure,
            onChange: (e) => setSuctionPressure(e.target.value),
            placeholder: "e.g., 68"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: calculate, disabled: !suctionTemp || !suctionPressure, children: "Calculate Superheat" }),
    result !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-primary bg-primary/5 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Superheat:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-primary", children: [
        result.toFixed(1),
        "°F"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Target range: 8-12°F for fixed orifice, 5-7°F for TXV systems" })
    ] })
  ] });
}
function SubcoolingCalculator() {
  const [liquidTemp, setLiquidTemp] = reactExports.useState("");
  const [liquidPressure, setLiquidPressure] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const calculate = () => {
    const satTemp = Number(liquidPressure) * 0.4 + 80;
    const subcooling = satTemp - Number(liquidTemp);
    setResult(subcooling);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Subcooling = Saturation Temperature (from pressure) - Liquid Line Temperature" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "liquidTemp", children: "Liquid Line Temperature (°F)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "liquidTemp",
            type: "number",
            value: liquidTemp,
            onChange: (e) => setLiquidTemp(e.target.value),
            placeholder: "e.g., 95"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "liquidPressure", children: "Liquid Pressure (PSI)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "liquidPressure",
            type: "number",
            value: liquidPressure,
            onChange: (e) => setLiquidPressure(e.target.value),
            placeholder: "e.g., 250"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: calculate, disabled: !liquidTemp || !liquidPressure, children: "Calculate Subcooling" }),
    result !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-primary bg-primary/5 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Subcooling:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-primary", children: [
        result.toFixed(1),
        "°F"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Target range: 10-15°F for most systems" })
    ] })
  ] });
}
function LoadCalculator() {
  const [sqft, setSqft] = reactExports.useState("");
  const [ceilingHeight, setCeilingHeight] = reactExports.useState("8");
  const [result, setResult] = reactExports.useState(null);
  const calculate = () => {
    const baseLoad = Number(sqft) * 25;
    const heightFactor = Number(ceilingHeight) / 8;
    const totalLoad = baseLoad * heightFactor;
    setResult(totalLoad);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Simplified cooling load estimate based on square footage and ceiling height" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "sqft", children: "Square Footage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "sqft",
            type: "number",
            value: sqft,
            onChange: (e) => setSqft(e.target.value),
            placeholder: "e.g., 1500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ceilingHeight", children: "Ceiling Height (ft)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "ceilingHeight",
            type: "number",
            value: ceilingHeight,
            onChange: (e) => setCeilingHeight(e.target.value),
            placeholder: "e.g., 8"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: calculate, disabled: !sqft, children: "Calculate Load" }),
    result !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-primary bg-primary/5 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Estimated Cooling Load:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-primary", children: [
        result.toLocaleString(),
        " BTU/hr"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-primary", children: [
        (result / 12e3).toFixed(1),
        " Tons"
      ] })
    ] })
  ] });
}
function DuctSizingCalculator() {
  const [cfm, setCfm] = reactExports.useState("");
  const [velocity, setVelocity] = reactExports.useState("700");
  const [result, setResult] = reactExports.useState(null);
  const calculate = () => {
    const area = Number(cfm) / Number(velocity);
    const diameter = Math.sqrt(area * 4 / Math.PI);
    setResult({ diameter, area });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Calculate required duct size based on airflow (CFM) and velocity" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cfm", children: "Airflow (CFM)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "cfm",
            type: "number",
            value: cfm,
            onChange: (e) => setCfm(e.target.value),
            placeholder: "e.g., 400"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "velocity", children: "Velocity (FPM)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "velocity",
            type: "number",
            value: velocity,
            onChange: (e) => setVelocity(e.target.value),
            placeholder: "e.g., 700"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: calculate, disabled: !cfm, children: "Calculate Duct Size" }),
    result !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-primary bg-primary/5 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Required Duct Size:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-primary", children: [
        result.diameter.toFixed(1),
        '" diameter'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "Cross-sectional area: ",
        result.area.toFixed(2),
        " sq ft"
      ] })
    ] })
  ] });
}
function ElectricalCalculator() {
  const [voltage, setVoltage] = reactExports.useState("240");
  const [amperage, setAmperage] = reactExports.useState("");
  const [powerFactor, setPowerFactor] = reactExports.useState("0.9");
  const [result, setResult] = reactExports.useState(null);
  const calculate = () => {
    const watts = Number(voltage) * Number(amperage) * Number(powerFactor);
    setResult(watts);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Calculate electrical load: Watts = Voltage × Amperage × Power Factor" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "voltage", children: "Voltage (V)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "voltage",
            type: "number",
            value: voltage,
            onChange: (e) => setVoltage(e.target.value),
            placeholder: "e.g., 240"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "amperage", children: "Amperage (A)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "amperage",
            type: "number",
            value: amperage,
            onChange: (e) => setAmperage(e.target.value),
            placeholder: "e.g., 15"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "powerFactor", children: "Power Factor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "powerFactor",
            type: "number",
            step: "0.1",
            value: powerFactor,
            onChange: (e) => setPowerFactor(e.target.value),
            placeholder: "e.g., 0.9"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: calculate, disabled: !amperage, children: "Calculate Power" }),
    result !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-primary bg-primary/5 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Electrical Load:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-primary", children: [
        result.toFixed(0),
        " Watts"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-primary", children: [
        (result / 1e3).toFixed(2),
        " kW"
      ] })
    ] })
  ] });
}
export {
  CalculatorsTab as default
};
