import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Database, Search, Loader2, QrCode, Mic, Filter, ExternalLink, BookOpen, Wrench, Info, Download, X, Droplet, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useQRScanner } from '../../qr-code/useQRScanner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { REFRIGERANT_DATABASE, filterRefrigerants, searchRefrigerants, type RefrigerantSpec } from '@/data/refrigerantDatabase';

// Comprehensive HVAC Parts Database
interface HVACPart {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  modelNumber: string;
  capacity?: string;
  airflow?: string;
  operatingConditions?: string;
  electrical?: string;
  refrigerant?: string;
  dimensions?: string;
  weight?: string;
  soundLevel?: string;
  efficiency?: string;
  certifications?: string[];
  compatibility?: string[];
  price?: number;
  available: boolean;
  description: string;
  installationGuide?: string;
  troubleshootingLink?: string;
  studyModuleLink?: string;
}

const MOCK_PARTS_DATABASE: HVACPart[] = [
  {
    id: '1',
    name: 'R-410A Refrigerant',
    category: 'Refrigerant',
    manufacturer: 'Various',
    modelNumber: 'R-410A',
    capacity: 'Various cylinder sizes',
    operatingConditions: 'High-pressure refrigerant',
    refrigerant: 'R-410A (HFC blend)',
    description: 'High-pressure refrigerant for residential and light commercial AC systems. Replaces R-22.',
    certifications: ['EPA 608 Type II', 'AHRI Certified'],
    compatibility: ['Residential AC', 'Heat Pumps', 'Light Commercial'],
    price: 150,
    available: true,
    studyModuleLink: '/study/epa-608/core/refrigerant-classification',
    troubleshootingLink: '/troubleshooter',
  },
  {
    id: '2',
    name: 'Scroll Compressor 3-Ton',
    category: 'Compressor',
    manufacturer: 'Copeland',
    modelNumber: 'ZP36K5E-PFV',
    capacity: '36,000 BTU/hr (3 Ton)',
    electrical: '208-230V, 1-Phase, 60Hz, 17.5 RLA',
    refrigerant: 'R-410A',
    operatingConditions: '-20°F to 150°F ambient',
    dimensions: '12" x 10" x 14"',
    weight: '65 lbs',
    soundLevel: '72 dB',
    description: 'High-efficiency scroll compressor for residential AC and heat pump applications.',
    certifications: ['UL Listed', 'AHRI Certified'],
    compatibility: ['3-Ton AC Units', '3-Ton Heat Pumps'],
    price: 850,
    available: true,
    installationGuide: '/resources/compressor-installation',
    troubleshootingLink: '/troubleshooter',
  },
  {
    id: '3',
    name: 'Evaporator Coil A-Frame',
    category: 'Heat Exchanger',
    manufacturer: 'Carrier',
    modelNumber: 'CNPVP3617ALA',
    capacity: '3-Ton',
    airflow: '1200 CFM',
    operatingConditions: '35°F to 125°F',
    refrigerant: 'R-410A',
    dimensions: '21" W x 24" H x 18" D',
    weight: '45 lbs',
    description: 'A-frame evaporator coil with aluminum fins and copper tubing for optimal heat transfer.',
    certifications: ['AHRI Certified'],
    compatibility: ['3-Ton Air Handlers', 'Furnaces'],
    price: 425,
    available: true,
    studyModuleLink: '/study/core-lessons/refrigeration-cycle',
  },
  {
    id: '4',
    name: 'Digital Programmable Thermostat',
    category: 'Controls',
    manufacturer: 'Honeywell',
    modelNumber: 'RTH9585WF',
    electrical: '24VAC, C-wire required',
    operatingConditions: '32°F to 99°F',
    description: 'WiFi-enabled programmable thermostat with 7-day scheduling and mobile app control.',
    certifications: ['Energy Star'],
    compatibility: ['Single-stage', 'Multi-stage', 'Heat Pumps'],
    price: 180,
    available: true,
    installationGuide: '/resources/thermostat-wiring',
  },
  {
    id: '5',
    name: 'MERV 13 Air Filter 20x25x4',
    category: 'Filtration',
    manufacturer: 'Filtrete',
    modelNumber: '2200-4',
    airflow: 'Up to 2000 CFM',
    operatingConditions: 'Standard HVAC applications',
    dimensions: '20" x 25" x 4"',
    description: 'High-efficiency pleated air filter capturing 98% of airborne particles.',
    certifications: ['MERV 13 Rated'],
    compatibility: ['Standard 4" filter racks'],
    price: 35,
    available: true,
  },
  {
    id: '6',
    name: 'Condensing Unit 3-Ton 16 SEER',
    category: 'Equipment',
    manufacturer: 'Trane',
    modelNumber: '4TTR6036N1000A',
    capacity: '36,000 BTU/hr (3 Ton)',
    efficiency: '16 SEER',
    electrical: '208-230V, 1-Phase, 60Hz, 18 RLA',
    refrigerant: 'R-410A, 8.5 lbs',
    operatingConditions: '-20°F to 125°F ambient',
    dimensions: '35" W x 35" H x 35" D',
    weight: '185 lbs',
    soundLevel: '74 dB',
    description: 'High-efficiency outdoor condensing unit with scroll compressor and aluminum coil.',
    certifications: ['AHRI Certified', 'Energy Star'],
    compatibility: ['Matching Air Handlers', 'Furnaces'],
    price: 2100,
    available: true,
  },
];

const CATEGORIES = ['All', 'Refrigerant', 'Compressor', 'Heat Exchanger', 'Controls', 'Filtration', 'Equipment', 'Ductwork', 'Insulation'];

const MANUFACTURERS = ['All', 'Carrier', 'Trane', 'Lennox', 'Goodman', 'Rheem', 'York', 'Copeland', 'Honeywell', 'Filtrete'];

export default function PartsTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedManufacturer, setSelectedManufacturer] = useState('All');
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [selectedPart, setSelectedPart] = useState<HVACPart | null>(null);
  const [compareList, setCompareList] = useState<HVACPart[]>([]);
  const [showResources, setShowResources] = useState(false);
  const [showRefrigerantDatabase, setShowRefrigerantDatabase] = useState(false);
  const [selectedRefrigerant, setSelectedRefrigerant] = useState<RefrigerantSpec | null>(null);
  const [refrigerantSearch, setRefrigerantSearch] = useState('');
  const [refrigerantTypeFilter, setRefrigerantTypeFilter] = useState<string>('All');

  const {
    qrResults,
    isScanning,
    startScanning,
    stopScanning,
    videoRef,
    canvasRef,
    error: scanError,
  } = useQRScanner({
    facingMode: 'environment',
    scanInterval: 100,
  });

  // Filter parts based on search and filters
  const filteredParts = MOCK_PARTS_DATABASE.filter((part) => {
    const matchesSearch =
      part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.modelNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || part.category === selectedCategory;
    const matchesManufacturer = selectedManufacturer === 'All' || part.manufacturer === selectedManufacturer;

    return matchesSearch && matchesCategory && matchesManufacturer;
  });

  // Filter refrigerants
  const filteredRefrigerants = refrigerantSearch
    ? searchRefrigerants(refrigerantSearch)
    : refrigerantTypeFilter === 'All'
    ? REFRIGERANT_DATABASE
    : REFRIGERANT_DATABASE.filter(ref => ref.type === refrigerantTypeFilter);

  const handleStartQRScan = async () => {
    setShowQRScanner(true);
    await startScanning();
  };

  const handleStopQRScan = async () => {
    await stopScanning();
    setShowQRScanner(false);
  };

  // Auto-search when QR code is scanned
  if (qrResults.length > 0 && qrResults[0].data) {
    const latestScan = qrResults[0].data;
    if (latestScan !== searchQuery) {
      setSearchQuery(latestScan);
      handleStopQRScan();
    }
  }

  const toggleCompare = (part: HVACPart) => {
    if (compareList.find((p) => p.id === part.id)) {
      setCompareList(compareList.filter((p) => p.id !== part.id));
    } else if (compareList.length < 4) {
      setCompareList([...compareList, part]);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Parts & Specs Database
              </CardTitle>
              <CardDescription>
                Comprehensive HVAC component specifications with search, filtering, and comparison tools
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setShowRefrigerantDatabase(true)}>
                <Droplet className="mr-2 h-4 w-4" />
                Refrigerant Database
              </Button>
              <Button variant="outline" onClick={() => setShowResources(true)}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Find Specs & Catalogs
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filter Bar */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by name, model, manufacturer, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button variant="outline" size="icon" onClick={handleStartQRScan} title="Scan QR/Barcode">
                <QrCode className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" title="Voice Search (Coming Soon)" disabled>
                <Mic className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedManufacturer} onValueChange={setSelectedManufacturer}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Manufacturer" />
                </SelectTrigger>
                <SelectContent>
                  {MANUFACTURERS.map((mfr) => (
                    <SelectItem key={mfr} value={mfr}>
                      {mfr}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(selectedCategory !== 'All' || selectedManufacturer !== 'All' || searchQuery) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedManufacturer('All');
                    setSearchQuery('');
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {/* Compare Bar */}
          {compareList.length > 0 && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription className="flex items-center justify-between">
                <span>
                  {compareList.length} part{compareList.length > 1 ? 's' : ''} selected for comparison
                </span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => setCompareList([])}>
                    Clear
                  </Button>
                  <Button size="sm" disabled={compareList.length < 2}>
                    Compare ({compareList.length}/4)
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Parts List */}
          <div className="space-y-3">
            {filteredParts.length === 0 ? (
              <Alert>
                <Database className="h-4 w-4" />
                <AlertDescription>
                  No parts found matching your search criteria. Try adjusting your filters or search terms.
                </AlertDescription>
              </Alert>
            ) : (
              filteredParts.map((part) => (
                <div key={part.id} className="rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="font-semibold text-card-foreground">{part.name}</h3>
                        <Badge variant="outline">{part.category}</Badge>
                        {!part.available && <Badge variant="secondary">Out of Stock</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {part.manufacturer} • Model: {part.modelNumber}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={compareList.some((p) => p.id === part.id)}
                        onCheckedChange={() => toggleCompare(part)}
                        disabled={compareList.length >= 4 && !compareList.some((p) => p.id === part.id)}
                      />
                      <Button variant="outline" size="sm" onClick={() => setSelectedPart(part)}>
                        <Info className="mr-1 h-3 w-3" />
                        Details
                      </Button>
                    </div>
                  </div>

                  <p className="mb-3 text-sm">{part.description}</p>

                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {part.capacity && (
                      <div className="text-sm">
                        <span className="font-medium">Capacity:</span> {part.capacity}
                      </div>
                    )}
                    {part.efficiency && (
                      <div className="text-sm">
                        <span className="font-medium">Efficiency:</span> {part.efficiency}
                      </div>
                    )}
                    {part.electrical && (
                      <div className="text-sm">
                        <span className="font-medium">Electrical:</span> {part.electrical}
                      </div>
                    )}
                    {part.refrigerant && (
                      <div className="text-sm">
                        <span className="font-medium">Refrigerant:</span> {part.refrigerant}
                      </div>
                    )}
                    {part.airflow && (
                      <div className="text-sm">
                        <span className="font-medium">Airflow:</span> {part.airflow}
                      </div>
                    )}
                    {part.soundLevel && (
                      <div className="text-sm">
                        <span className="font-medium">Sound:</span> {part.soundLevel}
                      </div>
                    )}
                  </div>

                  {part.price && (
                    <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                      <span className="text-lg font-semibold text-primary">${part.price.toFixed(2)}</span>
                      <div className="flex gap-2">
                        {part.studyModuleLink && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={part.studyModuleLink}>
                              <BookOpen className="mr-1 h-3 w-3" />
                              Learn
                            </a>
                          </Button>
                        )}
                        {part.troubleshootingLink && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={part.troubleshootingLink}>
                              <Wrench className="mr-1 h-3 w-3" />
                              Diagnose
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Showing {filteredParts.length} of {MOCK_PARTS_DATABASE.length} parts
          </div>
        </CardContent>
      </Card>

      {/* Refrigerant Database Dialog */}
      <Dialog open={showRefrigerantDatabase} onOpenChange={setShowRefrigerantDatabase}>
        <DialogContent className="max-w-6xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Droplet className="h-5 w-5" />
              Refrigerant Specification Database
            </DialogTitle>
            <DialogDescription>
              Complete technical specifications for common HVAC refrigerants including GWP, ODP, pressures, and safety information
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Search and Filter */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search refrigerants by name, application, or notes..."
                  value={refrigerantSearch}
                  onChange={(e) => setRefrigerantSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={refrigerantTypeFilter} onValueChange={setRefrigerantTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Types</SelectItem>
                  <SelectItem value="HFC">HFC</SelectItem>
                  <SelectItem value="HFO">HFO</SelectItem>
                  <SelectItem value="HCFC">HCFC</SelectItem>
                  <SelectItem value="CFC">CFC</SelectItem>
                  <SelectItem value="Natural">Natural</SelectItem>
                  <SelectItem value="Blend">Blend</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Refrigerant Table */}
            <ScrollArea className="h-[500px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Refrigerant</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>ASHRAE</TableHead>
                    <TableHead className="text-right">GWP</TableHead>
                    <TableHead className="text-right">ODP</TableHead>
                    <TableHead className="text-right">Evap Pressure (40°F)</TableHead>
                    <TableHead>Applications</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRefrigerants.map((ref) => (
                    <TableRow key={ref.name} className="cursor-pointer hover:bg-muted/50" onClick={() => setSelectedRefrigerant(ref)}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {ref.name}
                          {ref.a2lWarning && (
                            <Badge variant="outline" className="text-orange-600 border-orange-600">
                              <AlertTriangle className="mr-1 h-3 w-3" />
                              A2L
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{ref.type}</Badge>
                      </TableCell>
                      <TableCell>{ref.ashraeClass}</TableCell>
                      <TableCell className="text-right">{ref.gwp.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{ref.odp.toFixed(3)}</TableCell>
                      <TableCell className="text-right">{ref.evapPressure40Fpsig.toFixed(1)} psig</TableCell>
                      <TableCell className="max-w-xs truncate text-sm text-muted-foreground">
                        {ref.typicalApplications}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); setSelectedRefrigerant(ref); }}>
                          <Info className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>

            <div className="text-center text-sm text-muted-foreground">
              Showing {filteredRefrigerants.length} of {REFRIGERANT_DATABASE.length} refrigerants
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Refrigerant Details Dialog */}
      <Dialog open={!!selectedRefrigerant} onOpenChange={(open) => !open && setSelectedRefrigerant(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Droplet className="h-5 w-5" />
              {selectedRefrigerant?.name} Specifications
            </DialogTitle>
            <DialogDescription>
              {selectedRefrigerant?.type} • ASHRAE Class {selectedRefrigerant?.ashraeClass}
            </DialogDescription>
          </DialogHeader>
          {selectedRefrigerant && (
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-6">
                {/* Safety Warnings */}
                {selectedRefrigerant.a2lWarning && (
                  <Alert className="border-orange-600 bg-orange-50 dark:bg-orange-950">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    <AlertDescription className="text-orange-900 dark:text-orange-100">
                      <strong>A2L Refrigerant:</strong> Mildly flammable. Requires specialized equipment, training, and safety precautions. Follow manufacturer guidelines and local codes.
                    </AlertDescription>
                  </Alert>
                )}

                {selectedRefrigerant.ashraeClass.startsWith('B') && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Toxic Refrigerant:</strong> Higher toxicity classification. Requires proper ventilation, leak detection, and safety equipment. Follow OSHA and EPA guidelines.
                    </AlertDescription>
                  </Alert>
                )}

                {selectedRefrigerant.ashraeClass.includes('3') && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Highly Flammable:</strong> Class A3 refrigerant. Extreme fire hazard. Requires specialized training, equipment, and strict safety protocols.
                    </AlertDescription>
                  </Alert>
                )}

                {/* Environmental Impact */}
                <div>
                  <h4 className="mb-3 font-semibold">Environmental Impact</h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-3">
                      <p className="text-sm font-medium">Global Warming Potential (GWP)</p>
                      <p className="text-2xl font-bold text-primary">{selectedRefrigerant.gwp.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">
                        {selectedRefrigerant.gwp < 150 ? 'Ultra-low GWP' : selectedRefrigerant.gwp < 700 ? 'Low GWP' : selectedRefrigerant.gwp < 2000 ? 'Medium GWP' : 'High GWP'}
                      </p>
                    </div>
                    <div className="rounded-lg border border-border p-3">
                      <p className="text-sm font-medium">Ozone Depletion Potential (ODP)</p>
                      <p className="text-2xl font-bold text-primary">{selectedRefrigerant.odp.toFixed(3)}</p>
                      <p className="text-xs text-muted-foreground">
                        {selectedRefrigerant.odp === 0 ? 'No ozone depletion' : 'Ozone depleting'}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Operating Characteristics */}
                <div>
                  <h4 className="mb-3 font-semibold">Operating Characteristics</h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium">Evaporator Pressure @ 40°F</p>
                      <p className="text-sm text-muted-foreground">{selectedRefrigerant.evapPressure40Fpsig.toFixed(1)} psig</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Typical Evap Sat Temp</p>
                      <p className="text-sm text-muted-foreground">{selectedRefrigerant.typicalEvapSatTempF.toFixed(0)}°F</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Typical Cond Sat Temp</p>
                      <p className="text-sm text-muted-foreground">{selectedRefrigerant.typicalCondSatTempF.toFixed(0)}°F</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Temperature Glide</p>
                      <p className="text-sm text-muted-foreground">{selectedRefrigerant.glideF.toFixed(1)}°F</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Service Information */}
                <div>
                  <h4 className="mb-3 font-semibold">Service Information</h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium">Oil Type</p>
                      <p className="text-sm text-muted-foreground">{selectedRefrigerant.oilType}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Charging Method</p>
                      <p className="text-sm text-muted-foreground">{selectedRefrigerant.chargingMethod}</p>
                    </div>
                    {selectedRefrigerant.dewPointRule && (
                      <div>
                        <p className="text-sm font-medium">Dew Point Rule</p>
                        <p className="text-sm text-muted-foreground">Use dew point for charging</p>
                      </div>
                    )}
                    {selectedRefrigerant.bubblePointRule && (
                      <div>
                        <p className="text-sm font-medium">Bubble Point Rule</p>
                        <p className="text-sm text-muted-foreground">Use bubble point for charging</p>
                      </div>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Applications */}
                <div>
                  <h4 className="mb-2 font-semibold">Typical Applications</h4>
                  <p className="text-sm text-muted-foreground">{selectedRefrigerant.typicalApplications}</p>
                </div>

                <Separator />

                {/* Notes */}
                <div>
                  <h4 className="mb-2 font-semibold">Important Notes</h4>
                  <p className="text-sm text-muted-foreground">{selectedRefrigerant.notes}</p>
                </div>
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>

      {/* Part Details Dialog */}
      <Dialog open={!!selectedPart} onOpenChange={(open) => !open && setSelectedPart(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedPart?.name}</DialogTitle>
            <DialogDescription>
              {selectedPart?.manufacturer} • Model: {selectedPart?.modelNumber}
            </DialogDescription>
          </DialogHeader>
          {selectedPart && (
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              <TabsContent value="specs" className="space-y-4">
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold">Description</h4>
                      <p className="text-sm text-muted-foreground">{selectedPart.description}</p>
                    </div>

                    <Separator />

                    <div className="grid gap-3 sm:grid-cols-2">
                      {selectedPart.capacity && (
                        <div>
                          <p className="text-sm font-medium">Capacity</p>
                          <p className="text-sm text-muted-foreground">{selectedPart.capacity}</p>
                        </div>
                      )}
                      {selectedPart.airflow && (
                        <div>
                          <p className="text-sm font-medium">Airflow</p>
                          <p className="text-sm text-muted-foreground">{selectedPart.airflow}</p>
                        </div>
                      )}
                      {selectedPart.operatingConditions && (
                        <div>
                          <p className="text-sm font-medium">Operating Conditions</p>
                          <p className="text-sm text-muted-foreground">{selectedPart.operatingConditions}</p>
                        </div>
                      )}
                      {selectedPart.electrical && (
                        <div>
                          <p className="text-sm font-medium">Electrical</p>
                          <p className="text-sm text-muted-foreground">{selectedPart.electrical}</p>
                        </div>
                      )}
                      {selectedPart.refrigerant && (
                        <div>
                          <p className="text-sm font-medium">Refrigerant</p>
                          <p className="text-sm text-muted-foreground">{selectedPart.refrigerant}</p>
                        </div>
                      )}
                      {selectedPart.dimensions && (
                        <div>
                          <p className="text-sm font-medium">Dimensions</p>
                          <p className="text-sm text-muted-foreground">{selectedPart.dimensions}</p>
                        </div>
                      )}
                      {selectedPart.weight && (
                        <div>
                          <p className="text-sm font-medium">Weight</p>
                          <p className="text-sm text-muted-foreground">{selectedPart.weight}</p>
                        </div>
                      )}
                      {selectedPart.soundLevel && (
                        <div>
                          <p className="text-sm font-medium">Sound Level</p>
                          <p className="text-sm text-muted-foreground">{selectedPart.soundLevel}</p>
                        </div>
                      )}
                      {selectedPart.efficiency && (
                        <div>
                          <p className="text-sm font-medium">Efficiency</p>
                          <p className="text-sm text-muted-foreground">{selectedPart.efficiency}</p>
                        </div>
                      )}
                    </div>

                    {selectedPart.certifications && selectedPart.certifications.length > 0 && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="mb-2 font-semibold">Certifications</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedPart.certifications.map((cert) => (
                              <Badge key={cert} variant="secondary">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {selectedPart.price && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="mb-2 font-semibold">Pricing</h4>
                          <p className="text-2xl font-bold text-primary">${selectedPart.price.toFixed(2)}</p>
                          <p className="text-sm text-muted-foreground">
                            {selectedPart.available ? 'In Stock' : 'Out of Stock'}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="compatibility" className="space-y-4">
                <ScrollArea className="h-[400px] pr-4">
                  {selectedPart.compatibility && selectedPart.compatibility.length > 0 ? (
                    <div className="space-y-2">
                      <h4 className="font-semibold">Compatible Systems</h4>
                      <ul className="space-y-2">
                        {selectedPart.compatibility.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">No compatibility information available.</p>
                  )}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="resources" className="space-y-4">
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-3">
                    {selectedPart.installationGuide && (
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href={selectedPart.installationGuide}>
                          <Wrench className="mr-2 h-4 w-4" />
                          Installation Guide
                        </a>
                      </Button>
                    )}
                    {selectedPart.troubleshootingLink && (
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href={selectedPart.troubleshootingLink}>
                          <Wrench className="mr-2 h-4 w-4" />
                          Troubleshooting Workflow
                        </a>
                      </Button>
                    )}
                    {selectedPart.studyModuleLink && (
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href={selectedPart.studyModuleLink}>
                          <BookOpen className="mr-2 h-4 w-4" />
                          Related Study Module
                        </a>
                      </Button>
                    )}
                    {!selectedPart.installationGuide &&
                      !selectedPart.troubleshootingLink &&
                      !selectedPart.studyModuleLink && (
                        <p className="text-sm text-muted-foreground">No additional resources available.</p>
                      )}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>

      {/* QR Scanner Dialog */}
      <Dialog open={showQRScanner} onOpenChange={(open) => !open && handleStopQRScan()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Scan QR Code or Barcode</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
              <video ref={videoRef} className="h-full w-full object-cover" playsInline muted autoPlay />
              <canvas ref={canvasRef} className="hidden" />
            </div>
            {scanError && (
              <Alert variant="destructive">
                <AlertDescription>{scanError.message}</AlertDescription>
              </Alert>
            )}
            <div className="flex gap-2">
              <Button onClick={handleStopQRScan} variant="outline" className="flex-1">
                Cancel
              </Button>
              {!isScanning && (
                <Button onClick={startScanning} className="flex-1">
                  Start Scanning
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Resources Dialog */}
      <Dialog open={showResources} onOpenChange={setShowResources}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Find Specs & Catalogs</DialogTitle>
            <DialogDescription>
              Access legitimate HVAC specification resources from manufacturers and government sources
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[500px] pr-4">
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-semibold">Manufacturer Resources</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.tranesupply.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Trane Supply - Commercial & Residential Equipment Catalogs
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.johnstonesupply.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Johnstone Supply - HVAC Parts & Equipment Specs
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.carrier.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Carrier - Product Line Specifications & Installation Manuals
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.lennox.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Lennox - Residential & Commercial Equipment Data
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.york.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      York/Johnson Controls - HVAC Equipment Specifications
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.rheem.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Rheem/Ruud - Water Heating & HVAC Equipment Specs
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.goodmanmfg.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Goodman/Amana - Residential HVAC Equipment Data
                    </a>
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-3 text-lg font-semibold">Government & Industry Resources</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.huduser.gov" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      HUD User - Building Technology & Energy Efficiency Guides
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.energystar.gov" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      ENERGY STAR - Efficiency Ratings & Qualified Product Lists
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.ahridirectory.org" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      AHRI Directory - Certified Equipment Database
                    </a>
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-3 text-lg font-semibold">Orlando-Area Suppliers (Example)</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  Local supplier locations for reference. Contact directly for current inventory and pricing.
                </p>
                <div className="space-y-2">
                  <div className="rounded-lg border border-border p-3">
                    <p className="font-medium">Johnstone Supply - Orlando</p>
                    <p className="text-sm text-muted-foreground">Multiple locations throughout Central Florida</p>
                  </div>
                  <div className="rounded-lg border border-border p-3">
                    <p className="font-medium">Ferguson HVAC - Orlando</p>
                    <p className="text-sm text-muted-foreground">Commercial and residential HVAC supplies</p>
                  </div>
                  <div className="rounded-lg border border-border p-3">
                    <p className="font-medium">Baker Distributing - Orlando</p>
                    <p className="text-sm text-muted-foreground">Full-line HVAC distributor</p>
                  </div>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Note:</strong> Always verify specifications with manufacturer documentation before installation.
                  Links provided are for reference and educational purposes.
                </AlertDescription>
              </Alert>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
