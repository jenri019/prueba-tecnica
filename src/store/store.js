import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './slices/themeSlice'
import { taskSlice } from './slices/taskSlice'
import { taskListSlice } from './slices/taskListSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    task: taskSlice.reducer,
    taskList: taskListSlice.reducer
  },
})