import styled, { css } from "styled-components";

const TRow = styled.tr`
  ${(props) =>
    props.background &&
    css`
      background-color: ${props.background};
    `}
  ${(props) =>
    props.height &&
    css`
      height: 35px;
    `};
  ${(props) =>
    props.height7 &&
    css`
    height: 70px;
    `};
`;

export default TRow;
