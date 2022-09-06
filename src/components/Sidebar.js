import styled from 'styled-components';
import { sketches } from '../sketches';

const SidebarContainer = styled.div`
  position: relative;
  width: 13rem;
  height: 100%;
  background-color: #121316;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Sketch = styled.span`
  position: relative;
  width: 80%;
  height: 3rem;
  color: #c8c8c8;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    border-top: 1px solid #c8c8c8;
    border-bottom: 1px solid #c8c8c8;
  }
`;

const Sidebar = ({ setCurrSketch }) => {
  return (
    <SidebarContainer>
      {sketches.map((e, i) => (
        <Sketch key={i} onClick={() => setCurrSketch(sketches[i])}>
          {e.name}
        </Sketch>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
