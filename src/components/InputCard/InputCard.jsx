import {
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import useStyle from "./style";
import storeApi from "../../utils/storeApi";
const InputCard = ({ setOpen, listid, type }) => {
  const classes = useStyle();
  const { addNewCard, addNewList } = useContext(storeApi);
  const [cardData, setCardData] = useState({
    title: "",
    desc: "",
    date: new Date(),
  });
  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (type === "card") {
      addNewCard(cardData, listid);
    } else {
      addNewList(cardData);
    }

    setOpen(false);
    setCardData({
      title: "",
      desc: "",
      date: new Date(),
    });
  };
  return (
    <div className={classes.cardContainer}>
      <Paper className={classes.card}>
        <InputBase
          multiline
          fullWidth
          inputProps={{
            className: classes.input,
          }}
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={cardData.title}
        />
        {type == "card" && (
          <>
            <Divider />
            <InputBase
              multiline
              fullWidth
              inputProps={{
                classes: classes.input,
              }}
              placeholder="Description"
              name="desc"
              onChange={handleChange}
              value={cardData.desc}
            />
          </>
        )}
      </Paper>
      <div>
        <Button className={classes.addButton} onClick={handleAdd}>
          Add
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <Clear />
        </IconButton>
      </div>
    </div>
  );
};

export default InputCard;
