/**
 * Global Styles - Reset CSS
 * The goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights,
 * margins and font sizes of headings.
 */

import { css, Global } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        /* Box sizing rules */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* Remove default margin */
        body,
        h1,
        h2,
        h3,
        h4,
        p,
        figure,
        blockquote,
        dl,
        dd {
          margin: 0;
        }

        /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
        ul[role='list'],
        ol[role='list'] {
          list-style: none;
        }

        /* Set core root defaults */
        html:focus-within {
          scroll-behavior: smooth;
        }

        /* Set core body defaults */
        body {
          min-height: 100vh;
          text-rendering: optimizeSpeed;
          line-height: 1.5;
          margin: 0;
          font-family: 'Poppins', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* A elements that don't have a class get default styles */
        a:not([class]) {
          text-decoration-skip-ink: auto;
        }

        /* Make images easier to work with */
        img,
        picture {
          max-width: 100%;
          display: block;
        }

        /* Inherit fonts for inputs and buttons */
        input,
        button,
        textarea,
        select {
          font: inherit;
        }

        /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
        @media (prefers-reduced-motion: reduce) {
          html:focus-within {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms;
            animation-iteration-count: 1;
            transition-duration: 0.01ms;
            scroll-behavior: auto;
          }
        }
      `}
    />
  );
};

export default GlobalStyles;
