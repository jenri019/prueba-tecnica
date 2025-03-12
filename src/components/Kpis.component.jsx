import { useTheme } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import CustomBadge from './CustomBadge.component';
import { useSelector } from 'react-redux';

const KpisComponent = () => {
    const theme = useTheme();

    const { taskList } = useSelector((state) => state.taskList);

    const [pending, setPending] = useState(0);
    const [inProgress, setInProgress] = useState(0);
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setPending(taskList.filter((task) => task.status === 'pendiente').length);
        setInProgress(taskList.filter((task) => task.status === 'en progreso').length);
        setCompleted(taskList.filter((task) => task.status === 'completada').length);
    }, [taskList]);

    return (
        <div
            className='flex flex-row flex-wrap'
            style={{
                backgroundColor: theme.palette.body.bg_color, // Color de fondo del tema
                color: theme.palette.body.bg_color, // Color de texto contrastante
            }}>
            <CustomBadge isActive={true} hasCount={true} status='pendiente' count={pending}/>
            <CustomBadge isActive={true} hasCount={true} status='en progreso' count={inProgress}/>
            <CustomBadge isActive={true} hasCount={true} status='completada' count={completed}/>
        </div>
    )
}

export default KpisComponent