import { css } from "lit";

export const Styles = css`
  h1 {
    color: #6a8e86;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
  }

  @media (min-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(
        4,
        1fr
      );
    }
  }
`;
