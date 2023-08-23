import { useDispatch } from "react-redux"
import { filterUsers } from "../../redux/filterSlice"
import { useState } from "react"
import { FilterMenuContainer, SelectorList, Selector } from "./FilterMenu.styled"


export const FilterMenu: React.FC = () => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const toggleShowFilterSelect = () => setIsOpen(isOpen => !isOpen)
    

    const onFilterSelect = (e: React.MouseEvent<HTMLLIElement>) => {

        const selectedFilter = e.currentTarget.id
        const filterUpdate =  selectedFilter !== 'null' ? {page: 1, isFollowing: selectedFilter === 'true' ? true : false} : {page: 1}
        dispatch(filterUsers(filterUpdate))

}
    
    return (
        <FilterMenuContainer onClick={toggleShowFilterSelect} open={isOpen}>
            <p>Filter</p>
            {isOpen && <SelectorList>
                <Selector onClick={onFilterSelect} id='null'>Show all</Selector>
                <Selector onClick={onFilterSelect} id="true">Show following</Selector>
                <Selector onClick={onFilterSelect} id="false">Show follow</Selector>
            </SelectorList>}
        </FilterMenuContainer>

    )
}