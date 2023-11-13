import React   from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const TotalCompleteItems = () => {
    const completedTodos = useSelector((state)=>
    state.todos.filter((todo)=>todo.completed === true)
    );
    return <div className="text-[0.89rem] text-center p-12">Total Complete Items: {completedTodos.length}</div>;

};

export default TotalCompleteItems;