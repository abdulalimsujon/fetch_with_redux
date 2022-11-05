import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from './services/actions/TodosAction';

const Todos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos())


    }, [])

    const { isLoading, todos, error } = useSelector((state) => state);
    return (
        <div>
            <h1>React redux fetch</h1>

            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <h3>ALL TODOS</h3>
            {todos && todos.map((todo) => {
                return <h1>{todo.title}</h1>

            })}




        </div>
    );
};

export default Todos;