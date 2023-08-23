import styled from "styled-components";

interface ButtonProps {
    disabled: boolean
}

export const CardListStyled = styled.ul`
display: flex;
justify-content: center;
gap: 20px;
flex-wrap: wrap;
`

export const PaginationButtons = styled.div`
display: flex;
gap: 10px;
justify-content: center;
`

export const Button = styled.button<ButtonProps>`
    height: 30px;
    width: 120px;
    border-radius: 10px;
    border: none;
    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
    cursor: pointer;

    .isDisable:hover {
        background-color: #EBD8FF;
    }

    &:hover {
        background-color: ${props => (props.disabled ? '#EBD8FF' : '#5CD3A8')};
    }


`

export const InformationMessage = styled.p`
text-align: center;
`