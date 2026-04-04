import React, { useState, useEffect, useRef } from 'react';

interface TypewriterWordsProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterTyping?: number;
  emptyPause?: number;
}

type Phase = 'typing' | 'pausing' | 'deleting' | 'empty';

const TypewriterWords: React.FC<TypewriterWordsProps> = React.memo(({
  words,
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseAfterTyping = 2000,
  emptyPause = 500,
}) => {
  const getRandomChar = () => {
    if (words.length === 0) return '';
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex]?.[0] || '';
  };

  const [displayText, setDisplayText] = useState(getRandomChar());
  const indexRef = useRef<{ word: number; char: number; phase: Phase }>({ word: 0, char: 1, phase: 'typing' });
  const shuffledRef = useRef([...words].sort(() => Math.random() - 0.5));
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const randomWordIndex = Math.floor(Math.random() * words.length);
    shuffledRef.current = [...words].sort(() => Math.random() - 0.5);
    indexRef.current = { word: randomWordIndex, char: 1, phase: 'typing' };
    setDisplayText(shuffledRef.current[randomWordIndex]?.[0] || '');

    const animate = () => {
      const current = indexRef.current;
      const currentWord = shuffledRef.current[current.word];

      if (!currentWord) return;

      switch (current.phase) {
        case 'typing':
          current.char++;
          setDisplayText(currentWord.slice(0, current.char));

          if (current.char >= currentWord.length) {
            current.phase = 'pausing';
            timeoutRef.current = setTimeout(animate, pauseAfterTyping);
          } else {
            timeoutRef.current = setTimeout(animate, typingSpeed);
          }
          break;

        case 'pausing':
          current.phase = 'deleting';
          timeoutRef.current = setTimeout(animate, 100);
          break;

        case 'deleting':
          current.char--;
          setDisplayText(currentWord.slice(0, Math.max(0, current.char)));

          if (current.char <= 0) {
            current.phase = 'empty';
            timeoutRef.current = setTimeout(animate, emptyPause);
          } else {
            timeoutRef.current = setTimeout(animate, deletingSpeed);
          }
          break;

        case 'empty': {
          let nextWord = current.word + 1;

          if (nextWord >= shuffledRef.current.length) {
            shuffledRef.current.sort(() => Math.random() - 0.5);
            nextWord = 0;
          }

          current.word = nextWord;
          current.char = 1;
          current.phase = 'typing';
          setDisplayText(shuffledRef.current[nextWord]?.[0] || '');
          timeoutRef.current = setTimeout(animate, 100);
          break;
        }
      }
    };

    timeoutRef.current = setTimeout(animate, 0);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [words, typingSpeed, deletingSpeed, pauseAfterTyping, emptyPause]);

  return (
    <div className="inline-flex items-center">
      <span>{displayText}</span>
      <span className="inline-block w-[2px] h-[1em] bg-current ml-0.5 animate-blink" />
    </div>
  );
});

TypewriterWords.displayName = 'TypewriterWords';

export default TypewriterWords;
