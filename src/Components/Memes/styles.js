import styled from 'styled-components'

export const MemesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 939px;
    background-color: white;
    margin-left: 25px;
`

export const MemesHeader = styled.div`
    width: 843.3;
    height: 100px;
`

export const ImageContainer = styled.div`
    background: ${({ image }) => `url(${image})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 5px solid black;
`

export const DateContainer = styled.div`
    width: 98.95px;
    height: 22px;
`