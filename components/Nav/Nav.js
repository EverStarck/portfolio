import styled from "@emotion/styled";

const NavStyled = styled.nav`
  height: 100%;
  width: 465px;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  overflow-x: hidden;
  padding: 50px;
  background-color: rgba(204, 204, 204, 0.23);
  border-left: 1px solid;
`;

const Nav = () => {
  return <NavStyled></NavStyled>;
};

export default Nav;
