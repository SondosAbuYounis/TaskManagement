import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodoAsync } from '../redux/todoSlice'

const TodoList = () => {
    const dispatch = useDispatch();

	const todos = useSelector((state)=>state.todos);

	useEffect(()=>{
		dispatch(getTodoAsync());
	}, [dispatch]);

	const [filter, setFilter] = useState('');

	const filteredTodos = todos.filter(todo => {
	  if (filter === 'Completed') {
		return todo.completed;
	  } else if (filter === 'Pending') {
		return !todo.completed;
	  }
	  // If filter is 'All' or empty, return all todos
	  return true;
	});
  
	const handleFilterChange = (event) => {
	  setFilter(event.target.value);
	};

	return (
		<>
		<div className='flex flex-row gap-8 justify-center mt-12 '>
			<select onChange={handleFilterChange} className='bg-transparent border border-[#37373750] p-1 rounded-2'>
				<option value="">All</option>
				<option value="Completed">Completed</option>
				<option value="Pending">Pending</option>
			</select>

		</div>
		<div className='flex flex-row gap-4 justify-center mt-16 '>
		{filteredTodos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} description={todo.description} date={todo.date} completed={todo.completed} />
			))}
		</div> 
		</>
	);
};

export default TodoList;