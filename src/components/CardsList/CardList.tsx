import { useGetAllUsersQuery } from "../../redux/API"
import { TweeTCard } from "../../components/Card/Card"
import { useSelector } from "react-redux"
import { CardListStyled, PaginationButtons, Button, InformationMessage } from "./CardsList.styled"
import { useDispatch } from "react-redux"
import { filterUsers } from "../../redux/filterSlice"
import { Puff } from "react-loader-spinner"
import { IUser } from "../../models/IUser"
import { IFilter } from "../../models/IFilter"

interface IState {
    user: IUser,
    filter: IFilter
}

export const CardList: React.FC = () => {

    const filter: IFilter = useSelector((state: IState) => state.filter);
    const dispatch = useDispatch()

    const { data, error, isLoading, refetch } = useGetAllUsersQuery(filter)

    
    if (isLoading) return <Puff
        height="80"
        width="80"
        radius={1}
        ariaLabel="puff-loading"
        wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
        }}
        color='#5736A3'
        visible={true}/>

    if(error) return <p>Ooops...Something wrong</p>

    const onPrevPage = () => {
        const updateFilter = {...filter, page: filter.page - 1}
        dispatch(filterUsers(updateFilter))
    }

    const onNextPage = () => {
        const updateFilter = { ...filter, page: filter.page + 1 }
        dispatch(filterUsers(updateFilter))
    }

    if (data) {
        return (
        <>
            <CardListStyled>
                {data && data.map((user: IUser) => (<TweeTCard user={user} key={user.id} refetch={refetch} />))}
            </CardListStyled>
                {data.length === 0 ?
                    <InformationMessage>Thank you! We don't have anymore tweets for you:)</InformationMessage>
                    : <PaginationButtons>
                {filter.page === 1 ?
                    <Button disabled={true} onClick={onPrevPage}>PREV</Button>
                    : <Button disabled={false} onClick={onPrevPage}>PREV</Button>}
                        {data.length !== 6 && !isLoading ?
                            <Button disabled={true}
                                onClick={onNextPage}>NEXT</Button>
                            : <Button disabled={false} onClick={onNextPage}>NEXT</Button>}
            </PaginationButtons>}
        </>
    )
    }
}