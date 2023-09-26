import styled, { css } from "styled-components";

const Text = styled.span`
  color: ${(props) => (props.primary ? "black" : "grey")};

  ${(props) =>
    props.white &&
    css`
      color: white;
    `};

  ${(props) =>
    props.green &&
    css`
      color: green;
    `};

  ${(props) =>
    props.lightgreen &&
    css`
      color: #52c41a;
    `};

  ${(props) =>
    props.orange &&
    css`
      color: orange;
    `};

  ${(props) =>
    props.red &&
    css`
      color: red;
    `};

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `};

  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `};

  ${(props) =>
    props.heading &&
    css`
      font-size: large;
    `};

  ${(props) =>
    props.pointer &&
    css`
      cursor: pointer;
    `};

  ${(props) =>
    props.space &&
    css`
      padding: 10px;
    `};

  ${(props) =>
    props.strike &&
    css`
      text-decoration: line-through;
    `};

  ${(props) =>
    props.small &&
    css`
      font-size: small;
    `};

  ${(props) =>
    props.xLarge &&
    css`
      font-size: x-large;
    `}

  ${(props) =>
    props.cartcount &&
    css`
      font-size: smaller;
      background: lightgreen;
      border-radius: 25px;
      padding: 0 5px;
      position: absolute;
      left: 27px;
      top: -5px;
    `};
`;

export default Text;
