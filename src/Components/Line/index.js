import styled from 'styled-components'

const Line = styled.div`
    width: ${({width}) => width || 55}px;
    height: 0.5px;
    background-color: ${({color}) => color || 'aqua'};
`

export default Line