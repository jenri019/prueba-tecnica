import React, { useEffect, useState } from 'react'
import '../styles/Popup.css'
import 'animate.css';
import { Button, CircularProgress, TextareaAutosize, TextField, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { usePopup } from '../providers/Popup';
import { setProps } from '../store/slices/taskListSlice';
import CustomBadge from './CustomBadge.component';

const NewTask = () => {
    const theme = useTheme();
    const { id, title: titleStore, description: descriptionStore, status: statusStore, isCreate } = useSelector((state) => state.task);
    const { taskList } = useSelector((state) => state.taskList);

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const { showPopup, handleClosePopup } = usePopup();

    useEffect(() => {
        setTitle(titleStore);
    }, [titleStore]);

    useEffect(() => {
        setDescription(descriptionStore);
    }, [descriptionStore]);

    useEffect(() => {
        setStatus(statusStore);
    }, [statusStore]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '' || description.trim() === '') return;
        if (isCreate) onAddTask();
        else onEditTask();
    };

    const onEditTask = async () => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const updatedTaskList = taskList.map((task) =>
            task.id === id ? { ...task, title, description, status } : task
        );
        dispatch(setProps({ taskList: updatedTaskList }));

        setIsLoading(false);
        handleClosePopup();
    };

    const onAddTask = async () => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const newTask = [{ id: new Date().getTime() * 5, title, description, status }, ...taskList];
        dispatch(setProps({ taskList: newTask }));

        setIsLoading(false);
        handleClosePopup();
    };

    const onChangeStatus = (status) => {
        setStatus(status)
    };

    if (!showPopup) {
        return null;
    }

    return (
        <div className="popup-overlay" onClick={handleClosePopup}>
            <div className="popup-content animate__animated animate__fadeInUp" onClick={(e) => e.stopPropagation()}>
                <h2>{isCreate ? 'Crear nueva' : 'Editar'} tarea</h2>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <label className='mt-2 mb-1'>Titulo</label>
                    <TextField
                        hiddenLabel
                        variant="filled"
                        size="small"
                        value={title}
                        autoComplete='off'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label className='mt-2 mb-1'>Descripcion</label>
                    <TextareaAutosize
                        className='mt-2 p-2'
                        minRows={4}
                        maxRows={12}
                        value={description}
                        autoComplete='off'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="flex flex-row flex-wrap">
                        <CustomBadge
                            status={'pendiente'}
                            isActive={status === 'pendiente'}
                            onClick={() => onChangeStatus('pendiente')}
                        />
                        <CustomBadge
                            status={'en progreso'}
                            isActive={status === 'en progreso'}
                            onClick={() => onChangeStatus('en progreso')}
                        />
                        <CustomBadge
                            status={'completada'}
                            isActive={status === 'completada'}
                            onClick={() => onChangeStatus('completada')}
                        />
                    </div>
                    <Button
                        type="submit"
                        className='mt-2'
                        disabled={isLoading || title.trim() === '' || description.trim() === ''}
                        variant="contained"
                        sx={{
                            backgroundColor: '#464646',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#464646',
                            }
                        }}
                    >
                        {isLoading ? <CircularProgress size={24} /> : (
                            (isCreate ? 'Crear' : 'Guardar') 
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default NewTask;