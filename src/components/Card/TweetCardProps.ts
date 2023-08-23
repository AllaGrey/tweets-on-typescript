import { IUser } from '../../models/IUser'

export interface TweetCardProps {
    user: IUser,
    refetch: ()=>void
}
