import React, { useEffect, useState } from 'react'
import CardList from '../components/CardList.component'
import { Button, useTheme } from '@mui/material'
import NewTask from '../components/NewTask.component';
import { usePopup } from '../providers/Popup';
import * as TaskActions from '../store/slices/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import KpisComponent from '../components/Kpis.component';

const HomePage = ({ sx }) => {
    const theme = useTheme();
    const { taskList } = useSelector((state) => state.taskList);
    const dispatch = useDispatch();
    const { handleShowPopup } = usePopup();

    const onCreateTask = () => {
        dispatch(TaskActions.setProps({
            isCreate: true,
            id: 0,
            title: '',
            description: '',
            status: 'pendiente'
        }));
        handleShowPopup();
    };

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

    return (
        <>
            <NewTask />
            <div className='flex flex-row flex-wrap items-center animate__animated animate__fadeIn'>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: theme.palette.button.bg_color,
                        color: theme.palette.button.txt_color,
                        '&:hover': {
                            backgroundColor: theme.palette.button.txt_color,
                            color: theme.palette.button.bg_color,
                        }
                    }}
                    className='btn-responsive-full'
                    onClick={onCreateTask}
                >Agregar</Button >
                <KpisComponent />
            </div>
            <CardList tasks={taskList} onEditTask={() => handleShowPopup()} />
        </>
    );
};

export default HomePage;