import styled from '@emotion/styled'
import { WeatherContainer } from 'container/WeatherContainer/WeatherContainer'
import React from 'react'

const PageTemplate = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const WeatherPage = () => {
  return (
    <PageTemplate>
      <WeatherContainer/>
    </PageTemplate>
  )
}

export default WeatherPage;