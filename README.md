Robot Simulator
A simple React-based robot simulator that allows you to control a robot on a 5x5 grid. The robot can rotate in place to face any of the four cardinal directions (NORTH, EAST, SOUTH, WEST) and move forward in the direction it is facing. It uses CSS transitions for smooth rotation animations and a clean UI for easy controls.

Features
Grid-based Movement: Move the robot forward on a 5x5 grid.
Rotation: Rotate the robot left or right to face different directions.
Smooth Animations: The robot smoothly rotates to its new direction using CSS transitions.
React Hooks: Built using React’s state management and hooks (useState, useEffect).
Simple UI: A minimalistic interface for easy interaction.


Installation
Clone this repository:

bash
Copy code
git clone https://github.com/Khurrum-Ali/robot-simulator.git
Navigate to the project folder:

bash
Copy code
cd robot-simulator
Install the dependencies:

bash
Copy code
npm install
Run the app:

bash
Copy code
npm run dev 
The app will start on http://localhost:5173.

Usage
Once the app is running, you can use the following controls:

Rotate Left: Rotates the robot 90° to the left (counterclockwise).
Move Forward: Moves the robot forward in the direction it is facing.
Rotate Right: Rotates the robot 90° to the right (clockwise).
The robot’s current position is highlighted on the grid, and it smoothly rotates to indicate its direction.

Project Structure
bash
Copy code
src/
│
├── App.css                 # Styles for the app
├── App.js                  # Root component
└── index.js                # Entry point
Customization
You can customize the grid size, robot representation (emoji or image), or extend the functionality to include more commands and features.

Technologies
React: Frontend framework
CSS: Styling and transitions
JavaScript (ES6+): Core logic for movement and rotation
