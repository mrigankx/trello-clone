import React from "react";
import { Paper, IconButton } from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import useStyle from "./style";
import Title from "../Title/Title";
import Card from "../Card/Card";
import InputBox from "../InputBox/InputBox";
import { Droppable } from "react-beautiful-dnd";
const List = ({ list }) => {
  const classes = useStyle();

  return (
    <Paper className={classes.root}>
      <Droppable droppableId={list.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div className={classes.listContainer}>
              <Title
                className={classes.title}
                title={list.title}
                listid={list.id}
              />
            </div>

            {list.cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <InputBox listid={list.id} type="card" />
    </Paper>
  );
};

export default List;
