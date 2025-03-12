import React from 'react'
import CustomBadge from './CustomBadge.component'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import 'animate.css';
import { IconButton } from '@mui/material';
import TrashIcon from '../assets/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import * as TaskListActions from '../store/slices/taskListSlice';

const CustomCard = ({ task, onClick }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { taskList } = useSelector((state) => state.taskList);

    const handleDeleteClick = (event) => {
        event.stopPropagation();
        console.log('Eliminar tarea', task.id);
        const updatedTaskList = taskList.filter((t) => task.id !== t.id);
        console.log(updatedTaskList);
        dispatch(TaskListActions.setProps({ taskList: updatedTaskList }));
    };

    return (
        <Card
            className='card pointer animate__animated animate__fadeIn'
            sx={{
                backgroundColor: theme.palette.card.bg_color,
                color: theme.palette.card.txt_color,
                transition: 'background-color 0.3s ease, color 0.3s ease',
                '&:hover': {
                    backgroundColor: theme.palette.card.txt_color,
                    color: theme.palette.card.bg_color,
                },
            }}

            onClick={onClick}
        >
            <CardContent sx={{ height: '100%' }}>
                <Typography component="div" className='card-title flex justify-between'>
                    {task.title}
                    {/* Botón de eliminación */}<IconButton
                        aria-label="delete"
                        onClick={handleDeleteClick}
                        sx={{ marginLeft: '10px' }}
                    >
                        <img
                            src={TrashIcon}
                            alt="Delete"
                            style={{
                                width: '24px',
                                height: '24px',
                                filter: 'brightness(0) saturate(100%) invert(25%) sepia(100%) saturate(10000%) hue-rotate(0deg)', // Filtro rojo
                            }}
                        />
                    </IconButton>
                </Typography>
                <Typography variant="body2" className='card-body'>
                    {task.description}
                </Typography>
                <CustomBadge status={task.status} isActive={true} />
            </CardContent>
        </Card>
    );
};

export default CustomCard;