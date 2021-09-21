import React, { useState } from 'react';
import List from './components/List/List';
import { v4 as uuid } from "uuid";
import store from "./utils/store";
import StoreApi from './utils/storeApi';
import useStyle from "./style";
import InputBox from './components/InputBox/InputBox';
import { DragDropContext } from 'react-beautiful-dnd';
function App() {
  const classes = useStyle();
  const [data, setData] = useState(store);
  const handleDragEnd = (res) => {
    const { destination, source, draggableId } = res;
    console.log(destination, source, draggableId);
    if (!destination) {
      return;
    }
    const srcList = data.lists[source.droppableId];
    const destList = data.lists[destination.droppableId];
    const draggingCard = srcList.cards.filter((card) => card.id == draggableId)[0];
    if (source.droppableId === destination.droppableId) {
      srcList.cards.splice(source.index, 1);
      destList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [srcList.id]: destList
        }
      }
      setData(newState);
    }
    else {
      srcList.cards.splice(source.index, 1);
      destList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [srcList.id]: srcList,
          [destList.id]: destList
        }
      }
      setData(newState);
    }

  }
  const addNewCard = (card, listid) => {
    console.log(card.date);
    const uid = uuid();
    const newCard = {
      id: uid,
      title: card.title,
      desc: card.desc,
      date: card.date
    };
    const list = data.lists[listid];
    list.cards = [...list.cards, newCard];
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listid]: list
      }
    };
    setData(newState);

  }
  const addNewList = (card) => {
    console.log(card.title);
    const uid = uuid();
    const newList = {
      cards: [],
      id: uid,
      title: card.title
    }
    const newState = {
      listIds: [...data.listIds, uid],
      lists: {
        ...data.lists, [uid]: newList
      }
    }
    setData(newState);
  }
  const updateListTitle = (newTitle, listid) => {
    console.log(newTitle, listid);
    const list = data.lists[listid];
    list.title = newTitle;
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listid]: list
      }
    }
    setData(newState);
  }
  const deleteList = (listid) => {
    console.log(listid);

  }
  const deleteCard = (index) => {
    console.log(index);
  }
  return (
    <StoreApi.Provider value={{ addNewCard, addNewList, updateListTitle, deleteList, deleteCard }}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={classes.root}>
          {data.listIds.map((listId) => {
            const list = data.lists[listId];
            return <List list={list} key={listId} />

          })}
          <InputBox type="list" />
        </div>
      </DragDropContext>

    </StoreApi.Provider>

  );
}

export default App;
