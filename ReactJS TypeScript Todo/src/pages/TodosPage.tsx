import React, {FC, useState, useEffect} from "react";
import {TodoForm} from "../components/TodoForm";
import {TodoLists} from "../components/TodoLists";
import {ITodo} from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved)
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        console.log('Add Todo', title)
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        }
        //setTodos([newTodo, ...todos])
        setTodos((prev) => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        }));
    }

    const removeHandler = (id: number) => {
        const shoudRemove = confirm('Are you sure you want to delete the message');
        if (shoudRemove) {
            setTodos(prevState => prevState.filter(todo => todo.id !== id))
        }
    }

    return (
        <>
            <TodoForm onAdd={addHandler}/>

            <TodoLists
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </>
    )
}