import React, { useState } from "react";
import './styles/App.css';
import ToDo from './components/ToDo.js';
import Progressing from './components/Progressing.js';
import Done from './components/Done.js';
import AddBox from './components/AddBox.js'
import GreenCard from './components/GreenCard';
import YellowCard from './components/YellowCard';
import RedCard from './components/RedCard';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';
uuid(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

let itemsFromBackend = [
    { id: uuid(), content: <GreenCard/> },
    { id: uuid(), content: <GreenCard/> },
    { id: uuid(), content: <GreenCard/> },
    { id: uuid(), content: <YellowCard/> },
    { id: uuid(), content: <YellowCard/> },
    { id: uuid(), content: <YellowCard/> },
    { id: uuid(), content: <YellowCard/> },
    { id: uuid(), content: <RedCard/> },
    { id: uuid(), content: <RedCard/> },
    { id: uuid(), content: <RedCard/> },
    { id: uuid(), content: <RedCard/> }
];

let columnsFromBackend = {
    [uuid()]: {
        name: <ToDo/>,
        items: itemsFromBackend
    },
    [uuid()]: {
        name: <Progressing/>,
        items: []
    },
    [uuid()]: {
        name: <Done/>,
        items: []
    }
};

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

function App() {
    const [columns, setColumns] = useState(columnsFromBackend);
    return (
      <header className="App-header">
          <div className="flex-container">
              <aside>
                  <AddBox/>
              </aside>
          <DragDropContext
              onDragEnd={result => onDragEnd(result, columns, setColumns)}
          >
              {Object.entries(columns).map(([columnId, column], index) => {
                  return (
                      <div className="column" key={columnId}>
                          <h2>{column.name}</h2>
                          <div style={{ margin: 8 }}>
                              <Droppable droppableId={columnId} key={columnId}>
                                  {(provided, snapshot) => {
                                      return (
                                          <div
                                              {...provided.droppableProps}
                                              ref={provided.innerRef}
                                              style={{
                                                  background: snapshot.isDraggingOver
                                                      ? "lightblue"
                                                      : "white",
                                                      //Need to add to .css file
                                                      borderRadius: 10
                                              }}
                                          >
                                              {column.items.map((item, index) => {
                                                  return (
                                                      <Draggable
                                                          key={item.id}
                                                          draggableId={item.id}
                                                          index={index}
                                                      >
                                                          {(provided, snapshot) => {
                                                              return (
                                                                  <div
                                                                      ref={provided.innerRef}
                                                                      {...provided.draggableProps}
                                                                      {...provided.dragHandleProps}
                                                                  >
                                                                      {item.content}
                                                                  </div>
                                                              );
                                                          }}
                                                      </Draggable>
                                                  );
                                              })}
                                              {provided.placeholder}
                                          </div>
                                      );
                                  }}
                              </Droppable>
                          </div>
                      </div>
                  );
              })}
          </DragDropContext>
          </div>
      </header>
  );
}

export default App;

