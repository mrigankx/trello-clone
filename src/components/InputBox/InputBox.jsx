import { Button, Collapse, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { AddCircleOutline } from "@material-ui/icons";
import useStyle from "./style";
import InputCard from "../InputCard/InputCard";
const InputBox = ({ listid, type }) => {
  const classes = useStyle();
  const [isopen, setOpen] = useState(false);
  return (
    <Paper className={classes.root}>
      <Collapse in={isopen}>
        <InputCard setOpen={setOpen} listid={listid} type={type} />
      </Collapse>
      <Collapse in={!isopen}>
        <Button
          fullWidth
          className={classes.addCardContainer}
          onClick={() => setOpen(!isopen)}
        >
          <AddCircleOutline /> &nbsp; Add {type == "card" ? "Card" : "List"}
        </Button>
      </Collapse>
    </Paper>
  );
};

export default InputBox;
