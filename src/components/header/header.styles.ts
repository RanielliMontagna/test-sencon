import styled from "styled-components";
import { corPrimaria, corSecundaria } from "styles";

export const DivExterna = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  background-color: ${corPrimaria};
  color: ${corSecundaria};

  h1:first-child {
    font-size: 24px;
    font-weight: 700;
  }

  h1:last-child {
    font-size: 18px;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
