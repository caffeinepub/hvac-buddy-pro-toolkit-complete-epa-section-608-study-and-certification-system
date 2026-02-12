import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Upload, Loader2, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useCamera } from '../../camera/useCamera';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function PhotoDiagnosticTab() {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  const { isActive, startCamera, stopCamera, capturePhoto, videoRef, canvasRef, error: cameraError } = useCamera();

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
        setCapturedImage(reader.result as string);
        handleCloseCamera();
      };
      reader.readAsDataURL(photo);
    }
  };

  const handleAnalyze = async () => {
    setAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult(
        'Component Identified: Refrigerant Label (R-410A)\n\nDetails:\n- Type: R-410A Refrigerant\n- Operating Pressure: 118-138 PSI (Low Side), 250-295 PSI (High Side)\n- Temperature Range: -60°F to 160°F\n- Common Applications: Residential and commercial AC systems\n- Safety: Non-flammable, but requires proper handling\n\nRecommendations:\n- Verify system compatibility before charging\n- Use proper gauges rated for R-410A\n- Check for leaks before adding refrigerant'
      );
      setAnalyzing(false);
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            AI Photo Diagnostic
          </CardTitle>
          <CardDescription>
            Capture images of refrigerant labels, wiring diagrams, or components for instant identification and guidance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Camera className="h-4 w-4" />
            <AlertDescription>
              Take a clear photo of refrigerant labels, wiring diagrams, or HVAC components. The AI will identify the
              item and provide relevant specifications and guidance.
            </AlertDescription>
          </Alert>

          {!capturedImage ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={handleOpenCamera} className="flex-1">
                <Camera className="mr-2 h-4 w-4" />
                Take Photo
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <label className="cursor-pointer">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                </label>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative">
                <img src={capturedImage} alt="Captured" className="w-full rounded-lg border border-border" />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute right-2 top-2"
                  onClick={() => {
                    setCapturedImage(null);
                    setAnalysisResult(null);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {!analysisResult ? (
                <Button onClick={handleAnalyze} disabled={analyzing} className="w-full">
                  {analyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    'Analyze Image'
                  )}
                </Button>
              ) : (
                <div className="rounded-lg border border-primary bg-primary/5 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Analysis Result</h3>
                  <pre className="whitespace-pre-wrap text-sm text-muted-foreground">{analysisResult}</pre>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Camera Dialog */}
      <Dialog open={showCamera} onOpenChange={(open) => !open && handleCloseCamera()}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Camera</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
              <video ref={videoRef} className="h-full w-full object-cover" playsInline muted autoPlay />
              <canvas ref={canvasRef} className="hidden" />
            </div>
            {cameraError && (
              <Alert variant="destructive">
                <AlertDescription>{cameraError.message}</AlertDescription>
              </Alert>
            )}
            <div className="flex gap-2">
              <Button onClick={handleCloseCamera} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleCapture} disabled={!isActive} className="flex-1">
                <Camera className="mr-2 h-4 w-4" />
                Capture Photo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
