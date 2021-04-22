import portlet from "../../../../img/portlet.jpg";
import styled from "@emotion/styled";

const Info = () => {

    const Wrapper = styled.div`
        padding: 24px;
        display: flex;
        justify-content: space-between;
    `

    const Information = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    `

    const Img = styled.img`
        border-radius: 10%;
        width: 140px;
        height: 140px;
    `

    const Name = styled.p`
        margin-bottom: 10px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -0.06px;
        color: #212529;
    `

    const City = styled.span`
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        letter-spacing: -0.05px;
        color: #9EA0A5;
    `

    const Time = styled.time`
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        letter-spacing: -0.05px;
        color: #9EA0A5;
    `

    return (
        <Wrapper>
            <Information>
                <Name>Adrian Stefan</Name>
                <City>Rm. Valcea, Romania</City>
                <Time>4:32PM (GMT-4)</Time>
            </Information>
            <Img src={portlet} alt='portlet image'/>
        </Wrapper>
    )
}

export default Info