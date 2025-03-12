import React from 'react'
import { capitalize } from '../utilities/Capitalize';

const CustomBadge = ({ isActive = false, status = '', hasCount = false, count = 0, onClick }) => {
    let bgStatus = '';

    switch (status) {
        case 'pendiente':
            bgStatus = 'bg-yellow';
            break;
        case 'en progreso':
            bgStatus = 'bg-blue';
            break;
        case 'completada':
            bgStatus = 'bg-green';
            break;
        default:
            bgStatus = 'bg-yellow';
            break;
    }

    return (
        <span
            className={`
                badge
                ${isActive ? 'active-badge' : ''}
                ${!hasCount ? 'pointer' : 'cursor-default'}
                ${bgStatus}
            `} 
            onClick={onClick }>
            {capitalize(status)}
            { hasCount ? ': '+count : ''}
        </span>
    )
}

export default CustomBadge