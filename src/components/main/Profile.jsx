import styled from "@emotion/styled";
import Hr from "../Hr.jsx"
import portlet from '../../img/portlet.jpg'

const Profile = () => {

    const Grid = styled.div`
        display: grid;
        grid-template: 500px / 400px 1fr
    `

    const Column = styled.div`
        padding: 20px;
    `

    const ProfilePortlet = styled.section`
        border-radius: 5px;
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.25);
        background-color: white;
    `

    const ProfileSectionDiv = styled.div`
        padding: 24px;
        display: flex;
        justify-content: space-between;
    `

    const PortletInfo = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    `

    const PortletImg = styled.img`
        border-radius: 10%;
        width: 140px;
        height: 140px;
    `

    const PortletH3 = styled.h3`
        font-size: 24px;
        font-style: medium;
        line-height: 28px;
        letter-spacing: -0.06px;
        color: #212529;
    `

    const PortletCity = styled.span`
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        letter-spacing: -0.05px;
        color: #9EA0A5;
    `

    const PortletTime = styled.time`
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        letter-spacing: -0.05px;
        color: #9EA0A5;
    `

    const PortletButtons = styled.div`
        display: flex;
        justify-content: space-around;
        padding: 20px 10px;
    `

    const PortletButton = styled.button`
    
        &:hover {
            opacity: 50%;
        }
    
        padding: 0;
        border: none;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        cursor: pointer;
        background-color: white;
        color: ${props => props.color}
    `

    return(
        <Grid>
            <Column>
                <ProfilePortlet>
                    <ProfileSectionDiv>
                        <PortletInfo>
                            <PortletH3>Adrian Stefan</PortletH3>
                            <PortletCity>Rm. Valcea, Romania</PortletCity>
                            <PortletTime>4:32PM (GMT-4)</PortletTime>
                        </PortletInfo>
                        <PortletImg src={portlet} alt='portlet image'/>
                    </ProfileSectionDiv>
                    <Hr/>
                    <PortletButtons>
                        <PortletButton color='#1665D8'>UPLOAD PICTURE</PortletButton>
                        <PortletButton color='#425A70'>REMOVE PICTURE</PortletButton>
                    </PortletButtons>
                </ProfilePortlet>
            </Column>
            <Column>
                <h1>this is block</h1>
            </Column>
        </Grid>
    )

}

export default Profile