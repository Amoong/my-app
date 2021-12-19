import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragableCard from "./DragabbleCard";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 10px 0;
  padding-top: 10px;
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

interface IArea {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

const Area = styled.div<IArea>`
  background: ${(props) =>
    props.isDraggingOver ? "pink" : props.isDraggingFromThis ? "gold" : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 10px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic, info) => (
          <Area
            isDraggingOver={info.isDraggingOver}
            isDraggingFromThis={!!info.draggingFromThisWith}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, i) => (
              <DragableCard key={toDo} toDo={toDo} index={i} />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
