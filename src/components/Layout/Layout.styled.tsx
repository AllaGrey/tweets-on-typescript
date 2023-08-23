import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.nav`
    margin-left: -15px;
    margin-right: -15px;
    padding: 15px;
    display: flex;
    gap: 30px;
    background-color: #471CA9;
    color: #EBD8FF;
    border: none;
`;

export const StyledNavLink = styled(NavLink)`
    color: #EBD8FF;
    text-decoration: none;

    &.active {
        color: #5CD3A8;
        border-bottom: 1px solid #5CD3A8;
    }
`;

export const Footer = styled.footer`
    height: 30px;
    background-color: #471CA9;
    padding: 10px;
    margin: 0 auto;
`

export const FooterDetails = styled.a`
    display: block;
    text-align: center;
    text-decoration: none;
    color: #5CD3A8;
`