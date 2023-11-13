import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodoAsync } from '../redux/todoSlice'

const TodoList = () => {
    const dispatch = useDispatch();

	const todos = useSelector((state)=>state.todos);

	useEffect(()=>{
		dispatch(getTodoAsync());
	}, [dispatch]);

	return (
		<div className='flex flex-row gap-4 justify-center mt-16 '>
		{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} description={todo.description} completed={todo.completed} />
			))}
				</div> 
	);
};

export default TodoList;