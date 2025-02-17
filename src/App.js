import React, { useState } from "react";
import Header from "./MyComponents/Header";
import Todo_list from "./MyComponents/Todo_list";
import Footer from "./MyComponents/Footer";
import Form from "./MyComponents/form";
import "./App.css";

 
const App = () => {
  const Delete = (todo) =>{
    setTodos(
      todos.filter((_todo)=>{
        return _todo!==todo;
      })
    );
  }
  const [count , incrementCount] = useState(1);

  const increment = () =>{
     incrementCount(
        count + 1
     )
  };

  const addTodo = (todo) =>{
    setTodos([...todos , todo]);
  };

  const [todos , setTodos] = useState([
     
  ]);

  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <>
      
 <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingBottom : 20}}>
       <Header setIsOpen={setIsOpen}  title = "My Todo's"  searchBar = {true}/>
       <Form isOpen={isOpen} setIsOpen= {setIsOpen} count = {count} Increment = {increment}  _todos = {todos}  _setTodos = {addTodo}/>
       <Todo_list Todo = {todos} OnDelete = {Delete}/>   
     </div> 
     <Footer />
    </>
  );
};

export default App;


