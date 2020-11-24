import styled from '@emotion/styled'
import MARS_IMG from 'asset/images/mars.jpg';
import COLORS from 'style/color';
import React from 'react'

interface Props {
  
}

const WeatherBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: nanum-my-b;
  font-size: 25px;
`;

const MarsHeader = styled.div`
  background: ${COLORS.Black};
`;

const MarsTitle = styled.div`
  width: 100%;
  height: 500px;
  min-height: 500px;
  display: inherit;
  background-image: url(${MARS_IMG});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  opacity: .5;
  z-index: -1;
  position: relative;
  ::after{
    content: "";
    background: linear-gradient(transparent, #1F2124) 0 repeat;
    display: block;
    width: 100%;
    height: 100%;
    bottom: 0;
    position: absolute;
  }
`;

const TitleText = styled.div`
  display: inherit;
  opacity: 1;
  z-index: 0;
  color: #ffffff;
  position: absolute;
`;

export const Weather = (props: Props) => {
  return (
    <WeatherBody>
      <MarsHeader>
        Mars Sky
      </MarsHeader>
      <MarsTitle>
        <TitleText>
          아 내일 뭐하지
        </TitleText>
      </MarsTitle>
    </WeatherBody>
  )
}
