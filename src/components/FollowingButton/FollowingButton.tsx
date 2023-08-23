import { useUpdateUserMutation } from "../../redux/API"
import { TweetCardProps } from "../Card/TweetCardProps"
import { Button } from "./FollowingButton.styled"

    export const FollowingButton: React.FC<TweetCardProps>= ({user, refetch}) => {
        const { isFollowing, followers } = user
        const [updateUser] = useUpdateUserMutation()

        const onFollowBtn = async () => {
            const updatedUser = { ...user, followers: followers + 1, isFollowing: true }
            await updateUser(updatedUser).unwrap().then(()=> refetch())
        }

        const onUnFollowBtn = async () => {
            const updatedUser = { ...user, followers: followers - 1, isFollowing: false }
            await updateUser(updatedUser).unwrap().then(()=> refetch())
        }
        
        return (
            <>
                {!isFollowing ? <Button as="button" $following={isFollowing} onClick={onFollowBtn}>FOLLOW</Button> : <Button as="button" $following={isFollowing} onClick={onUnFollowBtn}>FOLLOWING</Button>}
            </>
        )
}