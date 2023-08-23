import styled from "styled-components";

interface InformationDetailsProps {
    name?: string
}

export const CardContainer = styled.li`
    width: 380px;
    height: 460px;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
    position: relative;
    padding-bottom: 36px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    margin-bottom: 20px;
`
export const LogoWrapper = styled.div`

`
export const LogoImage = styled.img`
    width: 76px;
    height: 22px;
    position: absolute;
    top: 20px;
    left: 20px;
`
export const BackgroundImage = styled.img`
    position: absolute;
    top: 30px;
    right: 20px;
    max-width: 100%;
    max-height: 168px;

`
export const LineImage = styled.img`
    position: absolute;
    top: 214px;
    left: 0;
    max-width: 100%;
`
export const EllipseImage = styled.img`
    position: absolute;
    top: 178px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
`
export const AvatarImage = styled.img`
    position: absolute;
    top: 178px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    width: 76px;
    height: 76px;
    
`


export const InformationContainer = styled.div`
font-size: 20px;
line-height: 24px;
font-weight: 500;
text-align: center;
margin-bottom: 26px;
display: flex;
flex-direction: column;
gap: 16px;
`

export const InformationDetails = styled.p<InformationDetailsProps>`

color: ${props => (props.name ? '#5CD3A8' : '#EBD8FF')}
`