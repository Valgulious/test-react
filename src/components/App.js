import HeaderWrapper from "./header/HeaderWrapper.jsx";
import styled from "@emotion/styled";
import {css, Global} from "@emotion/react";
import AsideWrapper from "./aside/AsideWrapper.jsx";
import MainWrapper from "./main/MainWrapper.jsx";


function App() {

    const Inline = styled.div`
        display: flex;
        position: relative;
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
      <HeaderWrapper/>
      <Inline>
          <AsideWrapper/>
          <MainWrapper/>
      </Inline>
    </>
  );
}

export default App;
