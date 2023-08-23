import styled from "styled-components";

interface FilterMenuContainerProps {
    open?: boolean,
}

export const FilterMenuContainer = styled.div<FilterMenuContainerProps>`
    position: absolute;
    right: 20px;
    top: 60px;
    z-index: 5;
    border-radius: 10px;
    background-color: #EBD8FF;
    text-decoration: none;
    margin: 0 auto;
    font-size: 16px;
    padding: 10px;
    color: #373737;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);;
    transition-duration: 250ms;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    &:hover, &:focus {
        background-color: ${props => (props.open ? '#EBD8FF' : '#5CD3A8')};

    }
    
`

export const SelectorList = styled.ul`
    list-style: none;
    text-decoration: none;
    
`

export const Selector = styled.li`
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);;
    transition-duration: 250ms;
    &:hover {
        background-color: #5CD3A8;
        cursor: pointer;
    }
`