import { createGlobalStyle } from "styled-components"
import { themeGet } from "styled-system"

const CSSReset = createGlobalStyle`
  // Selections
  ::selection {
    background: ${themeGet("colors.primary.lightest")};
    color: ${themeGet("colors.primary.darkest")};
  }

  // Box Sizing
  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  // Rendering
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  // Typography
  html { font-size: 62.5%; }
  
  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  // Blocks
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  // Lists
  li {
    list-style-type: none;
  }

  // Links
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
  
  // Inputs
  button,
  input,
  select,
  textarea {
    margin: 0;
  }
  
  // Media
  img,
  embed,
  iframe,
  object,
  video {
    height: auto;
    max-width: 100%;
  }
  
  audio {
    max-width: 100%;
  }
  
  iframe {
    border: 0;
  }
  
  // Tables
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }
`

export default CSSReset
