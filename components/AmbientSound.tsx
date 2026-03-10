
import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Wind, Waves, Building2, TreePine, Play, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  category: 'History' | 'Nature' | 'Modern' | 'Hidden Gem';
}

// Updated to reliable public domain audio sources (Wikimedia Commons) to prevent 404 errors
const SOUNDS = {
  History: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Wind_in_the_trees.ogg',
  Nature: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Ocean_waves.ogg',
  'Hidden Gem': 'https://upload.wikimedia.org/wikipedia/commons/5/53/Bird_song_in_a_forest.ogg',
  Modern: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/City_traffic_sounds.ogg'
};

const AmbientSound: React.FC<Props> = ({ category }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Reset state when category changes
    setHasError(false);
    setIsPlaying(false);
    
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      
      // Attempt autoplay
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
            setNeedsInteraction(false);
          })
          .catch((error) => {
            // Auto-play was prevented
            console.log("Autoplay prevented:", error);
            setNeedsInteraction(true);
            setIsPlaying(false);
            setIsMuted(true);
          });
      }
    }
  }, [category]);

  const toggleMute = () => {
    if (audioRef.current && !hasError) {
      if (isMuted) {
        audioRef.current.muted = false;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                setIsPlaying(true);
                setNeedsInteraction(false);
            }).catch(e => console.error("Play failed:", e));
        }
        setIsMuted(false);
      } else {
        audioRef.current.muted = true;
        setIsMuted(true);
        // Optional: pause when muting to save resources, but keeping it playing loop is fine for ambience
        // audioRef.current.pause(); 
        // setIsPlaying(false);
      }
    }
  };

  const handleError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    console.warn("Audio source error:", e);
    setHasError(true);
    setIsPlaying(false);
  };

  const getIcon = () => {
    if (hasError) return <AlertCircle size={20} className="text-red-500" />;
    if (needsInteraction) return <Play size={20} className="animate-pulse" />;
    if (isMuted) return <VolumeX size={20} />;
    
    switch(category) {
        case 'History': return <Wind size={20} className="text-amber-400" />;
        case 'Nature': return <Waves size={20} className="text-blue-400" />;
        case 'Hidden Gem': return <TreePine size={20} className="text-green-400" />;
        case 'Modern': return <Building2 size={20} className="text-purple-400" />;
        default: return <Volume2 size={20} />;
    }
  };

  if (hasError) return null; // Hide component if audio fails

  return (
    <div className="fixed top-24 left-6 z-40 hidden md:flex items-center gap-3">
      <audio 
        ref={audioRef} 
        src={SOUNDS[category] || SOUNDS.History} 
        loop 
        crossOrigin="anonymous"
        onError={handleError}
      />
      
      {/* Visual Equalizer Bars */}
      <div className={`flex items-end gap-1 h-8 ${!isPlaying || isMuted ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <div className="w-1 bg-gold-500 equalizer-bar"></div>
        <div className="w-1 bg-gold-500 equalizer-bar"></div>
        <div className="w-1 bg-gold-500 equalizer-bar"></div>
        <div className="w-1 bg-gold-500 equalizer-bar"></div>
      </div>

      <button 
        onClick={toggleMute}
        disabled={hasError}
        className={`
            relative overflow-hidden flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-xl border transition-all duration-300 group
            ${needsInteraction
                ? 'bg-gold-500 text-black border-gold-400 animate-pulse shadow-[0_0_20px_rgba(234,179,8,0.5)]'
                : isMuted 
                    ? 'bg-black/60 text-gray-400 border-white/20 hover:bg-black/80' 
                    : 'bg-gold-500/10 text-white border-gold-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]'
            }
        `}
      >
        <div className="relative z-10 flex items-center gap-2">
            {getIcon()}
            <span className={`text-xs font-bold uppercase tracking-widest ${needsInteraction ? 'text-black' : (isMuted ? 'text-gray-500' : 'text-gold-500')}`}>
                {needsInteraction ? t('sound_start') : (isMuted ? t('sound_off') : t('sound_atmosphere'))}
            </span>
        </div>
      </button>
    </div>
  );
};

export default AmbientSound;
