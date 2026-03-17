import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, C as Card, a as CardHeader, b as CardTitle, am as Camera, d as CardDescription, e as CardContent, A as Alert, g as AlertDescription, k as Button, X, aj as LoaderCircle, w as Dialog, x as DialogContent, y as DialogHeader, z as DialogTitle } from "./index-DobHR2Wc.js";
import { u as useCamera } from "./useCamera-CRLDJOIu.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
function PhotoDiagnosticTab() {
  const [capturedImage, setCapturedImage] = reactExports.useState(null);
  const [showCamera, setShowCamera] = reactExports.useState(false);
  const [analyzing, setAnalyzing] = reactExports.useState(false);
  const [analysisResult, setAnalysisResult] = reactExports.useState(null);
  const {
    isActive,
    startCamera,
    stopCamera,
    capturePhoto,
    videoRef,
    canvasRef,
    error: cameraError
  } = useCamera();
  const handleOpenCamera = async () => {
    setShowCamera(true);
    await startCamera();
  };
  const handleCloseCamera = async () => {
    await stopCamera();
    setShowCamera(false);
  };
  const handleCapture = async () => {
    const photo = await capturePhoto();
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result);
        handleCloseCamera();
      };
      reader.readAsDataURL(photo);
    }
  };
  const handleAnalyze = async () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalysisResult(
        "Component Identified: Refrigerant Label (R-410A)\n\nDetails:\n- Type: R-410A Refrigerant\n- Operating Pressure: 118-138 PSI (Low Side), 250-295 PSI (High Side)\n- Temperature Range: -60°F to 160°F\n- Common Applications: Residential and commercial AC systems\n- Safety: Non-flammable, but requires proper handling\n\nRecommendations:\n- Verify system compatibility before charging\n- Use proper gauges rated for R-410A\n- Check for leaks before adding refrigerant"
      );
      setAnalyzing(false);
    }, 2e3);
  };
  const handleFileUpload = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-5 w-5" }),
          "AI Photo Diagnostic"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Capture images of refrigerant labels, wiring diagrams, or components for instant identification and guidance" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Take a clear photo of refrigerant labels, wiring diagrams, or HVAC components. The AI will identify the item and provide relevant specifications and guidance." })
        ] }),
        !capturedImage ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleOpenCamera, className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "mr-2 h-4 w-4" }),
            "Take Photo"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "flex-1", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-2 h-4 w-4" }),
            "Upload Image",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: handleFileUpload
              }
            )
          ] }) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: capturedImage,
                alt: "Captured",
                className: "w-full rounded-lg border border-border"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "destructive",
                size: "icon",
                className: "absolute right-2 top-2",
                onClick: () => {
                  setCapturedImage(null);
                  setAnalysisResult(null);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          !analysisResult ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleAnalyze,
              disabled: analyzing,
              className: "w-full",
              children: analyzing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                "Analyzing..."
              ] }) : "Analyze Image"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-primary bg-primary/5 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 font-semibold text-foreground", children: "Analysis Result" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "whitespace-pre-wrap text-sm text-muted-foreground", children: analysisResult })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: showCamera,
        onOpenChange: (open) => !open && handleCloseCamera(),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Camera" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video overflow-hidden rounded-lg bg-black", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "video",
                {
                  ref: videoRef,
                  className: "h-full w-full object-cover",
                  playsInline: true,
                  muted: true,
                  autoPlay: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "hidden" })
            ] }),
            cameraError && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: cameraError.message }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: handleCloseCamera,
                  variant: "outline",
                  className: "flex-1",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: handleCapture,
                  disabled: !isActive,
                  className: "flex-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "mr-2 h-4 w-4" }),
                    "Capture Photo"
                  ]
                }
              )
            ] })
          ] })
        ] })
      }
    )
  ] });
}
export {
  PhotoDiagnosticTab as default
};
