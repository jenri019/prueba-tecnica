import { createSlice } from '@reduxjs/toolkit'


const initialData = () => {
    const taskList = localStorage.getItem('taskList');
    return taskList ? JSON.parse(taskList) : [];
};

const initialState = {
    taskList: initialData(),
}

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        setProps: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        reset: (state) => {
            state = initialState;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProps, reset } = taskListSlice.actions;