import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px 10px;
  background-color: ${(props) => (props.isDragging ? "skyblue" : props.theme.cardColor)};
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: ${(props) => (props.isDragging ? "2px 2px 2px 1px rgba(0, 0, 0, 0.2)" : "none")};
`;

interface IDragableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

function DragableCard({ toDoId, toDoText, index }: IDragableCardProps) {
  return (
    <Draggable key={toDoId} draggableId={String(toDoId)} index={index}>
      {(magic, info) => (
        <Card
          isDragging={info.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragableCard);
