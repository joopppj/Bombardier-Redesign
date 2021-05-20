import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
function Section({ title, slogan, backgroundImage, leftButtonText, rightButtonText, hasArrow }) {
    return (
        <Subpart backgroundImage={backgroundImage}>
            <Fade bottom>
                <SectionText>
                    <h1>{title}</h1>
                    <p>{slogan}</p>

                </SectionText>
            </Fade>
            <ButtonBlock>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButtonText}
                        </LeftButton>

                        {rightButtonText &&
                            <RightButton>
                                {rightButtonText}
                            </RightButton>}
                    </ButtonGroup>
                </Fade>
                {hasArrow === true ? <Scroll src='./assets/down-arrow.svg'></Scroll> : <div></div>}

            </ButtonBlock>
        </Subpart >
    )
}

export default Section;

const Subpart = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("./assets/${props.backgroundImage}")`};
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;

`

const SectionText = styled.div`
    padding-top: 11vh;
    text-align:center;
    z-index:-1;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media(max-width:768px) {
        flex-direction:column;
    }
`

const LeftButton = styled.div`
    background-color: brown;
    height: 40px;
    width: 256px;
    color:white;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius:100px;
    opacity: 0.65;
    text-transform:uppercase;
    font-size: 12px;
    cursor:pointer;
    margin: 10px;
`

const RightButton = styled(LeftButton)`
    background-color: rgba(23,26,32,0.8);
    opacity:0.65;
    color:white;
`
const Scroll = styled.img`
    margin-top:20px;
    height:40px;
    overflow-x: hidden;
    animation: scrollDown infinite 1.5s;
`

const ButtonBlock = styled.div`

`