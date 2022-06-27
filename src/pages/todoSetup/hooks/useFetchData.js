// Hooks
import {useState, useEffect} from 'react';

// Constants
import MOCK_TODO_LIST from '../constants/mockTodoList';
import { EMPTY_ARRAY } from '../../../constants/todo.general';

// Utils
import { fetchData } from '../../../utils/fetchData';


function useFetchData() {
    const [todoList, setTodoList] = useState(EMPTY_ARRAY);

    useEffect(() => {
        fetchData(MOCK_TODO_LIST, 2000).then((list) => setTodoList(list));
    }, EMPTY_ARRAY);


    return {todoList, setTodoList};
}

export default useFetchData;