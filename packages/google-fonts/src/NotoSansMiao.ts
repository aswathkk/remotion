import { loadFonts } from './base';

export const meta = {
  family: "'Noto Sans Miao'",
  version: 'v17',
  url: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Miao:ital,wght@0,400',
  unicodeRanges: {
    'miao': 'U+25CC, U+16F00-16F9F',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '400': {
        'miao': 'https://fonts.gstatic.com/s/notosansmiao/v17/Dxxz8jmXMW75w3OmoDXVV4zyZXh0eqFhraE.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/notosansmiao/v17/Dxxz8jmXMW75w3OmoDXVV4zyZXjpW4RclA.woff2',
        'latin': 'https://fonts.gstatic.com/s/notosansmiao/v17/Dxxz8jmXMW75w3OmoDXVV4zyZXjnW4Q.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '400';
    subsets: 'latin' | 'latin-ext' | 'miao';
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
