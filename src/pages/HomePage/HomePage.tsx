import { HomePageSection, Title, HomePageLink } from "./HomePage.styled"

const HomePage = () => {


    return (
        <HomePageSection>
            <Title>Welcome to Tweets World</Title>
            <HomePageLink to={'/tweets'}>Let's start enjoying!</HomePageLink>
        </HomePageSection>
    )
}

export default HomePage