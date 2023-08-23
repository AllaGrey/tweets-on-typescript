import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, StyledNavLink, Footer, FooterDetails } from './Layout.styled';
import { Puff } from 'react-loader-spinner';

export const Layout = () => {
    return (
        <>
            <Header>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/tweets">Tweets</StyledNavLink>
            </Header>
            <Suspense fallback={<Puff
                height="80"
                width="80"
                radius={1}
                ariaLabel="puff-loading"
                wrapperStyle={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                color='#5736A3'
                visible={true}
                />}>
                <main>
                <Outlet/>
                </main>      
                <Footer>
                    <FooterDetails
                        href='https://github.com/AllaGrey'
                        target="_blank"
                        rel="noopener noreferrer nofollow">Created by Alla Grey </FooterDetails>
                </Footer>
            </Suspense>
        </>
    );
};