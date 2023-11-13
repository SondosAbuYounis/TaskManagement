import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// export const getTodoAsync= createAsyncThunk(
//     'todos/getTodoAsync',
//     async () => {
//         const response = await fetch('http://localhost:7000/todos');
//         if (response.ok){
//             const todos = await response.json();
//             return {todos};
//         } 
//     }
// );

// export const addTodoAsync = createAsyncThunk('todos/addTodoSsync',
// async(payload) => {
//     const response = await fetch ('http://localhost7000/todos',{
//         method: 'post',
//         headers : {
//             'Content-Type' : 'application/json',
//         },
//         body: JSON.stringify({title: payload.title})
//     });
//     if (response.ok){
//         const todo = await response.json();
//         return {todo};
//     }
// });
// export const toggleCompleteAsync = createAsyncThunk('todos/completetodoasync', async(payload)=>{
//     const response =await fetch (`http://localhost:7000/todos/${payload.id}`,{
//         method: 'PATCH',
//         headers:{
//             'Content-Type':'application/json',
//         },
//         body: JSON.stringify({ completed: payload.completed})
//     });
//     if (response.ok){
//         const todo = await response.json();
//         return {id: todo.id, completed: todo.completed}
//     }
// });
// export const toggleDeleteAsync = createAsyncThunk('todos/deletetodoasync', async(payload)=>{
//         const response = await fetch(`http://localhost:7000/todos/${payload.id}`,{
//             method: 'DELETE',
//     });
//     if (response.ok){
//         const todo = await response.json();
//         return {id: todo.id, completed: todo.completed}
//     }
// });

export const getTodoAsync = createAsyncThunk(
  'todos/getTodoAsync',
  async () => {
    try {
      const response = await axios.get('http://localhost:7000/todos');
      return { todos: response.data };
    } catch (error) {
      console.error('Error fetching todos:', error.message);
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async (payload) => {
    try {
      const response = await axios.post('http://localhost:7000/todos', {
        title: payload.title,
        description: payload.description,
      });
      return { todo: response.data };
    } catch (error) {
      console.error('Error adding todo:', error.message);
    }
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  'todos/toggleCompleteAsync',
  async (payload) => {
    try {
      const response = await axios.patch(
        `http://localhost:7000/todos/${payload.id}`,
        {
          completed: payload.completed,
        }
      );
      return { id: response.data.id, completed: response.data.completed };
    } catch (error) {
      console.error('Error toggling completion:', error.message);
    }
  }
);

export const toggleDeleteAsync = createAsyncThunk(
  'todos/toggleDeleteAsync',
  async (payload) => {
    try {
      await axios.delete(`http://localhost:7000/todos/${payload.id}`);
      return { id: payload.id };
    } catch (error) {
      console.error('Error deleting todo:', error.message);
    }
  }
);


const todoSlice = createSlice({
    name:"todos",
    initialState : [
        // {id : 1, title: "todo1", completed: false},
        // {id : 2, title: "todo2", completed: false},
        // {id : 3, title: "todo3", completed: true},
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id : Date.now(),
                title: action.payload.title,
                description: action.payload.description,
                completed : false 
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed; 
        },
        deleteTodo: (state, action) => {
            return state.filter((todo)=> todo.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getTodoAsync.pending]: (state, action) => {
            console.log('fetching data ...')
        },
        [getTodoAsync.fulfilled]: (state, action) => {
            console.log('data has been successfully fetched!');
            return action.payload.todos;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.push(action.payload.todo);
        },
        [toggleCompleteAsync.fulfilled]: (state, action) =>{
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        [toggleDeleteAsync.fulfilled]: (state, action) => {
            state.filter((todo)=> todo.id !== action.payload.id)
        }
    },
});



export const { 
    addTodo,
    toggleComplete,
    deleteTodo,

} = todoSlice.actions;
export default todoSlice.reducer; 