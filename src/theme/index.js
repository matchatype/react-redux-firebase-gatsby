import colors from './colors'

const theme = {
  breakpoints: ['32rem', '60rem', '96rem', '128rem', '192rem'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSize: ['1.2rem', '1.4rem', '1.6rem', '2rem', '2.4rem', '3.6rem', '4.8rem', '8rem', '9.6rem'],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1rem",
    tight: "-0.05rem",
    mega: "0.25rem",
  },
  fonts: {
    serif: "georgia, times, serif",
    sansSerif: "Prompt, sans-serif",
  },
  borders: [
    0,
    "1px solid",
    "2px solid",
    "4px solid",
    "8px solid",
    "16px solid",
    "32px solid",
  ],
  radii: [0, 2, 4, 16, 9999, "50%", "100%"],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  colors,
}

export default theme
