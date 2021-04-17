import styled from "@emotion/styled";
import Hr from "../Hr.jsx"
import ProfileSection from "./ProfileSection.jsx";
import SettingsForm from "./forms/SettingsForm.jsx";
import NotificationsForm from "./forms/NotificationsForm.jsx";
import portlet from '../../img/portlet.jpg'

const Profile = () => {

    const Grid = styled.div`
        display: grid;
        grid-template: 1fr / 30% 60% 1fr
    `

    const Column = styled.div`
        padding: 20px 0 20px 0;
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

    const PortletName = styled.h3`
        margin-bottom: 10px;
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
            transform: scale(1.05)
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
                <ProfileSection>
                    <ProfileSectionDiv>
                        <PortletInfo>
                            <PortletName>Adrian Stefan</PortletName>
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
                </ProfileSection>
            </Column>
            <Column>
                <SettingsForm/>
                <NotificationsForm/>
            </Column>
        </Grid>
    )

}

export default Profile