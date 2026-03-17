import { c as createLucideIcon, r as reactExports, au as curatedVideos, j as jsxRuntimeExports, C as Card, e as CardContent, aG as isPlaylist, k as Button, V as VideoCategory } from "./index-DobHR2Wc.js";
import { C as CirclePlay } from "./circle-play-Bb_rdsbt.js";
import { E as ExternalLink } from "./external-link-1Nq1J8dI.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 12H3", key: "18klou" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M12 18H3", key: "11ftsu" }],
  ["path", { d: "m16 12 5 3-5 3v-6Z", key: "zpskkp" }]
];
const ListVideo = createLucideIcon("list-video", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode);
const CATEGORY_LABELS = {
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
  [VideoCategory.diagnosticsMeasurements]: "Diagnostics"
};
const CATEGORY_COLORS = {
  [VideoCategory.epa608Prep]: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  [VideoCategory.hvacFundamentals]: "bg-green-500/15 text-green-700 dark:text-green-300",
  [VideoCategory.electricalCircuits]: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-300",
  [VideoCategory.refrigerantDiagnostics]: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300",
  [VideoCategory.hvacToolsService]: "bg-orange-500/15 text-orange-700 dark:text-orange-300"
};
function RelatedVideos({
  keywords,
  title = "Related Videos",
  maxVideos = 3
}) {
  const matched = reactExports.useMemo(() => {
    if (!keywords.length) return [];
    const lowerKeywords = keywords.map((k) => k.toLowerCase());
    return curatedVideos.filter((v) => {
      const haystack = `${v.title} ${v.linkedLessonTopic} ${v.description}`.toLowerCase();
      return lowerKeywords.some(
        (kw) => kw.length > 2 && haystack.includes(kw)
      );
    }).slice(0, maxVideos);
  }, [keywords, maxVideos]);
  if (!matched.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", "data-ocid": "related-videos.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-4 w-4 text-primary" }),
      title
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: matched.map((video, idx) => {
      const catLabel = CATEGORY_LABELS[video.category] ?? "Training";
      const catColor = CATEGORY_COLORS[video.category] ?? "bg-muted text-muted-foreground";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "overflow-hidden border border-border/60 transition-shadow hover:shadow-md",
          "data-ocid": `related-videos.item.${idx + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-start gap-2", children: [
              isPlaylist(video.url) ? /* @__PURE__ */ jsxRuntimeExports.jsx(ListVideo, { className: "mt-0.5 h-4 w-4 flex-shrink-0 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "mt-0.5 h-4 w-4 flex-shrink-0 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-2 text-sm font-medium leading-tight", children: video.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `mb-3 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${catColor}`,
                children: catLabel
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 w-full gap-1 text-xs",
                asChild: true,
                "data-ocid": `related-videos.link.${idx + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: video.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
                      "Watch Video"
                    ]
                  }
                )
              }
            ) })
          ] })
        },
        video.id.toString()
      );
    }) })
  ] });
}
export {
  ListVideo as L,
  RelatedVideos as R,
  RotateCcw as a
};
