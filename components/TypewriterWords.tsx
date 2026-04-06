import { useState, useEffect, useRef } from 'react';

interface TypewriterWordsProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterTyping?: number;
  emptyPause?: number;
}

function TypewriterWords({
  words,
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseAfterTyping = 2000,
  emptyPause = 500,
}: TypewriterWordsProps) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex] || '';
    
    const type = () => {
      if (isDeleting) {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex <= 1) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
          timeoutRef.current = setTimeout(type, emptyPause);
        } else {
          timeoutRef.current = setTimeout(type, deletingSpeed);
        }
      } else {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex >= currentWord.length) {
          setIsDeleting(true);
          timeoutRef.current = setTimeout(type, pauseAfterTyping);
        } else {
          timeoutRef.current = setTimeout(type, typingSpeed);
        }
      }
    };

    timeoutRef.current = setTimeout(type, typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [words, wordIndex, charIndex, isDeleting, typingSpeed, deletingSpeed, pauseAfterTyping, emptyPause]);

  return (
    <div className="inline-flex items-center">
      <span>{displayText}</span>
      <span className="inline-block w-[2px] h-[1em] bg-current ml-0.5 animate-blink" />
    </div>
  );
}

export default TypewriterWords;
