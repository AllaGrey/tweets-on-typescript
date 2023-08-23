import logo from '../../../src/images/logo.png'
import picture from '../../../src/images/picture.png'
import line from '../../../src/images/line.png'
import ellipse from '../../../src/images/ellipse.png'

import { FollowingButton } from "../FollowingButton/FollowingButton"
import {
    CardContainer,
    LogoImage,
    BackgroundImage,
    LineImage,
    EllipseImage,
    AvatarImage,
    InformationContainer, 
    InformationDetails
} from "./Card.styled"
import { TweetCardProps } from './TweetCardProps'

export const TweeTCard:React.FC<TweetCardProps> = ({user, refetch}) => {

    const {name, tweets, followers, avatar} = user
    const formatFollowers = followers.toLocaleString('en-US')

    return (
        <CardContainer>
                <LogoImage src={logo} alt="logo" loading='lazy'/>
                <BackgroundImage src={picture} alt="background" loading='lazy'/>
                <LineImage src={line} alt='line' />
                <EllipseImage src={ellipse} alt='ellipse' />
                <AvatarImage src={avatar} alt={name} />
            <InformationContainer>
                <InformationDetails name={name}>{name}</InformationDetails>
                <InformationDetails>{tweets} TWEETS</InformationDetails>
                <InformationDetails>{formatFollowers} FOLLOWERS</InformationDetails>
            </InformationContainer>
            <FollowingButton user={user} refetch={refetch} />
        </CardContainer>
    )
}