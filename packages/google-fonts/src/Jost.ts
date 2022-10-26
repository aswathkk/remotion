import { loadFonts } from './base';

export const meta = {
  family: "'Jost'",
  version: 'v14',
  url: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  unicodeRanges: {
    'cyrillic': 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    italic: {
      '100': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2',
      },
      '200': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2',
      },
      '300': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2',
      },
      '400': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2',
      },
      '500': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2',
      },
      '600': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2',
      },
      '700': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2',
      },
      '800': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2',
      },
      '900': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt5D4hTxM.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt7j4hTxM.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zUtBhPNqw73oHt4D4h.woff2',
      },
    },
    normal: {
      '100': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2',
      },
      '200': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2',
      },
      '300': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2',
      },
      '400': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2',
      },
      '500': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2',
      },
      '600': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2',
      },
      '700': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2',
      },
      '800': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2',
      },
      '900': {
        'cyrillic': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oDd4iYl.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73ord4iYl.woff2',
        'latin': 'https://fonts.gstatic.com/s/jost/v14/92zatBhPNqw73oTd4g.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  italic: {
    weights: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    subsets: 'cyrillic' | 'latin' | 'latin-ext';
  };
  normal: {
    weights: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    subsets: 'cyrillic' | 'latin' | 'latin-ext';
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
