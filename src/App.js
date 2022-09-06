import { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [currSketch, setCurrSketch] = useState({});
  return (
    <AppContainer>
      <Sidebar setCurrSketch={setCurrSketch} />
      <Canvas currSketch={currSketch} />
    </AppContainer>
  );
}

export default App;
