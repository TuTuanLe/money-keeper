import styled from "styled-components";

export const ContentContainer = styled.main`
  max-width: 1400px;
  margin: auto;
  padding-top: 0;

  .hero {
    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-content {
      width: 100%;
      max-width: 520px;
    }
  }
`;
