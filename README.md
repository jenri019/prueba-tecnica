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

### Folder structure
The project consists of the following folder structure

- | src             
- | -- assets : App resources such as images, icons, fonts, etc.
- | -- components : Components used on pages and templates if it's necessary
- | -- pages : Main pages of the app
- | -- providers : Used to share data between components without having to pass it as props
- | -- store : Global state of the application
- | -- --- slices : Reducers used in the store together with their actions
- | -- styles : Styles used in the app divided according to where they are used or their purpose
- | -- templates : Components used more globally than those in the components folder, such as header, footer, sidebar, etc.
- | -- utilities : Simple functions used in the app that return a result

### Logic and Design
The following is an explanation of the user interface (UI) and user experience (UX) design logic and approach applied in the project.

The project was designed in a minimalist way, consisting of three main sections to avoid overloading the user with information:
* `Header`: Displays a welcome message and the option to switch between dark and normal mode.
* `Options`: Contains the button to add new tasks and status indicators for tasks created by the user.
* `Main Content`: Contains a list of created tasks. For user convenience, a button is also included to display more tasks from the list. These are displayed in groups of five. A message is included when no tasks have been created, indicating this.
The information displayed in section 3 is sorted in descending order, allowing the user to first see the most recently created tasks.

For the color palette, basic colors were used that reflect a dark mode and a light mode, taking inspiration from websites like Twitch and Facebook.
For the state sample, background colors referring to these were used for greater clarity.

As mentioned above, to avoid overloading the user with information, task creation and editing are done through a popup.
To create a task, the user must fill out all the fields displayed on the form and choose a status (By default is "Pendiente").
To create and edit tasks, it is necessary to click Save for the changes to take effect. This is to prevent, especially during editing, the creation of a field from being modified incorrectly.
For added convenience when changing statuses, instead of using lists or other elements that take up a lot of space or aren't as intuitive, badges are added with each status and corresponding styles. Simply click on them to select them. And to make it even more visual, the selected status has greater opacity than the others.