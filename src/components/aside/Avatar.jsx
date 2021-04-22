import avatar from "../../img/avatar.jpg";
import styled from "@emotion/styled";


const Avatar = () => {

    const AvatarWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const AvatarImg = styled.img`
        border-radius: 50%;
        width: 100px;
        height: 100px;
        margin: 20px 0 10px 0;
    `

    const Username = styled.p`
        margin: 5px;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: -0.05px;
        color: #3A3B3F;
    `

    const UserPosition = styled.p`
        margin-bottom: 20px;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        color: #9EA0A5;
    `

    return (
        <AvatarWrapper>
            <div>
                <AvatarImg src={avatar} alt='avatar' />
            </div>
            <div>
                <Username>Roman Kuterov</Username>
                <UserPosition>Brain Director</UserPosition>
            </div>
        </AvatarWrapper>
    )
}

export default Avatar;