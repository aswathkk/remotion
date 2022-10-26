import { loadFonts } from './base';

export const meta = {
  family: "'Noto Sans Sharada'",
  version: 'v15',
  url: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Sharada:ital,wght@0,400',
  unicodeRanges: {
    sharada:
      'U+0951, U+1CD7, U+1CD9, U+1CDC-1CDD, U+1CE0, U+200C-200D, U+25CC, U+11180-111DF, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '400': {
        sharada: 'https://fonts.gstatic.com/s/notosanssharada/v15/gok0H7rwAEdtF9N8-mdTGALG6p0kwrW9Nu0.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '400';
    subsets: 'sharada';
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
