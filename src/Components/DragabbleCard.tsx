import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  padding: 10px 10px;
  background-color: ${props => props.theme.cardColor};
  border-radius: 5px;
  margin-bottom: 5px;
`;

interface IDragableCardProps {
  toDo: string;
  index: number;
}

function DragableCard({ toDo, index }: IDragableCardProps) {
  console.log(toDo, "had been rendered");
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {magic => (
        <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragableCard);
