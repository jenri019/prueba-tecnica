import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Componente que envuelve la aplicación con el tema dinámico
const DynamicThemeProvider = ({ children }) => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Obtén el valor del store
    const theme = createTheme({
        palette: {
            header: {
                main: isDarkMode ? '#000' : '#fff',
                bg_color: isDarkMode ? '#000' : '#fff',
                txt_color: isDarkMode ? '#fff' : '#000',
            },
            body: {
                main: isDarkMode ? '#242424' : '#f0f0f0',
                bg_color: isDarkMode ? '#242424' : '#f0f0f0',
                txt_color: isDarkMode ? '#f0f0f0' : '#242424',
            },
            button: {
                main: isDarkMode ? '#464646' : '#e4e4e4',
                bg_color: isDarkMode ? '#464646' : '#fff',
                txt_color: isDarkMode ? '#fff' : '#464646',
            },
            card: {
                main: isDarkMode ? '#464646' : '#e4e4e4',
                bg_color: isDarkMode ? '#464646' : '#e4e4e4',
                txt_color: isDarkMode ? '#e4e4e4' : '#464646',
            },
        },
    });

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DynamicThemeProvider;