import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragableCard from "./DragabbleCard";

const Wrapper = styled.div`
  background-color: ${props => props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 10px;
  border-radius: 5px;
  min-height: 200px;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  upper
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {magic => (
        <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
          <Title>{boardId}</Title>
          {toDos.map((toDo, i) => (
            <DragableCard key={toDo} toDo={toDo} index={i} />
          ))}
          {magic.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

export default Board;
