import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section

                cate="Global"
                title="Global – A world of possibilities"
                slogan="Global aircraft, the industry’s leading business jet family, are renowned for elevating corporate productivity and delivering unrivalled comfort, performance, technology and the smoothest ride."
                backgroundImage="jet5.jpg"
                leftButtonText="download brochure"
                rightButtonText="design your aircraft"
                hasArrow={true}
            />
            <Section
                id="Challenger"
                cate="Challenger"
                title="Challenger – Best-selling by design"
                slogan="Challenger aircraft are the best-selling business jets among the world’s top corporate flight departments and charter operators."
                backgroundImage="jet9.jpg"
                leftButtonText="download brochure"
                rightButtonText="design your aircraft"
                hasArrow={true}

            />
            <Section
                id="LearJet"
                cate="LearJet"
                title="Learjet – Limitless freedom"
                slogan="The Learjet 75 Liberty redefines the iconic Learjet brand and features the segment’s first private executive suite."
                backgroundImage="jet4.jpg"
                leftButtonText="download brochure"
                rightButtonText="design your aircraft"
                hasArrow={true}
            />
            <Section
                id="Pre-owned aircraft"
                cate="Pre-owned aircraft"
                title="Pre-owned aircraft"
                slogan="Whether you are buying, selling or trading in your aircraft, Bombardier's team of pre-owned aircraft experts are a great resource to consider."
                backgroundImage="jet7.jpg"
                leftButtonText="download brochure"
                rightButtonText="design your aircraft"
                hasArrow={true}
            />
            <Section
                cate="Customer Experience"
                title="Customer Experience"
                slogan="Fly confidently knowing that no matter where your travels take you, Bombardier’s services and support network has you covered."
                backgroundImage="jet11.jpg"
                leftButtonText="Contact us"
                hasArrow={false}
            />

        </Container>
    )
}
export default Home;

const Container = styled.div`
    height: 100vh;
`
