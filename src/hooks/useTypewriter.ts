import { useEffect, useState } from "react";

/**
 * Cycles through phrases with a typing + deleting animation.
 */
export function useTypewriter(
  phrases: string[],
  { typeSpeed = 60, deleteSpeed = 35, pauseMs = 1400 } = {}
) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;
    const current = phrases[phraseIndex % phrases.length];

    if (!isDeleting && text === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }
    const delay = isDeleting ? deleteSpeed : typeSpeed;
    const t = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}