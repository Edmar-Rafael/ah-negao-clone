import styled from "styled-components";
import { Colors } from "../../resources";

export const HomeHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 144px;
  padding: 0 40px 0 27px;
  border: 0.5px solid ${Colors.headerBoard};
  border-style: none none inset none;
  background-color: ${Colors.header};
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: flex-start;
`

export const Image = styled.img`
  width: 414px;
  height: 139px;
  padding: 7px 0 0 1px;
`

export const NaviBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 45%;
  color: white;
  font-weight: bold;
  font-size: 18px;
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Link = styled.a`
  color: white;
  text-decoration: none;
  transition: color .3s;

  &:hover {
    color: ${Colors.linkHover};
    transition: color .3s;
  }
`

export const ArrowImage = styled.img`
  padding: 4px 0 0 12px;
`