import React, { useState  , useEffect} from "react";
import Header from "./MyComponents/Header";
import Todo_list from "./MyComponents/Todo_list";
import Footer from "./MyComponents/Footer";
import Form from "./MyComponents/form";
import "./App.css";

const HOST = "https://to-do-web-backend.onrender.com";

 
    const Delete = async (id) => {
        try {
            // Use .filter() instead of a for loop
            const temp = todos.filter((item) => item._id !== id);
            setTodos(temp);

            // Wait for the DELETE request to complete
            const response = await fetch(`${HOST}/data/${id}`, {
                method: 'DELETE',
            });

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Failed to delete item: ${response.statusText}`);
            }

        } catch (err) {
            console.error('Error deleting item:', err);
        }
    };
 

     


  const [count , incrementCount] = useState(1);

  const increment = ()=>{
     incrementCount(
        count + 1
     )
  };

  const addTodo = async (todo) => {
    try {
        const response = await fetch(`${HOST}/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Title: todo.Title, desc: todo.desc }),
        });
        const data = await response.json();
        setTodos([data, ...todos]); 
    } catch (error) {
        console.error('Error adding item:', error);
    }
  };

  const [todos , setTodos] = useState([
     
  ]);

    useEffect(() => {
        fetch(HOST)
            .then(response => response.json())  
            .then(async data => {
                setTodos(data);  
                console.log(data);
            })
            .catch(err => console.log(err));
    }, []);

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


