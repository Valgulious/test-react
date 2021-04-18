import styled from "@emotion/styled";
import Hr from "../Hr.jsx"
import SettingsForm from "./forms/SettingsForm.jsx";
import NotificationsForm from "./forms/NotificationsForm.jsx";
import portlet from '../../img/portlet.jpg'

const Profile = () => {

    const breakpoints = [576, 768, 992, 1200, 1430, 1750, 2250];

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const Grid = styled.div`    
        
        display: grid;
        
        ${mq[0]} {
            grid-template: 1fr / 1fr
        }
        
        ${mq[2]} {
            grid-template: 1fr / 40% 50%
        }
        
        ${mq[3]} {
            grid-template: 1fr / 35% 60%
        }
        
        ${mq[4]} {
            grid-template: 1fr / 30% 60%
        }
        
        ${mq[5]} {
            grid-template: 1fr / 25% 55% 1fr
        }
        
        ${mq[6]} {
            max-width: 80%;
            margin: auto;
            grid-template: 1fr / 25% 55% 1fr
        }
    `

    const Column = styled.div`
        padding: 20px 20px 20px 0;
    `

    const PortletSection = styled.section`
        border-radius: 5px;
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.25);
        background-color: white;
        margin: 20px 0 0 20px;
        
        ${mq[0]} {
            width: 95%;
        }
        
        ${mq[1]} {
            width: 70%;
        }
        
        ${mq[2]} {
            width: 100%;
        }
    `

    const PortletSectionDiv = styled.div`
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

    const PortletName = styled.p`
        margin-bottom: 10px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
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
                <PortletSection>
                    <PortletSectionDiv>
                        <PortletInfo>
                            <PortletName>Adrian Stefan</PortletName>
                            <PortletCity>Rm. Valcea, Romania</PortletCity>
                            <PortletTime>4:32PM (GMT-4)</PortletTime>
                        </PortletInfo>
                        <PortletImg src={portlet} alt='portlet image'/>
                    </PortletSectionDiv>
                    <Hr/>
                    <PortletButtons>
                        <PortletButton color='#1665D8'>UPLOAD PICTURE</PortletButton>
                        <PortletButton color='#425A70'>REMOVE PICTURE</PortletButton>
                    </PortletButtons>
                </PortletSection>
            </Column>
            <Column>
                <SettingsForm/>
                <NotificationsForm/>
            </Column>
        </Grid>
    )

}

export default Profile