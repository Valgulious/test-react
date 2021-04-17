import styled from "@emotion/styled";
import Profile from "./Profile.jsx";
import Hr from "../Hr.jsx"
import AnotherTab from "./AnotherTab.jsx";
import {useState} from "react";

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
            transform: ${props => props.isActive ? 'scaleX(1.5)' : 'scaleX(0)'};
            background-color: #1665D8;
        }
        
        &:hover {
            color: #1665D8;
            &::after {
                transform: scaleX(1.5);
            }
        }
    `

    const [tab, setTab] = useState('profile');

    const handleTabClick = e => {
        setTab(e.target.id);
    }

    return (
        <Main>
            <MainNav>
                <MainNavLi id='profile' isActive={tab === 'profile'} onClick={handleTabClick}>Profile</MainNavLi>
                <MainNavLi id='account' isActive={tab === 'account'} onClick={handleTabClick}>Account</MainNavLi>
                <MainNavLi id='price' isActive={tab === 'price'} onClick={handleTabClick}>Price Plans</MainNavLi>
            </MainNav>
            <Hr/>
            {tab === 'profile' ? <Profile/> : ''}
            {tab === 'account' ? <AnotherTab title='Account'/> : ''}
            {tab === 'price' ? <AnotherTab title='Price Plans'/> : ''}
        </Main>
    )
}

export default MainWrapper
