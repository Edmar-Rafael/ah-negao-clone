import styled from "styled-components";
import { Colors } from "../../resources";

export const MemesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 883px;
  background-color: #fff;
  padding: 20px;
`

export const MemesHeader = styled.div`
  width: 100%;
`

export const Anchor = styled.a`
  width: 100%;
  color: ${Colors.memesAnchor};
  font-size: 30px;
`

export const Date = styled.div`
  width: 100%;
  padding-bottom: 10px;
  color: ${Colors.memesDate};
  font-size: 18px;
  font-family: 'Lato';
  font-weight: bold;
  border-bottom: 1px solid ${Colors.dateBoarder};
`

export const Image = styled.div`
  height: 744px;
  color: ${Colors.memesImage};
  font-size: 16px;
  font-family: 'Lato';
  font-weight: inherit;
  overflow: hidden;
`