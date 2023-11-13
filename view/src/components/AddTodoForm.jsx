import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTodo } from '../redux/todoSlice';
import { addTodoAsync } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const [valueDes, setValueDes] = useState('');

    const dispatch = useDispatch();

	// const onSubmit = (event) => {
	// 	event.preventDefault();
    //     dispatch(addTodo({
    //         title: value,
    //     }));
	// 	console.log('user entered: ' + value);
	// };
	const onSubmit = (event) => {
		event.preventDefault();
        dispatch(addTodoAsync({
            title: value,
            description: valueDes,
        }));
		console.log('user entered: ' + value  + valueDes);
	};

	return (
		<>
		<div className='text-center text-[1.1rem] text-[#00000095] pt-16 pb-8'>Add a new task to do</div>
		<form onSubmit={onSubmit} className='flex flex-col gap-2 items-center'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='w-[16rem] h-[2rem] text-center text-[#ffffff] rounded-[0.75rem] bg-[#ffffff50]'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className=' w-[16rem] h-[2rem] text-center text-[#ffffff] rounded-[0.75rem] bg-[#ffffff50]'
				placeholder='Add Description...'
				value={valueDes}
				onChange={(event) => setValueDes(event.target.value)}
			></input>

			<button type='submit' className='border bg-[#373737] w-[8rem] h-[2rem] text-[#fff] rounded-[1.25rem]'>
				Submit
			</button>
		</form>
		</>
	);
};

export default AddTodoForm;