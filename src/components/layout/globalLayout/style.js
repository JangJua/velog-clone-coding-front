import styled from "styled-components";

const GlobalLayoutStyle = styled.div`
  width: 1728px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1312px) {
    width: 912px;
  }
  @media (max-width: 1440px) {
    width: 1280px;
  }
  @media (max-width: 1919px) {
    width: 1376px;
  }
`;

export default GlobalLayoutStyle;
