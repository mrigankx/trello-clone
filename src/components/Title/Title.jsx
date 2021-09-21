import { Typography, InputBase, IconButton } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Clear } from "@material-ui/icons";
import storeApi from "../../utils/storeApi";
import useStyle from "./style";

const Title = ({ title, listid }) => {
  const { updateListTitle, deleteList } = useContext(storeApi);
  const [newTitle, setNewTitle] = useState(title);
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };
  const handleBlur = (e) => {
    updateListTitle(newTitle, listid);
    setOpen(!open);
  };
  const handleDeleteList = () => {
    deleteList(listid);
  };
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            value={newTitle}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            autoFocus
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
      ) : (
        <div className={classes.titleContainer}>
          <IconButton
            className={classes.deletebutton}
            onClick={handleDeleteList}
          >
            <Clear />
          </IconButton>
          <Typography onClick={() => setOpen(!open)} className={classes.title}>
            {title}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Title;
