
import React, { useState } from 'react';
import { Image as ImageIcon, Loader2 } from 'lucide-react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const ImageWithFallback: React.FC<Props> = ({ src, alt, className, fallbackSrc, ...props }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  // If image fails, show this elegant fallback box
  if (error) {
    return (
      <div className={`bg-gray-800 flex flex-col items-center justify-center overflow-hidden relative group ${className}`}>
         {/* Decorative pattern for fallback */}
         <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50"></div>
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         
         <div className="relative z-10 flex flex-col items-center text-gray-500 group-hover:text-gold-500 transition-colors duration-500">
            <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">
              {alt || 'Image Unavailable'}
            </span>
         </div>
         <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-500/20"></div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
           <div className="relative">
             <div className="absolute inset-0 bg-gold-500/20 blur-xl rounded-full"></div>
             <Loader2 className="w-8 h-8 text-gold-500 animate-spin relative z-10" />
           </div>
        </div>
      )}
      
      {/* The Image */}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
        {...props}
      />
    </div>
  );
};
