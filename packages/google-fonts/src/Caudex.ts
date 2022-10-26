import { loadFonts } from './base';

export const meta = {
  family: "'Caudex'",
  version: 'v15',
  url: 'https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700',
  unicodeRanges: {
    'greek-ext': 'U+1F00-1FFF',
    'greek': 'U+0370-03FF',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    italic: {
      '400': {
        'greek-ext': 'https://fonts.gstatic.com/s/caudex/v15/esDS311QOP6BJUr4yMKPtbo-Ew.woff2',
        'greek': 'https://fonts.gstatic.com/s/caudex/v15/esDS311QOP6BJUr4yMKAtbo-Ew.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/caudex/v15/esDS311QOP6BJUr4yMKNtbo-Ew.woff2',
        'latin': 'https://fonts.gstatic.com/s/caudex/v15/esDS311QOP6BJUr4yMKDtbo.woff2',
      },
      '700': {
        'greek-ext': 'https://fonts.gstatic.com/s/caudex/v15/esDV311QOP6BJUr4yMo4kK8NMpWeGQ.woff2',
        'greek': 'https://fonts.gstatic.com/s/caudex/v15/esDV311QOP6BJUr4yMo4kK8CMpWeGQ.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/caudex/v15/esDV311QOP6BJUr4yMo4kK8PMpWeGQ.woff2',
        'latin': 'https://fonts.gstatic.com/s/caudex/v15/esDV311QOP6BJUr4yMo4kK8BMpU.woff2',
      },
    },
    normal: {
      '400': {
        'greek-ext': 'https://fonts.gstatic.com/s/caudex/v15/esDQ311QOP6BJUr4wfKBrb4.woff2',
        'greek': 'https://fonts.gstatic.com/s/caudex/v15/esDQ311QOP6BJUr4zvKBrb4.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/caudex/v15/esDQ311QOP6BJUr4w_KBrb4.woff2',
        'latin': 'https://fonts.gstatic.com/s/caudex/v15/esDQ311QOP6BJUr4zfKB.woff2',
      },
      '700': {
        'greek-ext': 'https://fonts.gstatic.com/s/caudex/v15/esDT311QOP6BJUrwdteUnp8DKpE.woff2',
        'greek': 'https://fonts.gstatic.com/s/caudex/v15/esDT311QOP6BJUrwdteUkZ8DKpE.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/caudex/v15/esDT311QOP6BJUrwdteUnJ8DKpE.woff2',
        'latin': 'https://fonts.gstatic.com/s/caudex/v15/esDT311QOP6BJUrwdteUkp8D.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  italic: {
    weights: '400' | '700';
    subsets: 'greek' | 'greek-ext' | 'latin' | 'latin-ext';
  };
  normal: {
    weights: '400' | '700';
    subsets: 'greek' | 'greek-ext' | 'latin' | 'latin-ext';
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
