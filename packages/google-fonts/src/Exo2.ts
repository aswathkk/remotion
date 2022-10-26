import { loadFonts } from './base';

export const meta = {
  family: "'Exo 2'",
  version: 'v20',
  url: 'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  unicodeRanges: {
    'cyrillic-ext': 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    'cyrillic': 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    'vietnamese': 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    italic: {
      '100': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ec5UIo.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-gc5UIo.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Mc5UIo.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ic5UIo.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-wc5Q.woff2',
      },
      '200': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ec5UIo.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-gc5UIo.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Mc5UIo.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ic5UIo.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-wc5Q.woff2',
      },
      '300': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ec5UIo.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-gc5UIo.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Mc5UIo.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ic5UIo.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-wc5Q.woff2',
      },
      '400': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ec5UIo.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-gc5UIo.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Mc5UIo.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ic5UIo.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-wc5Q.woff2',
      },
      '500': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ec5UIo.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-gc5UIo.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Mc5UIo.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ic5UIo.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-wc5Q.woff2',
      },
      '600': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ec5UIo.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-gc5UIo.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Mc5UIo.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ic5UIo.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-wc5Q.woff2',
      },
      '700': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ec5UIo.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-gc5UIo.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Mc5UIo.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ic5UIo.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-wc5Q.woff2',
      },
      '800': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ec5UIo.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-gc5UIo.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Mc5UIo.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ic5UIo.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-wc5Q.woff2',
      },
      '900': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ec5UIo.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-gc5UIo.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Mc5UIo.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-Ic5UIo.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHov4okm5zmbtYtG-wc5Q.woff2',
      },
    },
    normal: {
      '100': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYlK-4E4Q.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYsK-4E4Q.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYnK-4E4Q.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYmK-4E4Q.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYoK-4.woff2',
      },
      '200': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYlK-4E4Q.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYsK-4E4Q.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYnK-4E4Q.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYmK-4E4Q.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYoK-4.woff2',
      },
      '300': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYlK-4E4Q.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYsK-4E4Q.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYnK-4E4Q.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYmK-4E4Q.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYoK-4.woff2',
      },
      '400': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYlK-4E4Q.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYsK-4E4Q.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYnK-4E4Q.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYmK-4E4Q.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYoK-4.woff2',
      },
      '500': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYlK-4E4Q.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYsK-4E4Q.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYnK-4E4Q.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYmK-4E4Q.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYoK-4.woff2',
      },
      '600': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYlK-4E4Q.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYsK-4E4Q.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYnK-4E4Q.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYmK-4E4Q.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYoK-4.woff2',
      },
      '700': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYlK-4E4Q.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYsK-4E4Q.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYnK-4E4Q.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYmK-4E4Q.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYoK-4.woff2',
      },
      '800': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYlK-4E4Q.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYsK-4E4Q.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYnK-4E4Q.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYmK-4E4Q.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYoK-4.woff2',
      },
      '900': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYlK-4E4Q.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYsK-4E4Q.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYnK-4E4Q.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYmK-4E4Q.woff2',
        'latin': 'https://fonts.gstatic.com/s/exo2/v20/7cHmv4okm5zmbtYoK-4.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  italic: {
    weights: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    subsets: 'cyrillic' | 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese';
  };
  normal: {
    weights: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
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
