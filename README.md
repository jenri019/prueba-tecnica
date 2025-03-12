# Prueba Técnica
This project contains the code that is used to build the web application

## Development Environment

This project was generated with:

- **Vite**: 6.2.1
- **Node**: 18.20.5
- **Package Manager**: npm 10.8.2
- **OS**: win32 x64

### Main dependencies

| Package             | Version |
|---------------------|---------|
| @mui/material       | 6.4.7   |
| react-dom           | 19.0.0  |
| react-redux         | 9.2.0   |
| @reduxjs/toolkit    | 2.6.1   |
| react-router-dom    | 6.30.0  |

## Run project into local environment
### Preconditions
Make sure you have the following tools installed:

- **Node.js**
-- Verify the installation by running: `node -v`
- **npm**: Comes included with Node.js.
-- Verify the installation by running: `npm -v`

### Follow the next steps to run the project in your local environment
1. Navigate to the project directory: `cd your-app-route`
2. Install the dependencies: `npm install`
3. Run the server:
    * `npm run dev`: Build and run the Angular application on a local development server.
    * `npm run dev -- --open`: Similar to npm run dev. Automatically opens the app in your default browser.

### Main dependencies
The project consists of the following folder structure

| src             
| -- assets : App resources such as images, icons, fonts, etc.
| -- components : Components used on pages and templates if it's necessary
| -- context : 
| -- pages : Main pages of the app
| -- providers : 
| -- store : Global state of the application
| -- --- slices : Reducers used in the store together with their actions
| -- styles : Styles used in the app divided according to where they are used or their purpose
| -- templates : Components used more globally than those in the components folder, such as header, footer, sidebar, etc.
| -- utilities : Simple functions used in the app that return a result