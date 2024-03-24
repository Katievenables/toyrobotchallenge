
# The Challenge

You have a toy robot on a table top, a grid of 5 x 5 units, there are no obstructions. You can issue commands to your robot allowing it to roam around the table top. But be careful, don't let it fall off!
Create an app that allows commands to be issued to the robot. The robot should be prevented from failing off the table top to its destruction.
A failed command should not stop the app, valid commands should be allowed.
The application should discard all commands until a valid place() command has been executed.
0, 0 on the grid should be seen as bottom left.

### Robot Commands

* 🤖 `PLACE 4,4,SOUTH`
Places the Robot at a specific position on the board

* 🦿 `MOVE`
Commands the Robot to move forward one spot in the direction it's facing

* ⬅️ `LEFT`
Commands the Robot to turn left one spot from the direction it's facing

* ➡️ `RIGHT`
Commands the Robot to turn right one spot from the direction it's facing

* 📝 `REPORT`
Reports the current position and facing direction of the Robot

## Code Structure

### Dependencies

The code uses the prompt module for taking input from the user.
It's required at the beginning of the file: const prompt = require("prompt");.

### Constants

gridx and gridy define the dimensions of the grid (5x5).
robot object holds the current state of the robot including its position (positionX and positionY) and direction (direction).

### Functions

* move(): Moves the robot one unit forward in the direction it's facing, checking for grid boundaries to prevent falling off.
* left(): Rotates the robot 90 degrees to the left (counter-clockwise).
* right(): Rotates the robot 90 degrees to the right (clockwise).
* place(newPositionX, newPositionY, newDirection): Places the robot at a specified position on the grid and facing a specified direction.
* report(): Prints out the current position and direction of the robot.
* command(): Takes user input via the prompt module and executes corresponding commands.

### Main Execution

The command() function is called at the end to start the program.
Inside command(), it prompts the user for a command, then processes and executes it.
The program keeps running in a loop, continuously prompting for and executing commands until it's terminated.

### Tech Used
* Javascript
* Prompt