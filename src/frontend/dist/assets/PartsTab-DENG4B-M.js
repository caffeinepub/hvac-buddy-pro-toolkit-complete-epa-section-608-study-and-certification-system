import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, C as Card, a as CardHeader, b as CardTitle, d as CardDescription, k as Button, e as CardContent, a2 as Search, I as Input, A as Alert, g as AlertDescription, i as Badge, m as BookOpen, W as Wrench, w as Dialog, x as DialogContent, y as DialogHeader, z as DialogTitle, al as DialogDescription, S as Separator, T as Tabs, s as TabsList, t as TabsTrigger, v as TabsContent } from "./index-mwwh698k.js";
import { D as Droplet, C as Checkbox } from "./checkbox-Cx2WPW7G.js";
import { S as ScrollArea } from "./scroll-area-CUEGubt_.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-C2WzP03D.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CNuS1IKu.js";
import { u as useCamera } from "./useCamera-CnlZkWRv.js";
import { E as ExternalLink } from "./external-link-DUvK9SJz.js";
import { M as Mic } from "./mic-BDgAUJEZ.js";
import { F as Funnel } from "./funnel-Bh6JHhdP.js";
import { I as Info } from "./info-T47qv4_0.js";
import { T as TriangleAlert } from "./triangle-alert-Drtfw0nc.js";
import "./index-CWqymlTU.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
  ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }]
];
const QrCode = createLucideIcon("qr-code", __iconNode);
const REFRIGERANT_DATABASE = [
  {
    name: "R-22",
    ashraeClass: "A1",
    type: "HCFC",
    gwp: 1810,
    odp: 0.055,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 68.5,
    typicalCondSatTempF: 120,
    oilType: "Mineral or Alkylbenzene",
    chargingMethod: "Vapor or liquid",
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Legacy residential and commercial AC, heat pumps, medium-temp refrigeration",
    notes: "Phase-out complete for new equipment as of 2010. Service existing systems only. Being replaced by R-410A, R-32, R-454B."
  },
  {
    name: "R-410A",
    ashraeClass: "A1",
    type: "HFC",
    gwp: 2088,
    odp: 0,
    glideF: 0.3,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 118,
    typicalCondSatTempF: 120,
    oilType: "POE (Polyolester)",
    chargingMethod: "Liquid only (zeotropic blend)",
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Residential and commercial AC, heat pumps, VRF systems",
    notes: "Most common refrigerant in modern residential AC. Higher pressure than R-22. Requires POE oil. Phase-down beginning 2025."
  },
  {
    name: "R-32",
    ashraeClass: "A2L",
    type: "HFC",
    gwp: 675,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 107,
    typicalCondSatTempF: 120,
    oilType: "POE (Polyolester)",
    chargingMethod: "Vapor or liquid",
    a2lWarning: true,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Residential and commercial AC, heat pumps, VRF systems",
    notes: "Lower GWP alternative to R-410A. Mildly flammable (A2L). Gaining popularity in new equipment. Higher efficiency potential."
  },
  {
    name: "R-454B",
    ashraeClass: "A2L",
    type: "HFO",
    gwp: 466,
    odp: 0,
    glideF: 1,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 115,
    typicalCondSatTempF: 120,
    oilType: "POE (Polyolester)",
    chargingMethod: "Liquid only (zeotropic blend)",
    a2lWarning: true,
    dewPointRule: true,
    bubblePointRule: true,
    typicalApplications: "Residential and commercial AC, heat pumps, direct R-410A replacement",
    notes: "Low-GWP R-410A replacement. Mildly flammable (A2L). Near drop-in replacement with similar pressures. Charge as liquid."
  },
  {
    name: "R-1234yf",
    ashraeClass: "A2L",
    type: "HFO",
    gwp: 4,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 72,
    typicalCondSatTempF: 120,
    oilType: "POE (Polyolester)",
    chargingMethod: "Vapor or liquid",
    a2lWarning: true,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Automotive AC, mobile refrigeration",
    notes: "Ultra-low GWP. Mildly flammable (A2L). Primary refrigerant for automotive AC. Similar properties to R-134a."
  },
  {
    name: "R-404A",
    ashraeClass: "A1",
    type: "HFC",
    gwp: 3922,
    odp: 0,
    glideF: 0.8,
    typicalEvapSatTempF: -10,
    evapPressure40Fpsig: 92,
    typicalCondSatTempF: 120,
    oilType: "POE (Polyolester)",
    chargingMethod: "Liquid only (zeotropic blend)",
    a2lWarning: false,
    dewPointRule: true,
    bubblePointRule: true,
    typicalApplications: "Commercial refrigeration, low-temp and medium-temp applications",
    notes: "High GWP - phase-down in progress. Being replaced by R-448A, R-449A, R-407A. Charge as liquid to prevent fractionation."
  },
  {
    name: "R-134a",
    ashraeClass: "A1",
    type: "HFC",
    gwp: 1430,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 37,
    typicalCondSatTempF: 120,
    oilType: "POE (Polyolester)",
    chargingMethod: "Vapor or liquid",
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Automotive AC, chillers, commercial refrigeration, appliances",
    notes: "Replaced R-12 in automotive and appliances. Lower pressure than R-22. Phase-down beginning 2025."
  },
  {
    name: "R-407C",
    ashraeClass: "A1",
    type: "HFC",
    gwp: 1774,
    odp: 0,
    glideF: 7,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 70,
    typicalCondSatTempF: 120,
    oilType: "POE (Polyolester)",
    chargingMethod: "Liquid only (zeotropic blend)",
    a2lWarning: false,
    dewPointRule: true,
    bubblePointRule: true,
    typicalApplications: "Commercial AC, heat pumps, medium-temp refrigeration",
    notes: "R-22 retrofit option. High glide requires careful charging. Charge as liquid. Monitor superheat and subcooling carefully."
  },
  {
    name: "R-448A",
    ashraeClass: "A1",
    type: "HFO",
    gwp: 1387,
    odp: 0,
    glideF: 5,
    typicalEvapSatTempF: -10,
    evapPressure40Fpsig: 88,
    typicalCondSatTempF: 120,
    oilType: "POE (Polyolester)",
    chargingMethod: "Liquid only (zeotropic blend)",
    a2lWarning: false,
    dewPointRule: true,
    bubblePointRule: true,
    typicalApplications: "Commercial refrigeration, R-404A and R-22 replacement",
    notes: "Lower GWP R-404A replacement. Non-flammable. Charge as liquid. Monitor glide during charging and leak repair."
  },
  {
    name: "R-449A",
    ashraeClass: "A1",
    type: "HFO",
    gwp: 1397,
    odp: 0,
    glideF: 5.5,
    typicalEvapSatTempF: -10,
    evapPressure40Fpsig: 89,
    typicalCondSatTempF: 120,
    oilType: "POE (Polyolester)",
    chargingMethod: "Liquid only (zeotropic blend)",
    a2lWarning: false,
    dewPointRule: true,
    bubblePointRule: true,
    typicalApplications: "Commercial refrigeration, R-404A and R-22 replacement",
    notes: "Lower GWP R-404A replacement. Non-flammable. Similar to R-448A. Charge as liquid."
  },
  {
    name: "R-452B",
    ashraeClass: "A2L",
    type: "HFO",
    gwp: 698,
    odp: 0,
    glideF: 1.5,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 115,
    typicalCondSatTempF: 120,
    oilType: "POE (Polyolester)",
    chargingMethod: "Liquid only (zeotropic blend)",
    a2lWarning: true,
    dewPointRule: true,
    bubblePointRule: true,
    typicalApplications: "Commercial AC, heat pumps, R-410A replacement",
    notes: "Low-GWP R-410A replacement. Mildly flammable (A2L). Similar pressures to R-410A. Charge as liquid."
  },
  {
    name: "R-513A",
    ashraeClass: "A1",
    type: "HFO",
    gwp: 631,
    odp: 0,
    glideF: 0.3,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 72,
    typicalCondSatTempF: 120,
    oilType: "POE (Polyolester)",
    chargingMethod: "Liquid only (zeotropic blend)",
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Chillers, commercial AC, R-134a replacement",
    notes: "Low-GWP R-134a replacement. Non-flammable. Lower pressure than R-410A. Charge as liquid."
  },
  {
    name: "R-290 (Propane)",
    ashraeClass: "A3",
    type: "Natural",
    gwp: 3,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 109,
    typicalCondSatTempF: 120,
    oilType: "Mineral or POE",
    chargingMethod: "Vapor or liquid",
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Commercial refrigeration, small appliances, limited residential use",
    notes: "Ultra-low GWP natural refrigerant. HIGHLY FLAMMABLE (A3). Strict charge limits and safety requirements. Excellent efficiency."
  },
  {
    name: "R-600a (Isobutane)",
    ashraeClass: "A3",
    type: "Natural",
    gwp: 3,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 36,
    typicalCondSatTempF: 120,
    oilType: "Mineral or POE",
    chargingMethod: "Vapor or liquid",
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Household refrigerators and freezers, small appliances",
    notes: "Ultra-low GWP natural refrigerant. HIGHLY FLAMMABLE (A3). Common in modern household refrigerators. Very small charges."
  },
  {
    name: "R-717 (Ammonia)",
    ashraeClass: "B2L",
    type: "Natural",
    gwp: 0,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: -10,
    evapPressure40Fpsig: 73,
    typicalCondSatTempF: 120,
    oilType: "Mineral (oil-less systems common)",
    chargingMethod: "Vapor or liquid",
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Industrial refrigeration, cold storage, ice rinks, food processing",
    notes: "Zero GWP natural refrigerant. TOXIC and mildly flammable (B2L). Excellent efficiency. Requires specialized training and equipment."
  },
  {
    name: "R-744 (CO2)",
    ashraeClass: "A1",
    type: "Natural",
    gwp: 1,
    odp: 0,
    glideF: 0,
    typicalEvapSatTempF: -10,
    evapPressure40Fpsig: 528,
    typicalCondSatTempF: 88,
    oilType: "POE (specialized)",
    chargingMethod: "Liquid only",
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Commercial refrigeration, heat pumps, transcritical systems",
    notes: "Ultra-low GWP natural refrigerant. VERY HIGH PRESSURE (up to 1500 psig). Non-toxic, non-flammable. Requires specialized equipment."
  },
  {
    name: "R-123",
    ashraeClass: "B1",
    type: "HCFC",
    gwp: 77,
    odp: 0.02,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: -5,
    typicalCondSatTempF: 120,
    oilType: "Mineral or Alkylbenzene",
    chargingMethod: "Liquid into evaporator",
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Low-pressure centrifugal chillers",
    notes: "Low-pressure refrigerant (operates in vacuum). TOXIC (B1 classification). Phase-out in progress. Requires purge unit. Service existing systems only."
  },
  {
    name: "R-12",
    ashraeClass: "A1",
    type: "CFC",
    gwp: 10900,
    odp: 1,
    glideF: 0,
    typicalEvapSatTempF: 40,
    evapPressure40Fpsig: 51,
    typicalCondSatTempF: 120,
    oilType: "Mineral",
    chargingMethod: "Vapor or liquid",
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Legacy automotive AC, appliances (pre-1995)",
    notes: "BANNED - Production ceased 1996. High ODP and GWP. Service existing systems only with reclaimed refrigerant. Replaced by R-134a."
  },
  {
    name: "R-502",
    ashraeClass: "A1",
    type: "CFC",
    gwp: 4657,
    odp: 0.33,
    glideF: 0,
    typicalEvapSatTempF: -10,
    evapPressure40Fpsig: 84,
    typicalCondSatTempF: 120,
    oilType: "Mineral or Alkylbenzene",
    chargingMethod: "Vapor or liquid",
    a2lWarning: false,
    dewPointRule: false,
    bubblePointRule: false,
    typicalApplications: "Legacy low-temp commercial refrigeration",
    notes: "BANNED - Production ceased 1996. High ODP and GWP. Service existing systems only with reclaimed refrigerant. Replaced by R-404A, R-407A."
  }
];
function searchRefrigerants(searchTerm) {
  const term = searchTerm.toLowerCase();
  return REFRIGERANT_DATABASE.filter(
    (ref) => ref.name.toLowerCase().includes(term) || ref.typicalApplications.toLowerCase().includes(term) || ref.notes.toLowerCase().includes(term) || ref.type.toLowerCase().includes(term)
  );
}
const useQRScanner = (config) => {
  const {
    scanInterval = 100,
    maxResults = 10,
    jsQRUrl = "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",
    ...cameraConfig
  } = config;
  const [qrResults, setQrResults] = reactExports.useState([]);
  const [isScanning, setIsScanning] = reactExports.useState(false);
  const [jsQRLoaded, setJsQRLoaded] = reactExports.useState(false);
  const scanIntervalRef = reactExports.useRef(null);
  const lastScanRef = reactExports.useRef("");
  const isMountedRef = reactExports.useRef(true);
  const camera = useCamera(cameraConfig);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.jsQR) {
      setJsQRLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = jsQRUrl;
    script.onload = () => {
      if (isMountedRef.current) {
        setJsQRLoaded(true);
      }
    };
    script.onerror = () => console.error("Failed to load jsQR library");
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [jsQRUrl]);
  reactExports.useEffect(() => {
    return () => {
      isMountedRef.current = false;
      if (scanIntervalRef.current) {
        clearInterval(scanIntervalRef.current);
      }
    };
  }, []);
  const scanQRCode = reactExports.useCallback(() => {
    if (!camera.videoRef.current || !camera.canvasRef.current || !jsQRLoaded || !window.jsQR) {
      return;
    }
    const video = camera.videoRef.current;
    const canvas = camera.canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context || video.readyState !== video.HAVE_ENOUGH_DATA) {
      return;
    }
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = window.jsQR(imageData.data, imageData.width, imageData.height);
    if ((code == null ? void 0 : code.data) && code.data !== lastScanRef.current) {
      lastScanRef.current = code.data;
      const newResult = {
        data: code.data,
        timestamp: Date.now()
      };
      if (isMountedRef.current) {
        setQrResults((prev) => [newResult, ...prev.slice(0, maxResults - 1)]);
      }
    }
  }, [camera.videoRef, camera.canvasRef, jsQRLoaded, maxResults]);
  reactExports.useEffect(() => {
    if (isScanning && camera.isActive && jsQRLoaded) {
      scanIntervalRef.current = setInterval(scanQRCode, scanInterval);
    } else {
      if (scanIntervalRef.current) {
        clearInterval(scanIntervalRef.current);
        scanIntervalRef.current = null;
      }
    }
    return () => {
      if (scanIntervalRef.current) {
        clearInterval(scanIntervalRef.current);
      }
    };
  }, [isScanning, camera.isActive, jsQRLoaded, scanQRCode, scanInterval]);
  const startScanning = reactExports.useCallback(async () => {
    if (!camera.isActive) {
      const success = await camera.startCamera();
      if (success) {
        setIsScanning(true);
        return true;
      }
      return false;
    }
    setIsScanning(true);
    return true;
  }, [camera.isActive, camera.startCamera]);
  const stopScanning = reactExports.useCallback(async () => {
    setIsScanning(false);
    await camera.stopCamera();
    lastScanRef.current = "";
  }, [camera.stopCamera]);
  const switchCamera = reactExports.useCallback(async () => {
    const success = await camera.switchCamera();
    if (success && isScanning) {
      lastScanRef.current = "";
    }
    return success;
  }, [camera.switchCamera, isScanning]);
  const clearResults = reactExports.useCallback(() => {
    setQrResults([]);
    lastScanRef.current = "";
  }, []);
  const reset = reactExports.useCallback(() => {
    setIsScanning(false);
    clearResults();
  }, [clearResults]);
  return {
    // QR Scanner state
    qrResults,
    isScanning,
    jsQRLoaded,
    // Camera state (pass-through)
    isActive: camera.isActive,
    isSupported: camera.isSupported,
    error: camera.error,
    isLoading: camera.isLoading,
    currentFacingMode: camera.currentFacingMode,
    // Actions
    startScanning,
    stopScanning,
    switchCamera,
    clearResults,
    reset,
    retry: camera.retry,
    // Refs for components
    videoRef: camera.videoRef,
    canvasRef: camera.canvasRef,
    // Computed state
    isReady: jsQRLoaded && camera.isSupported !== false,
    canStartScanning: jsQRLoaded && camera.isSupported === true && !camera.isLoading
  };
};
const MOCK_PARTS_DATABASE = [
  {
    id: "1",
    name: "R-410A Refrigerant",
    category: "Refrigerant",
    manufacturer: "Various",
    modelNumber: "R-410A",
    capacity: "Various cylinder sizes",
    operatingConditions: "High-pressure refrigerant",
    refrigerant: "R-410A (HFC blend)",
    description: "High-pressure refrigerant for residential and light commercial AC systems. Replaces R-22.",
    certifications: ["EPA 608 Type II", "AHRI Certified"],
    compatibility: ["Residential AC", "Heat Pumps", "Light Commercial"],
    price: 150,
    available: true,
    studyModuleLink: "/study/epa-608/core/refrigerant-classification",
    troubleshootingLink: "/troubleshooter"
  },
  {
    id: "2",
    name: "Scroll Compressor 3-Ton",
    category: "Compressor",
    manufacturer: "Copeland",
    modelNumber: "ZP36K5E-PFV",
    capacity: "36,000 BTU/hr (3 Ton)",
    electrical: "208-230V, 1-Phase, 60Hz, 17.5 RLA",
    refrigerant: "R-410A",
    operatingConditions: "-20°F to 150°F ambient",
    dimensions: '12" x 10" x 14"',
    weight: "65 lbs",
    soundLevel: "72 dB",
    description: "High-efficiency scroll compressor for residential AC and heat pump applications.",
    certifications: ["UL Listed", "AHRI Certified"],
    compatibility: ["3-Ton AC Units", "3-Ton Heat Pumps"],
    price: 850,
    available: true,
    installationGuide: "/resources/compressor-installation",
    troubleshootingLink: "/troubleshooter"
  },
  {
    id: "3",
    name: "Evaporator Coil A-Frame",
    category: "Heat Exchanger",
    manufacturer: "Carrier",
    modelNumber: "CNPVP3617ALA",
    capacity: "3-Ton",
    airflow: "1200 CFM",
    operatingConditions: "35°F to 125°F",
    refrigerant: "R-410A",
    dimensions: '21" W x 24" H x 18" D',
    weight: "45 lbs",
    description: "A-frame evaporator coil with aluminum fins and copper tubing for optimal heat transfer.",
    certifications: ["AHRI Certified"],
    compatibility: ["3-Ton Air Handlers", "Furnaces"],
    price: 425,
    available: true,
    studyModuleLink: "/study/core-lessons/refrigeration-cycle"
  },
  {
    id: "4",
    name: "Digital Programmable Thermostat",
    category: "Controls",
    manufacturer: "Honeywell",
    modelNumber: "RTH9585WF",
    electrical: "24VAC, C-wire required",
    operatingConditions: "32°F to 99°F",
    description: "WiFi-enabled programmable thermostat with 7-day scheduling and mobile app control.",
    certifications: ["Energy Star"],
    compatibility: ["Single-stage", "Multi-stage", "Heat Pumps"],
    price: 180,
    available: true,
    installationGuide: "/resources/thermostat-wiring"
  },
  {
    id: "5",
    name: "MERV 13 Air Filter 20x25x4",
    category: "Filtration",
    manufacturer: "Filtrete",
    modelNumber: "2200-4",
    airflow: "Up to 2000 CFM",
    operatingConditions: "Standard HVAC applications",
    dimensions: '20" x 25" x 4"',
    description: "High-efficiency pleated air filter capturing 98% of airborne particles.",
    certifications: ["MERV 13 Rated"],
    compatibility: ['Standard 4" filter racks'],
    price: 35,
    available: true
  },
  {
    id: "6",
    name: "Condensing Unit 3-Ton 16 SEER",
    category: "Equipment",
    manufacturer: "Trane",
    modelNumber: "4TTR6036N1000A",
    capacity: "36,000 BTU/hr (3 Ton)",
    efficiency: "16 SEER",
    electrical: "208-230V, 1-Phase, 60Hz, 18 RLA",
    refrigerant: "R-410A, 8.5 lbs",
    operatingConditions: "-20°F to 125°F ambient",
    dimensions: '35" W x 35" H x 35" D',
    weight: "185 lbs",
    soundLevel: "74 dB",
    description: "High-efficiency outdoor condensing unit with scroll compressor and aluminum coil.",
    certifications: ["AHRI Certified", "Energy Star"],
    compatibility: ["Matching Air Handlers", "Furnaces"],
    price: 2100,
    available: true
  }
];
const CATEGORIES = [
  "All",
  "Refrigerant",
  "Compressor",
  "Heat Exchanger",
  "Controls",
  "Filtration",
  "Equipment",
  "Ductwork",
  "Insulation"
];
const MANUFACTURERS = [
  "All",
  "Carrier",
  "Trane",
  "Lennox",
  "Goodman",
  "Rheem",
  "York",
  "Copeland",
  "Honeywell",
  "Filtrete"
];
function PartsTab() {
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  const [selectedManufacturer, setSelectedManufacturer] = reactExports.useState("All");
  const [showQRScanner, setShowQRScanner] = reactExports.useState(false);
  const [selectedPart, setSelectedPart] = reactExports.useState(null);
  const [compareList, setCompareList] = reactExports.useState([]);
  const [showResources, setShowResources] = reactExports.useState(false);
  const [showRefrigerantDatabase, setShowRefrigerantDatabase] = reactExports.useState(false);
  const [selectedRefrigerant, setSelectedRefrigerant] = reactExports.useState(null);
  const [refrigerantSearch, setRefrigerantSearch] = reactExports.useState("");
  const [refrigerantTypeFilter, setRefrigerantTypeFilter] = reactExports.useState("All");
  const {
    qrResults,
    isScanning,
    startScanning,
    stopScanning,
    videoRef,
    canvasRef,
    error: scanError
  } = useQRScanner({
    facingMode: "environment",
    scanInterval: 100
  });
  const filteredParts = MOCK_PARTS_DATABASE.filter((part) => {
    const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) || part.modelNumber.toLowerCase().includes(searchQuery.toLowerCase()) || part.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) || part.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || part.category === selectedCategory;
    const matchesManufacturer = selectedManufacturer === "All" || part.manufacturer === selectedManufacturer;
    return matchesSearch && matchesCategory && matchesManufacturer;
  });
  const filteredRefrigerants = refrigerantSearch ? searchRefrigerants(refrigerantSearch) : refrigerantTypeFilter === "All" ? REFRIGERANT_DATABASE : REFRIGERANT_DATABASE.filter(
    (ref) => ref.type === refrigerantTypeFilter
  );
  const handleStartQRScan = async () => {
    setShowQRScanner(true);
    await startScanning();
  };
  const handleStopQRScan = async () => {
    await stopScanning();
    setShowQRScanner(false);
  };
  if (qrResults.length > 0 && qrResults[0].data) {
    const latestScan = qrResults[0].data;
    if (latestScan !== searchQuery) {
      setSearchQuery(latestScan);
      handleStopQRScan();
    }
  }
  const toggleCompare = (part) => {
    if (compareList.find((p) => p.id === part.id)) {
      setCompareList(compareList.filter((p) => p.id !== part.id));
    } else if (compareList.length < 4) {
      setCompareList([...compareList, part]);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-5 w-5" }),
            "Parts & Specs Database"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Comprehensive HVAC component specifications with search, filtering, and comparison tools" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: () => setShowRefrigerantDatabase(true),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Droplet, { className: "mr-2 h-4 w-4" }),
                "Refrigerant Database"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => setShowResources(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
            "Find Specs & Catalogs"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Search by name, model, manufacturer, or description...",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  className: "pl-9"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "icon",
                onClick: handleStartQRScan,
                title: "Scan QR/Barcode",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "icon",
                title: "Voice Search (Coming Soon)",
                disabled: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: selectedCategory,
                onValueChange: setSelectedCategory,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "w-[180px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "mr-2 h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Category" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: cat, children: cat }, cat)) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: selectedManufacturer,
                onValueChange: setSelectedManufacturer,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Manufacturer" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: MANUFACTURERS.map((mfr) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: mfr, children: mfr }, mfr)) })
                ]
              }
            ),
            (selectedCategory !== "All" || selectedManufacturer !== "All" || searchQuery) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => {
                  setSelectedCategory("All");
                  setSelectedManufacturer("All");
                  setSearchQuery("");
                },
                children: "Clear Filters"
              }
            )
          ] })
        ] }),
        compareList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              compareList.length,
              " part",
              compareList.length > 1 ? "s" : "",
              " ",
              "selected for comparison"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  onClick: () => setCompareList([]),
                  children: "Clear"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", disabled: compareList.length < 2, children: [
                "Compare (",
                compareList.length,
                "/4)"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filteredParts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "No parts found matching your search criteria. Try adjusting your filters or search terms." })
        ] }) : filteredParts.map((part) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-start justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-card-foreground", children: part.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: part.category }),
                    !part.available && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: "Out of Stock" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    part.manufacturer,
                    " • Model: ",
                    part.modelNumber
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      checked: compareList.some((p) => p.id === part.id),
                      onCheckedChange: () => toggleCompare(part),
                      disabled: compareList.length >= 4 && !compareList.some((p) => p.id === part.id)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      onClick: () => setSelectedPart(part),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "mr-1 h-3 w-3" }),
                        "Details"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm", children: part.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3", children: [
                part.capacity && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Capacity:" }),
                  " ",
                  part.capacity
                ] }),
                part.efficiency && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Efficiency:" }),
                  " ",
                  part.efficiency
                ] }),
                part.electrical && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Electrical:" }),
                  " ",
                  part.electrical
                ] }),
                part.refrigerant && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Refrigerant:" }),
                  " ",
                  part.refrigerant
                ] }),
                part.airflow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Airflow:" }),
                  " ",
                  part.airflow
                ] }),
                part.soundLevel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Sound:" }),
                  " ",
                  part.soundLevel
                ] })
              ] }),
              part.price && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between border-t border-border pt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-semibold text-primary", children: [
                  "$",
                  part.price.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  part.studyModuleLink && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: part.studyModuleLink, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "mr-1 h-3 w-3" }),
                    "Learn"
                  ] }) }),
                  part.troubleshootingLink && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: part.troubleshootingLink, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "mr-1 h-3 w-3" }),
                    "Diagnose"
                  ] }) })
                ] })
              ] })
            ]
          },
          part.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm text-muted-foreground", children: [
          "Showing ",
          filteredParts.length,
          " of ",
          MOCK_PARTS_DATABASE.length,
          " parts"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: showRefrigerantDatabase,
        onOpenChange: setShowRefrigerantDatabase,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-6xl max-h-[90vh]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Droplet, { className: "h-5 w-5" }),
              "Refrigerant Specification Database"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Complete technical specifications for common HVAC refrigerants including GWP, ODP, pressures, and safety information" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "Search refrigerants by name, application, or notes...",
                    value: refrigerantSearch,
                    onChange: (e) => setRefrigerantSearch(e.target.value),
                    className: "pl-9"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: refrigerantTypeFilter,
                  onValueChange: setRefrigerantTypeFilter,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Type" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "All", children: "All Types" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "HFC", children: "HFC" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "HFO", children: "HFO" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "HCFC", children: "HCFC" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "CFC", children: "CFC" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Natural", children: "Natural" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Blend", children: "Blend" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[500px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Refrigerant" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "ASHRAE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "GWP" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "ODP" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Evap Pressure (40°F)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Applications" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, {})
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredRefrigerants.map((ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TableRow,
                {
                  className: "cursor-pointer hover:bg-muted/50",
                  onClick: () => setSelectedRefrigerant(ref),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      ref.name,
                      ref.a2lWarning && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Badge,
                        {
                          variant: "outline",
                          className: "text-orange-600 border-orange-600",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mr-1 h-3 w-3" }),
                            "A2L"
                          ]
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: ref.type }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: ref.ashraeClass }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: ref.gwp.toLocaleString() }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: ref.odp.toFixed(3) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-right", children: [
                      ref.evapPressure40Fpsig.toFixed(1),
                      " psig"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "max-w-xs truncate text-sm text-muted-foreground", children: ref.typicalApplications }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        onClick: (e) => {
                          e.stopPropagation();
                          setSelectedRefrigerant(ref);
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" })
                      }
                    ) })
                  ]
                },
                ref.name
              )) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm text-muted-foreground", children: [
              "Showing ",
              filteredRefrigerants.length,
              " of",
              " ",
              REFRIGERANT_DATABASE.length,
              " refrigerants"
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!selectedRefrigerant,
        onOpenChange: (open) => !open && setSelectedRefrigerant(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Droplet, { className: "h-5 w-5" }),
              selectedRefrigerant == null ? void 0 : selectedRefrigerant.name,
              " Specifications"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
              selectedRefrigerant == null ? void 0 : selectedRefrigerant.type,
              " • ASHRAE Class",
              " ",
              selectedRefrigerant == null ? void 0 : selectedRefrigerant.ashraeClass
            ] })
          ] }),
          selectedRefrigerant && /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[500px] pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            selectedRefrigerant.a2lWarning && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "border-orange-600 bg-orange-50 dark:bg-orange-950", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-orange-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-orange-900 dark:text-orange-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A2L Refrigerant:" }),
                " Mildly flammable. Requires specialized equipment, training, and safety precautions. Follow manufacturer guidelines and local codes."
              ] })
            ] }),
            selectedRefrigerant.ashraeClass.startsWith("B") && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Toxic Refrigerant:" }),
                " Higher toxicity classification. Requires proper ventilation, leak detection, and safety equipment. Follow OSHA and EPA guidelines."
              ] })
            ] }),
            selectedRefrigerant.ashraeClass.includes("3") && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Highly Flammable:" }),
                " Class A3 refrigerant. Extreme fire hazard. Requires specialized training, equipment, and strict safety protocols."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-3 font-semibold", children: "Environmental Impact" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Global Warming Potential (GWP)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-primary", children: selectedRefrigerant.gwp.toLocaleString() }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: selectedRefrigerant.gwp < 150 ? "Ultra-low GWP" : selectedRefrigerant.gwp < 700 ? "Low GWP" : selectedRefrigerant.gwp < 2e3 ? "Medium GWP" : "High GWP" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Ozone Depletion Potential (ODP)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-primary", children: selectedRefrigerant.odp.toFixed(3) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: selectedRefrigerant.odp === 0 ? "No ozone depletion" : "Ozone depleting" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-3 font-semibold", children: "Operating Characteristics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Evaporator Pressure @ 40°F" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    selectedRefrigerant.evapPressure40Fpsig.toFixed(1),
                    " ",
                    "psig"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Typical Evap Sat Temp" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    selectedRefrigerant.typicalEvapSatTempF.toFixed(0),
                    "°F"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Typical Cond Sat Temp" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    selectedRefrigerant.typicalCondSatTempF.toFixed(0),
                    "°F"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Temperature Glide" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    selectedRefrigerant.glideF.toFixed(1),
                    "°F"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-3 font-semibold", children: "Service Information" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Oil Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedRefrigerant.oilType })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Charging Method" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedRefrigerant.chargingMethod })
                ] }),
                selectedRefrigerant.dewPointRule && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Dew Point Rule" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Use dew point for charging" })
                ] }),
                selectedRefrigerant.bubblePointRule && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Bubble Point Rule" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Use bubble point for charging" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 font-semibold", children: "Typical Applications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedRefrigerant.typicalApplications })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 font-semibold", children: "Important Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedRefrigerant.notes })
            ] })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!selectedPart,
        onOpenChange: (open) => !open && setSelectedPart(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: selectedPart == null ? void 0 : selectedPart.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
              selectedPart == null ? void 0 : selectedPart.manufacturer,
              " • Model: ",
              selectedPart == null ? void 0 : selectedPart.modelNumber
            ] })
          ] }),
          selectedPart && /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "specs", className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "specs", children: "Specifications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "compatibility", children: "Compatibility" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "resources", children: "Resources" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "specs", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[400px] pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 font-semibold", children: "Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedPart.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
                selectedPart.capacity && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Capacity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedPart.capacity })
                ] }),
                selectedPart.airflow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Airflow" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedPart.airflow })
                ] }),
                selectedPart.operatingConditions && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Operating Conditions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedPart.operatingConditions })
                ] }),
                selectedPart.electrical && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Electrical" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedPart.electrical })
                ] }),
                selectedPart.refrigerant && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Refrigerant" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedPart.refrigerant })
                ] }),
                selectedPart.dimensions && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Dimensions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedPart.dimensions })
                ] }),
                selectedPart.weight && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Weight" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedPart.weight })
                ] }),
                selectedPart.soundLevel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Sound Level" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedPart.soundLevel })
                ] }),
                selectedPart.efficiency && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Efficiency" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedPart.efficiency })
                ] })
              ] }),
              selectedPart.certifications && selectedPart.certifications.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 font-semibold", children: "Certifications" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: selectedPart.certifications.map((cert) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: cert }, cert)) })
                ] })
              ] }),
              selectedPart.price && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 font-semibold", children: "Pricing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-primary", children: [
                    "$",
                    selectedPart.price.toFixed(2)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedPart.available ? "In Stock" : "Out of Stock" })
                ] })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "compatibility", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[400px] pr-4", children: selectedPart.compatibility && selectedPart.compatibility.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Compatible Systems" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: selectedPart.compatibility.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center gap-2 text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-primary" }),
                    item
                  ]
                },
                idx
              )) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No compatibility information available." }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "resources", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[400px] pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              selectedPart.installationGuide && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  className: "w-full justify-start",
                  asChild: true,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: selectedPart.installationGuide, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "mr-2 h-4 w-4" }),
                    "Installation Guide"
                  ] })
                }
              ),
              selectedPart.troubleshootingLink && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  className: "w-full justify-start",
                  asChild: true,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: selectedPart.troubleshootingLink, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "mr-2 h-4 w-4" }),
                    "Troubleshooting Workflow"
                  ] })
                }
              ),
              selectedPart.studyModuleLink && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  className: "w-full justify-start",
                  asChild: true,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: selectedPart.studyModuleLink, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "mr-2 h-4 w-4" }),
                    "Related Study Module"
                  ] })
                }
              ),
              !selectedPart.installationGuide && !selectedPart.troubleshootingLink && !selectedPart.studyModuleLink && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No additional resources available." })
            ] }) }) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: showQRScanner,
        onOpenChange: (open) => !open && handleStopQRScan(),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Scan QR Code or Barcode" }) }),
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
            scanError && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: scanError.message }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: handleStopQRScan,
                  variant: "outline",
                  className: "flex-1",
                  children: "Cancel"
                }
              ),
              !isScanning && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: startScanning, className: "flex-1", children: "Start Scanning" })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showResources, onOpenChange: setShowResources, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Find Specs & Catalogs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Access legitimate HVAC specification resources from manufacturers and government sources" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[500px] pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-lg font-semibold", children: "Manufacturer Resources" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full justify-start",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://www.tranesupply.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
                      "Trane Supply - Commercial & Residential Equipment Catalogs"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full justify-start",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://www.johnstonesupply.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
                      "Johnstone Supply - HVAC Parts & Equipment Specs"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full justify-start",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://www.carrier.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
                      "Carrier - Product Line Specifications & Installation Manuals"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full justify-start",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://www.lennox.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
                      "Lennox - Residential & Commercial Equipment Data"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full justify-start",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://www.york.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
                      "York/Johnson Controls - HVAC Equipment Specifications"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full justify-start",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://www.rheem.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
                      "Rheem/Ruud - Water Heating & HVAC Equipment Specs"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full justify-start",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://www.goodmanmfg.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
                      "Goodman/Amana - Residential HVAC Equipment Data"
                    ]
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-lg font-semibold", children: "Government & Industry Resources" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full justify-start",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://www.huduser.gov",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
                      "HUD User - Building Technology & Energy Efficiency Guides"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full justify-start",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://www.energystar.gov",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
                      "ENERGY STAR - Efficiency Ratings & Qualified Product Lists"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "w-full justify-start",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://www.ahridirectory.org",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
                      "AHRI Directory - Certified Equipment Database"
                    ]
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-lg font-semibold", children: "Orlando-Area Suppliers (Example)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm text-muted-foreground", children: "Local supplier locations for reference. Contact directly for current inventory and pricing." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Johnstone Supply - Orlando" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Multiple locations throughout Central Florida" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Ferguson HVAC - Orlando" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Commercial and residential HVAC supplies" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Baker Distributing - Orlando" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Full-line HVAC distributor" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
            " Always verify specifications with manufacturer documentation before installation. Links provided are for reference and educational purposes."
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  PartsTab as default
};
