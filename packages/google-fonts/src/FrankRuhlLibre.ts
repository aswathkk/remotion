import { loadFonts } from './base';

export const meta = {
  family: "'Frank Ruhl Libre'",
  version: 'v12',
  url: 'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:ital,wght@0,300;0,400;0,500;0,700;0,900',
  unicodeRanges: {
    'hebrew': 'U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '300': {
        'hebrew': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPUxvH9JXGhLeI.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPUxvH9JnGhLeI.woff2',
        'latin': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPUxvH9JfGhA.woff2',
      },
      '400': {
        'hebrew': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Ll4ajn.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_w6_fAw7jrcalD7oKYNX0QfAnPW77l4ajn.woff2',
        'latin': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Dl4Q.woff2',
      },
      '500': {
        'hebrew': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPU0PG9JXGhLeI.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPU0PG9JnGhLeI.woff2',
        'latin': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPU0PG9JfGhA.woff2',
      },
      '700': {
        'hebrew': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPUwvA9JXGhLeI.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPUwvA9JnGhLeI.woff2',
        'latin': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPUwvA9JfGhA.woff2',
      },
      '900': {
        'hebrew': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPUzPC9JXGhLeI.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPUzPC9JnGhLeI.woff2',
        'latin': 'https://fonts.gstatic.com/s/frankruhllibre/v12/j8_36_fAw7jrcalD7oKYNX0QfAnPUzPC9JfGhA.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '300' | '400' | '500' | '700' | '900';
    subsets: 'hebrew' | 'latin' | 'latin-ext';
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
