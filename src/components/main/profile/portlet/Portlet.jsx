import Hr from "../../../Hr";
import styled from "@emotion/styled";
import Buttons from "./Buttons.jsx";
import Info from "./Info.jsx";

const Portlet = () => {

    const breakpoints = [576, 768, 992, 1200, 1430, 1750, 2250];

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const Section = styled.section`
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

    return (
        <Section>
            <Info/>
            <Hr/>
            <Buttons/>
        </Section>
    )
}

export default Portlet;