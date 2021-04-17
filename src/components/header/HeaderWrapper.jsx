import styled from "@emotion/styled";
import logo from "../../img/logo.svg";
import HeaderIcon from "./HeaderIcon";
import bell from "../../img/bell.svg";
import logout from "../../img/logout.svg";

const HeaderWrapper = () => {

    const Header = styled.header`
        padding: 10px;
        color: white;
        background-color: #3f51b5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-height: 6vh;
        
        & a {
            text-decoration: none;
        }
    `

    const Logo = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
    `

    const Title = styled.div`
        color: white;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.0555556px;
        margin: 5px 0 5px 10px;
    `

    return (
        <Header>
            <a href="#">
                <Logo>
                    <img src={logo} alt="logo"/>
                    <Title>Devias Kit</Title>
                </Logo>
            </a>
            <div>
                <HeaderIcon src={bell} alt='notifications'/>
                <HeaderIcon src={logout} alt='logout'/>
            </div>
        </Header>
    );
}

export default HeaderWrapper