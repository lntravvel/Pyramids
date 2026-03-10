import React, { useState, useEffect } from 'react';
import { Volume2, Square, Radio } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  text: string;
}

const AudioPlayer: React.FC<Props> = ({ text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const { language, t } = useLanguage();
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      setIsSupported(true);
      
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handlePlay = () => {
    if (!isSupported) return;

    window.speechSynthesis.cancel();

    const newUtterance = new SpeechSynthesisUtterance(text);
    
    // Select the best "Historical/Radio" voice
    let selectedVoice = null;
    
    // Filter based on current language
    const langVoices = voices.filter(v => v.lang.startsWith(language));
    
    // Try to find a male voice or specific keywords often associated with deeper voices
    if (language === 'en') {
        selectedVoice = langVoices.find(v => v.name.includes('Google US English') || v.name.includes('Male')) || langVoices[0];
    } else if (language === 'ar') {
        selectedVoice = langVoices.find(v => v.name.includes('Maged') || v.name.includes('Male')) || langVoices[0];
    } else {
        selectedVoice = langVoices.find(v => v.name.includes('Male')) || langVoices[0];
    }

    if (selectedVoice) {
        newUtterance.voice = selectedVoice;
    }

    newUtterance.lang = language === 'ar' ? 'ar-SA' : 'en-US';
    
    // THE "HISTORICAL RADIO" EFFECT SETTINGS
    // Slower rate for gravity and storytelling
    newUtterance.rate = 0.85; 
    // Lower pitch for a deeper, more authoritative male voice
    newUtterance.pitch = 0.7; 
    // Volume full
    newUtterance.volume = 1.0;

    newUtterance.onend = () => setIsPlaying(false);
    newUtterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(newUtterance);
    setIsPlaying(true);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  if (!isSupported) return null;

  return (
    <button
      onClick={isPlaying ? handleStop : handlePlay}
      className={`
        flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-500 shadow-lg
        ${isPlaying 
          ? 'bg-red-500/10 text-red-400 border border-red-500/50 hover:bg-red-500/20' 
          : 'bg-gradient-to-r from-gold-600 to-amber-700 text-black border border-gold-400/50 hover:scale-105 hover:shadow-gold-500/20'
        }
      `}
    >
      {isPlaying ? (
        <>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <Square size={16} fill="currentColor" />
          {t('stopStory')}
        </>
      ) : (
        <>
          <Radio size={18} />
          {t('listenStory')}
        </>
      )}
    </button>
  );
};

export default AudioPlayer;