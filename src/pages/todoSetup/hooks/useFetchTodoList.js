// Hooks
import {useEffect} from 'react';

// Constants
import { EMPTY_ARRAY } from '../../../constants/todo.general';

function useFetchTodoList(fetchTodoList) {
    useEffect(() => {
        fetchTodoList()
    }, EMPTY_ARRAY);
}

export default useFetchTodoList;