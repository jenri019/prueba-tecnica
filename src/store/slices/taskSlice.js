import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCreate: false,
    id: 0,
    title: '',
    description: '',
    status: 'pendiente'
}

export const taskSlice = createSlice({
    name: 'task',
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
export const { setProps, reset } = taskSlice.actions;