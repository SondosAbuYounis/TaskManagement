import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../redux/todoSlice';
import { toggleCompleteAsync, deleteTodo, toggleDeleteAsync } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
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

    return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={handleCompleteClick}></input>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;