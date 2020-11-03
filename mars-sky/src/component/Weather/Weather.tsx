import styled from '@emotion/styled'
import React from 'react'

interface Props {
  
}

const WeatherBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-family: nanum-my-b;
  font-size: 25px;
`;

export const Weather = (props: Props) => {
  return (
    <WeatherBody>
      Mars Sky
    </WeatherBody>
  )
}
