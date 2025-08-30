import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';
import { toast } from 'sonner';

export const BackgroundRemovalTool = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImages, setProcessedImages] = useState<{[key: string]: string}>({});

  const imageUrls = {
    bird: '/lovable-uploads/ed310033-31c9-4862-befe-bf8964c78749.png',
    atom: '/lovable-uploads/bf5e4c30-544b-49f7-9b9c-dda67511c172.png'
  };

  const processImage = async (imageType: 'bird' | 'atom') => {
    setIsProcessing(true);
    toast(`Processing ${imageType} image...`);
    
    try {
      // Load the image
      const img = await loadImageFromUrl(imageUrls[imageType]);
      
      // Remove background
      const processedBlob = await removeBackground(img);
      
      // Create URL for the processed image
      const processedUrl = URL.createObjectURL(processedBlob);
      
      setProcessedImages(prev => ({
        ...prev,
        [imageType]: processedUrl
      }));
      
      toast.success(`${imageType.charAt(0).toUpperCase() + imageType.slice(1)} background removed successfully!`);
      
    } catch (error) {
      console.error(`Error processing ${imageType} image:`, error);
      toast.error(`Failed to process ${imageType} image`);
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadProcessedImage = (imageType: 'bird' | 'atom') => {
    const url = processedImages[imageType];
    if (!url) return;
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${imageType}-no-background.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-700 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Background Removal Tool</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Bird Image */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Bird Icon</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <img 
                src={imageUrls.bird} 
                alt="Original Bird Icon" 
                className="w-32 h-32 object-contain mx-auto"
              />
              <p className="text-center text-sm text-gray-600 mt-2">Original</p>
            </div>
            
            {processedImages.bird && (
              <div className="bg-white p-4 rounded-lg">
                <img 
                  src={processedImages.bird} 
                  alt="Processed Bird Icon" 
                  className="w-32 h-32 object-contain mx-auto"
                />
                <p className="text-center text-sm text-gray-600 mt-2">Background Removed</p>
              </div>
            )}
            
            <div className="flex gap-2">
              <Button 
                onClick={() => processImage('bird')}
                disabled={isProcessing}
                className="flex-1"
              >
                {isProcessing ? 'Processing...' : 'Remove Background'}
              </Button>
              
              {processedImages.bird && (
                <Button 
                  onClick={() => downloadProcessedImage('bird')}
                  variant="outline"
                >
                  Download
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Atom Image */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Atom Icon</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <img 
                src={imageUrls.atom} 
                alt="Original Atom Icon" 
                className="w-32 h-32 object-contain mx-auto"
              />
              <p className="text-center text-sm text-gray-600 mt-2">Original</p>
            </div>
            
            {processedImages.atom && (
              <div className="bg-white p-4 rounded-lg">
                <img 
                  src={processedImages.atom} 
                  alt="Processed Atom Icon" 
                  className="w-32 h-32 object-contain mx-auto"
                />
                <p className="text-center text-sm text-gray-600 mt-2">Background Removed</p>
              </div>
            )}
            
            <div className="flex gap-2">
              <Button 
                onClick={() => processImage('atom')}
                disabled={isProcessing}
                className="flex-1"
              >
                {isProcessing ? 'Processing...' : 'Remove Background'}
              </Button>
              
              {processedImages.atom && (
                <Button 
                  onClick={() => downloadProcessedImage('atom')}
                  variant="outline"
                >
                  Download
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <p className="text-sm text-gray-300">
          This tool uses AI-powered image segmentation to remove backgrounds from your Bird and Atom icons. 
          The processed images will have transparent backgrounds that you can use in your website.
        </p>
      </div>
    </div>
  );
};