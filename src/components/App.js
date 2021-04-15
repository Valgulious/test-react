import '../css/App.css';
import Header from "./header/Header.jsx";
import HeaderIcon from "./HeaderIcon.jsx";
import Aside from "./aside/Aside.jsx";
import Main from "./main/Main.jsx";
import logo from "../img/logo.svg";
import bell from "../img/bell.svg";
import logout from "../img/logout.svg";
import styled from "@emotion/styled";
import {css, Global} from "@emotion/react";


function App() {

    const Logo = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
    `

    const Title = styled.div`
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.0555556px;
        margin: 5px;
    `

    const Section = styled.div`
        padding: 5px 10px;
        background-color: #3c4a97;
        border-radius: 5px;
    `

    const Free = styled.span`
        padding: 5px;
        // margin: 5px;
        background-color: #4ba69a;
        border-radius: 5px;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        letter-spacing: 0.3px;
        text-transform: uppercase;
    `

    const HeaderText = styled.span`
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #CDD1EA;
    `

  return (
    <>
        <Global
            styles={css`
                * {
                    margin: 0;
                    padding: 0;
                    font-family: 'Roboto', sans-serif;
                    font-style: normal;
                    font-weight: 500;
                }
            `}
        />
      <Header>
          <Logo>
              <img src={logo} alt="logo"/>
              <Title>Devias Kit</Title>
              <Section>
                  <Free>FREE</Free>
                  <HeaderText>{/*See our PRO version*/} for more design components & coded in React follow this link: https://devias.io/products/devias-kit-pro</HeaderText>
              </Section>
          </Logo>
          <div>
              <HeaderIcon src={bell} alt='notifications'/>
              <HeaderIcon src={logout} alt='logout'/>
          </div>
      </Header>
      <div className='inline-block'>
          <Aside/>
          <Main/>
      </div>
    </>
  );
}

export default App;
