import React, { useState, useEffect } from "react";
import Header from "./MyComponents/Header";
import Todo_list from "./MyComponents/Todo_list";
import Footer from "./MyComponents/Footer";
import Form from "./MyComponents/form";
import "./App.css";



const App = () => {
    const HOST = "https://to-do-web-backend.onrender.com";
    const [todos, setTodos] = useState([]);
    const [count, incrementCount] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    
    const Delete = async (id) => {
        try {
            setTodos((prevTodos) => prevTodos.filter((item) => item._id !== id));
            const response = await fetch(`${HOST}/data/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                // do nothing.
            } else {
                console.log("Error in deleting");
            }
        } catch (err) {
            console.error("Error deleting item:", err);
        }
    };

     
    const addTodo = async (todo) => {
        try {
            const response = await fetch(`${HOST}/data`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ Title: todo.Title, desc: todo.desc }),
            });

            const data = await response.json();
            setTodos((prevTodos) => [data, ...prevTodos]);  
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

     
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch(`${HOST}/`);
                const data = await response.json();
                setTodos(data);
                console.log(data);
            } catch (err) {
                console.log("HELLO");
                console.log(err);
            }
        };
        fetchTodos();
    }, []);
    
    const increment = () => {
        incrementCount((prevCount) => prevCount + 1);
    };

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", paddingBottom: 20 }}>
                <Header setIsOpen={setIsOpen} title="My Todo's" searchBar={true} />
                <Form isOpen={isOpen} setIsOpen={setIsOpen} count={count} Increment={increment} _todos={todos} _setTodos={addTodo} />
                <Todo_list Todo={todos} OnDelete={Delete} />
            </div>
            <Footer />
        </>
    );
};

export default App;
