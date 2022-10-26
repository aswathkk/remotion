import { loadFonts } from './base';

export const meta = {
  family: "'Preahvihear'",
  version: 'v27',
  url: 'https://fonts.googleapis.com/css2?family=Preahvihear:ital,wght@0,400',
  unicodeRanges: {
    khmer: 'U+1780-17FF, U+200C, U+25CC',
    latin: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '400': {
        khmer: 'https://fonts.gstatic.com/s/preahvihear/v27/6NUS8F-dNQeEYhzj7uluxvwI6dB5fw.woff2',
        latin: 'https://fonts.gstatic.com/s/preahvihear/v27/6NUS8F-dNQeEYhzj7uluxvwD6dA.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '400';
    subsets: 'khmer' | 'latin';
  };
};

export const loadFont = <T extends keyof Variants>(
  style: T,
  options: {
    weights: Variants[T]['weights'][];
    subsets: Variants[T]['subsets'][];
  }
) => {
  loadFonts(meta, style, options);
};
