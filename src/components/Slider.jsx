import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Wrapper = styled.div`
    height: 100%;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    position:absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Slide = styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: red;
    justify-content: center;

`;
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 80%;
    cursor: pointer;
    
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    background-color: blue;
`;

const Title = styled.h1``
const Description = styled.p``
const Button = styled.button``

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src="https://ibb.co/StFgJys.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title> FOR HUBRIS</Title>
                    <Description> Clothes for when you're at peace</Description>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider