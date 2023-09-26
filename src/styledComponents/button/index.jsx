import styled, { css } from "styled-components";

const CustomButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#1e633f" : "white")};
  color: ${(props) => (props.primary ? "white" : "#1e633f")};
  padding: 2px 15px;
  font-size: small;
  border: ${(props) => (props.border ? props.border : "2px")} solid #1e633f;
  border-radius: 20px;
  height: 30px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px 0px lightgreen;
  }
  ${(props) =>
    props.disabled &&
    css`
      background: lightgrey;
      border-color: lightgrey;
      color: white;
    `}
`;

export default CustomButton;
