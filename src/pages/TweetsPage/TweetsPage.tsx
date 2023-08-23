import { CardList } from "../../components/CardsList/CardList"
import { TweetsPageSection, LinkBack } from "./TweetsPage.styled"
import { FilterMenu } from "../../components/Filter/FilterMenu"

const TweetsPage = () => {
    
    return (
        <TweetsPageSection>
            <LinkBack to='/'>BACK</LinkBack>
            <FilterMenu/>
            <CardList/>
        </TweetsPageSection>
    )
}

export default TweetsPage