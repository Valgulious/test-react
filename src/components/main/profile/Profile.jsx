import styled from "@emotion/styled";
import BasicProfileForm from "./forms/basicProfile/BasicProfileForm.jsx";
import NotificationsForm from "./forms/notifications/NotificationsForm.jsx";
import Portlet from "./portlet/Portlet.jsx";

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



    return(
        <Grid>
            <Column>
                <Portlet/>
            </Column>
            <Column>
                <BasicProfileForm/>
                <NotificationsForm/>
            </Column>
        </Grid>
    )

}

export default Profile