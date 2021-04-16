import styled from "@emotion/styled";
import Profile from "./Profile.jsx";
import Hr from "../Hr.jsx"

const MainWrapper = () => {

    const Main = styled.main`
        width: 85%;
        background-color: #f9fafb;
    `

    const MainNav = styled.nav`
        display: flex;
        max-height: 40px;
    `

    const MainNavLi = styled.li`
        list-style: none;
        padding: 5px 10px;
        margin: 5px 10px;
        
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.05px;
        color: #3A3B3F;
        
        cursor: pointer;
        
        &::after {
            content: '';
            display: block;
            width: 100%;
            margin-top: 7px;
            height: 3px;
            transition: transform 250ms ease;
            transform: scaleX(0);
            background-color: #1665D8;
        }
        
        &:hover {
            color: #1665D8;
        }
        
        &:hover::after {
            transform: scaleX(1.5);
        }
    `

    return (
        <Main>
            <MainNav>
                <MainNavLi>Profile</MainNavLi>
                <MainNavLi>Account</MainNavLi>
                <MainNavLi>Price Plans</MainNavLi>
            </MainNav>
            <Hr/>
            <Profile/>
        </Main>
    )
}

export default MainWrapper
