import styled from "@emotion/styled";

const ButtonNavStyled = styled.div`
  width: 102px;
  height: 100px;
  background-color: var(--yellow);
  cursor: pointer;
  border-radius: 8px 0px 0px 8px;
  position: absolute;
  top: 70px;
  right: 0;
  z-index: 5;
`;

const ButtonNav = () => {
  return <ButtonNavStyled></ButtonNavStyled>;
};

export default ButtonNav;
