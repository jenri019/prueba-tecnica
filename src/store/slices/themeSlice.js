import { createSlice } from '@reduxjs/toolkit'

const initialData = () => {
    const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
    return isDarkMode;
};

const initialState = {
    isDarkMode: initialData(),
}

export const themeSlice = createSlice({
    name: 'theme',
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
export const { setProps, reset } = themeSlice.actions;