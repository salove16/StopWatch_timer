import styled from "styled-components";

const Button = styled.button`
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  cursor: pointer;
  /* border: none; */
  border: ${(props) =>
    props.variant === "primary"
      ? "none"
      : props.variant === "dashed"
      ? ""
      : props.variant === "text"
      ? "none"
      : props.variant === "link"
      ? "none"
      : "none"};
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  margin: 10px;
  background-color: ${(props) =>
    props.variant === "primary"
      ? "#1890ff"
      : props.variant === "dashed"
      ? "transparent"
      : props.variant === "text"
      ? "transparent"
      : props.variant === "link"
      ? "transparent"
      : "transparent"};
  color: ${(props) =>
    props.variant === "primary"
      ? "white"
      : props.variant === "dashed"
      ? "null"
      : props.variant === "text"
      ? "null"
      : props.variant === "link"
      ? "#339dff"
      : null};
  border-style: ${(props) =>
    props.variant === "primary"
      ? ""
      : props.variant === "dashed"
      ? "dashed"
      : props.variant === "text"
      ? ""
      : props.variant === "link"
      ? ""
      : ""};
  box-shadow: ${(props) =>
    props.variant === "primary"
      ? ""
      : props.variant === "dashed"
      ? ""
      : props.variant === "text"
      ? ""
      : props.variant === "link"
      ? ""
      : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"};
  border-color: ${(props) =>
    props.variant === "primary"
      ? "none"
      : props.variant === "dashed"
      ? "none"
      : props.variant === "text"
      ? "none"
      : props.variant === "link"
      ? "none"
      : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"};

  &:hover {
    color: ${(props) =>
      props.variant === "primary"
        ? "white"
        : props.variant === "dashed"
        ? "#40A9FF"
        : props.variant === "text"
        ? "#000000d9"
        : props.variant === "link"
        ? "#339dff"
        : "#40A9FF"};
    border-color: ${(props) =>
      props.variant === "primary"
        ? "#40A9FF"
        : props.variant === "dashed"
        ? "#40A9FF"
        : props.variant === "text"
        ? "transparent"
        : props.variant === "link"
        ? "transparent"
        : "#40A9FF"};
    background-color: ${(props) =>
      props.variant === "primary"
        ? "#40A9FF"
        : props.variant === "dashed"
        ? "#fff"
        : props.variant === "text"
        ? "rgba(0,0,0,.018)"
        : props.variant === "link"
        ? "transparent"
        : "#fff"};
  }
`;

export { Button };
