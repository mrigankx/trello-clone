import { Paper, Typography } from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import storeApi from "../../utils/storeApi";
import useStyle from "./style";
const Card = ({ card, index }) => {
  const classes = useStyle();
  const { deleteCard } = useContext(storeApi);
  const deleteThisCard = () => {
    deleteCard(index);
  };
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <Paper
          className={classes.cardContainer}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.card}>
            <Typography className={classes.title}>{card.title}</Typography>
            <Typography>{card.desc}</Typography>
          </Paper>
          <Clear onClick={deleteThisCard} />
        </Paper>
      )}
    </Draggable>
  );
};

export default Card;
