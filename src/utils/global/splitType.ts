import SplitType from 'split-type';

export const activeSplitText = () => {
  // Split text into spans
  const typeSplit = new SplitType('[text-split]', {
    types: 'words,chars',
    tagName: 'span',
    charClass: 'split-text',
  });

  const typeSplitAlternate = new SplitType('[text-split-alternate]', {
    types: 'words,chars',
    tagName: 'span',
    charClass: 'split-text-alternate',
  });

  const typeSplitFirstLetterOff = new SplitType('[text-split-first-letter-off]', {
    types: 'words,chars',
    tagName: 'span',
    charClass: 'split-text',
  });

  const typeSplitAlternateFirstLetterOff = new SplitType(
    '[text-split-alternate-first-letter-off]',
    {
      types: 'words', // Removed chars to only split words
      tagName: 'span',
      charClass: 'split-text-alternate',
    }
  );

  // Add chars-first class to first character of each word
  [
    [typeSplitFirstLetterOff, '.split-text'] as [SplitType, string],
    [typeSplitAlternateFirstLetterOff, '.split-text-alternate'] as [SplitType, string],
  ].forEach(([split, selector]) => {
    if (split instanceof SplitType && split.words) {
      split.words.forEach((word) => {
        // For typeSplitAlternateFirstLetterOff, add is-first class to first character
        if (split === typeSplitAlternateFirstLetterOff) {
          const firstChar = word.textContent?.[0];
          if (firstChar) {
            const span = document.createElement('span');
            span.textContent = firstChar;
            span.classList.add('is-first');
            word.textContent = word.textContent?.slice(1) || '';
            word.insertBefore(span, word.firstChild);
          }
        } else {
          // Original behavior for other splits
          word.querySelectorAll(selector)[0]?.classList.add('is-first');
        }
      });
    }
  });

  // Return both split instances
  return {
    typeSplit,
    typeSplitAlternate,
  };
};
