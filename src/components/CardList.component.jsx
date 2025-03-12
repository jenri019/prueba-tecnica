import React, { useEffect, useState } from 'react'
import CustomCard from './Card.component'
import { useDispatch } from 'react-redux';
import * as TaskActions from '../store/slices/taskSlice';
import { Box, Button, CircularProgress } from '@mui/material';
import { useTheme } from '@emotion/react';

const EmptyLisy = () => {
    const theme = useTheme();
    return (
        <div className='flex flex-1 justify-center items-center'
            style={{
                color: theme.palette.body.txt_color, // Color de fondo del tema
                padding: theme.spacing(2), // Espaciado del tema
            }}>
            No hay tareas asignadas
        </div>
    )
}

const CardList = ({ tasks = [], onEditTask }) => {
    const dispatch = useDispatch();
    const [visibleTasks, setVisibleTasks] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5);
    const [isLoading, setIsLoading] = useState(false);

    const handleEditTask = (task) => {
        onEditTask();
        dispatch(TaskActions.setProps({ ...task, isCreate: false }));
    };

    useEffect(() => {
        setVisibleTasks(tasks.slice(0, visibleCount));
    }, [tasks, visibleCount]);

    const loadMoreTasks = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount((prevCount) => prevCount + 5);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className='flex flex-1 flex-col animate__animated animate__fadeIn'>
            {
                (tasks.length === 0)
                    ? <EmptyLisy />
                    : (
                        <>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
                                    gap: 1,
                                }}
                            >
                                {
                                    visibleTasks.map((task) => {
                                        return <CustomCard key={task.id} task={task} onClick={() => handleEditTask(task)} />
                                    })
                                }
                            </Box>

                            {/* Botón "Cargar más" */}
                            {
                                visibleCount < tasks.length && (
                                    <Button
                                        variant="contained"
                                        onClick={loadMoreTasks}
                                        disabled={isLoading}
                                        sx={{ margin: '20px auto', width: '200px' }}
                                    >
                                        {isLoading ? <CircularProgress size={24} /> : 'Cargar 5 más'}
                                    </Button>
                                )
                            }
                        </>
                    )
            }
        </div>
    );
};

export default CardList;