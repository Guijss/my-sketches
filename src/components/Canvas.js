import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: relative;
  width: calc(100% - 13rem);
  height: 100%;
  background-color: #202228;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Canvas = ({ currSketch }) => {
  return (
    <CanvasContainer>
      {currSketch.component && <currSketch.component />}
    </CanvasContainer>
  );
};

export default Canvas;
