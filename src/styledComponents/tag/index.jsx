import styled, { css } from "styled-components";

const Tag = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) =>
    props.primary && !props.bgColor
      ? "green"
      : props.bgColor
      ? props.bgColor
      : "white"};
  color: ${(props) => (props.primary ? "white" : "green")};
  padding: 2px 15px;
  font-size: small;
  border: 2px solid
    ${(props) =>
      props.primary && !props.bgColor
        ? "green"
        : props.bgColor
        ? props.bgColor
        : "white"};
  border-radius: 20px;

  ${(props) =>
    props.selectionTag &&
    css`
      background: white;
      color: black;
      border: 2px solid ${(props) => (props.selected ? "green" : "lightgrey")};
      cursor: pointer;
      margin: 2px;
    `}
`;

export default Tag;
