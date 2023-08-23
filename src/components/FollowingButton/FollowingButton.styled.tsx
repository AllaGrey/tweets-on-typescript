import styled from "styled-components";

interface ButtonProps {
    $following: boolean,
}

export const Button = styled.button<ButtonProps>`
width: 196px;
height: 50px;
background-color: ${props => (props.$following ?  '#5CD3A8' : '#EBD8FF')};
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
border: none;
font-size: 18px;
line-height: 22px;
font-weight: 600;
color: #373737;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 250ms;
cursor: pointer;


&:hover {
    background-color: ${props => (props.$following ? '#EBD8FF' : '#5CD3A8' )};
}
`