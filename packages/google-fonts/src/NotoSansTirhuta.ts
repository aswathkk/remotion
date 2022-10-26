import { loadFonts } from './base';

export const meta = {
  family: "'Noto Sans Tirhuta'",
  version: 'v15',
  url: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Tirhuta:ital,wght@0,400',
  unicodeRanges: {
    tirhuta:
      'U+0951-0952, U+0964-0965, U+09F4-09F7, U+1CF2, U+200C-200D, U+25CC, U+A830-A839, U+11480-114DF, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '400': {
        tirhuta: 'https://fonts.gstatic.com/s/notosanstirhuta/v15/t5t6IQYRNJ6TWjahPR6X-M-apUyby4v0Who.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '400';
    subsets: 'tirhuta';
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
