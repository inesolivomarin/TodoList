import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Task from "./components/Task";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faListAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faListAlt);

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState("Faire la vaisselle");

  const handleChange = (e) => {
    setInput(e.targent.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Tâche déjà effectuée");
    } else {
      let tasksCopy = [...tasks];
      tasksCopy.push({
        title: input.length > 20 ? input.substring(0, 30) + "..." : input,
        done: false,
      });
      setTasks(tasksCopy);
      setInput("");
    }
  };

  const handleClickCheck = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy[index].done = !tasksCopy[index].done;
    setTasks(tasksCopy);
  };

  const handleClickTrash = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(tasksCopy.indexOf(tasksCopy[index]), 1);
    setTasks(tasksCopy);
  };

  return (
    <>
      <Header />
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
      />
      <Task
        handleClickCheck={handleClickCheck}
        handleClickTrash={handleClickTrash}
        tasks={tasks}
      />
      <Footer />
    </>
  );
};

export default App;
