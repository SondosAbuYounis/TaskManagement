import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../redux/todoSlice';
import { toggleCompleteAsync, deleteTodo, toggleDeleteAsync } from '../redux/todoSlice';

const TodoItem = ({ id, title, description, date, completed }) => {
    const dispatch = useDispatch();

    // const handleCompleteClick = () => {
    //     dispatch(toggleComplete({id: id, completed: !completed})
    //     );
    // };
    const handleCompleteClick = () => {
        dispatch(toggleCompleteAsync({id: id, completed: !completed})
        );
    };

    // const handleDeleteClick =() => {
    //     dispatch(deleteTodo({id:id}));
    // }
    const handleDeleteClick =() => {
        dispatch(toggleDeleteAsync({id:id}));
    }

	// const handleUpdateClick = () => {
	// 	dispatch
	// }

    return (
		<div className='flex flex-row gap-16 h-44 border border-[#000] bg-[#ffffff50] rounded-[1.75rem]'>
			<div className='flex flex-col p-4 gap-8 justify-center items-center'>
				<span className='d-flex align-items-center gap-2'>
					<input type='checkbox' className='font-semibold' checked={completed} onChange={handleCompleteClick}></input>
					<div>
					<div className='font-semibold'>{title}</div>
					</div>
				</span>
				<div>{description}</div>
				<div>{date}</div>

				<button onClick={handleDeleteClick} className='border border-[#000] bg-[#37373750] hover:bg-[#ffffff50] rounded-[1.25rem] w-32 h-8 text-[#000]'>Delete</button>
			</div>
		</div>
	);
};

export default TodoItem;