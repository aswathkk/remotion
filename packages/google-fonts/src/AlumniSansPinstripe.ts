import { loadFonts } from './base';

export const meta = {
  family: "'Alumni Sans Pinstripe'",
  version: 'v1',
  url: 'https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital,wght@0,400;1,400',
  unicodeRanges: {
    'cyrillic-ext': 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    'cyrillic': 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    'vietnamese': 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    italic: {
      '400': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/alumnisanspinstripe/v1/ZgNDjOFFPq_AUJD1umyS30W-Xub8zD1ObheDYI9GjcTg5w.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/alumnisanspinstripe/v1/ZgNDjOFFPq_AUJD1umyS30W-Xub8zD1ObheDYI9PjcTg5w.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/alumnisanspinstripe/v1/ZgNDjOFFPq_AUJD1umyS30W-Xub8zD1ObheDYI9EjcTg5w.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/alumnisanspinstripe/v1/ZgNDjOFFPq_AUJD1umyS30W-Xub8zD1ObheDYI9FjcTg5w.woff2',
        'latin': 'https://fonts.gstatic.com/s/alumnisanspinstripe/v1/ZgNDjOFFPq_AUJD1umyS30W-Xub8zD1ObheDYI9LjcQ.woff2',
      },
    },
    normal: {
      '400': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/alumnisanspinstripe/v1/ZgNNjOFFPq_AUJD1umyS30W-Xub8zD1ObheDaL9JlcA.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/alumnisanspinstripe/v1/ZgNNjOFFPq_AUJD1umyS30W-Xub8zD1ObheDYb9JlcA.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/alumnisanspinstripe/v1/ZgNNjOFFPq_AUJD1umyS30W-Xub8zD1ObheDar9JlcA.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/alumnisanspinstripe/v1/ZgNNjOFFPq_AUJD1umyS30W-Xub8zD1ObheDa79JlcA.woff2',
        'latin': 'https://fonts.gstatic.com/s/alumnisanspinstripe/v1/ZgNNjOFFPq_AUJD1umyS30W-Xub8zD1ObheDZb9J.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  italic: {
    weights: '400';
    subsets: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese';
  };
  normal: {
    weights: '400';
    subsets: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese';
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
