import styled from 'styled-components'

const GiraffeImg = styled.img<{ speed: number }>`
    animation: updown ${props => props.speed}s cubic-bezier(0.4, 0, 1, 1) 0s infinite alternate; 
    top: 0px;
    position: relative;
    @keyframes updown {
        0% {
            top: 0px;
        }
    
        100% {
            top: 55px; 
        }
    }
`

export default GiraffeImg