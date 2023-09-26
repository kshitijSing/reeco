import Styled, { css } from "styled-components";

const TData = Styled.td`
text-align: left;
${(props) =>
  props.borderTop &&
  css`
    border-top: 1px solid lightgrey;
  `};

${(props) =>
  props.padingRight &&
  css`
    padding-right: 10px;
  `};
  

${(props) =>
  props.borderBottom &&
  css`
    border-bottom: 1px solid lightgrey;
  `};

${(props) =>
  props.borderLeft &&
  css`
    border-left: 1px solid lightgrey;
  `};

${(props) =>
  props.borderRight &&
  css`
    border-right: 1px solid lightgrey;
  `};

${(props) =>
  props.radius &&
  css`
    border-${props.radius}-radius: 10px;
  `};

${(props) =>
  props.space &&
  css`
    padding: ${typeof props.space === "string" ? props.space : "10px"};
  `};

${(props) =>
  props.background &&
  css`
    background-color: ${props.background};
  `}

`;

export default TData;
