import styled, { css } from "styled-components";

const Container = styled.div`
  ${(props) =>
    props.primary &&
    css`
      background: #1e633f;
    `};

  ${(props) =>
    props.navbar &&
    css`
      min-height: 40px;
      padding-top: 15px;
    `};

  ${(props) =>
    props.leaveMargin &&
    css`
      margin: 0
        ${typeof props.leaveMargin === "string" ? props.leaveMargin : "80px"};
    `}

  ${(props) =>
    props.paddingTop &&
    css`
      padding-top: 10px;
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: 5px;
    `}

  ${(props) =>
      props.paddingTop20 &&
      css`
        padding-top: 20px;
    `}
    ${(props) =>
      props.marginTop &&
      css`
        margin-top: 20px;
    `}

  ${(props) =>
    props.titlebar &&
    css`
      box-shadow: 0px 5px 10px 1px lightgrey;
    `};

  ${(props) =>
    props.bgwhite &&
    css`
      background-color: white;
    `}

  ${(props) =>
    props.space &&
    css`
      padding-top: 10px;
      padding-bottom: 10px;
    `};

  ${(props) =>
    props.border &&
    !props.borderTop &&
    css`
      border: 1px solid lightgrey;
      border-radius: ${props.borderRadius ? props.borderRadius : "5px"};
    `};

  ${(props) =>
    props.width &&
    typeof props.width === "string" &&
    css`
      width: ${props.width};
    `};

  ${(props) =>
    !props.border &&
    props.borderTop &&
    css`
      border-top: 1px solid lightgrey;
    `};

  ${(props) =>
    !props.border &&
    props.borderLeft &&
    css`
      border-left: 1px solid lightgrey;
    `};

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `};

  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `};

  ${(props) =>
    props.usedHeight &&
    css`
      max-height: calc(100% - ${props.usedHeight}px);
      overflow-y: auto;
    `}

  ${(props) =>
    props.inputHandlerIcon &&
    css`
      & span {
        font-size: large;
        position: absolute;
        top: 4px;
      }
    `}
`;

export default Container;
