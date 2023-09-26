import styled, { css } from "styled-components";

const InputText = styled.input`
  height: 20px;
  border: 0;
  border-radius: 20px;
  color: grey;
  &:focus {
    outline: none;
  }

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};

  ${(props) =>
    props.padLeft &&
    css`
      padding-left: 5px;
    `};

  ${(props) =>
    props.forEdit &&
    css`
      width: 80px;
      border: 1px solid lightgrey;
      color: grey;
      border-radius: 6px;
    `};
`;

export default InputText;
