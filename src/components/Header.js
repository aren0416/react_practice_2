import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: white;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.li`
  margin-left: 30px;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>PhangFlix</Link>
      </Logo>
      <MenuWrap>
        <Menu>
          <Link to={"/"}>Home</Link>
        </Menu>
        <Menu>
          <Link to={"/search"}>Search</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
