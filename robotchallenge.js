const prompt = require("prompt");

const gridx = 5;
const gridy = 5;
let robot = {positionX: 0, positionY: 0, direction: "north"};

const move = () => {
    if (robot.direction === "north" && robot.positionY <= 3) {
        robot.positionY = robot.positionY + 1
    } else if (robot.direction === "east" && robot.positionX <= 3) {
        robot.positionX = robot.positionX + 1
    } else if (robot.direction === "south" && robot.positionY >= 1) {
        robot.positionY = robot.positionY - 1
    } else if (robot.direction === "west" && robot.positionX >= 1) {
        robot.positionX = robot.positionX - 1
    } else {
        console.log("Don't fall off")
    }
    report()
};

const left = () => {
    switch (robot.direction) {
        case "north":
            robot.direction = "west";
            break;
        case "east":
            robot.direction = "north";
            break;
        case "south":
            robot.direction = "east";
            break;
        case "west":
            robot.direction = "south";
            break;
        default:
            console.log("invalid command");
    }
    report()
}
const right = () => {
    switch (robot.direction) {
        case "north":
            robot.direction = "east";
            break;
        case "east":
            robot.direction = "south";
            break;
        case "south":
            robot.direction = "west";
            break;
        case "west":
            robot.direction = "north";
            break;
        default:
            console.log("invalid command");
    }
    ;report()
};

const place = (newPositionX, newPositionY, newDirection) => {
    if (newPositionX <= 5 && newPositionX <= 5 && (newDirection === "north" || newDirection === "west" || newDirection === "south" || newDirection === "east")) {
        robot.positionX = newPositionX
        robot.positionY = newPositionY
        robot.direction = newDirection
    } else {
        console.log("Invalid command, try again!")
    }
    report()
};

const report = () => {
    console.log(robot.positionX, robot.positionY, robot.direction)
};

const command = () => {
    prompt.start();
    prompt.get('command', function (err, result) {
        if (err) {
            console.log('There is a terribleerror', err);
        }

        const commandTrim = result.command.trim().toLowerCase();

        if (commandTrim === 'move') {
            move()
        } else if (commandTrim === 'left') {
            left()
        } else if (commandTrim === 'right') {
            right()
        } else if (commandTrim === 'report') {
            report()
        } else if (commandTrim.split(',')[0] === 'place') {
            const args = commandTrim.split(',');
            const newPositionX = parseInt(args[1]);
            const newPositionY = parseInt(args[2]);
            const newDirection = args[3]?.trim();
            place(newPositionX, newPositionY, newDirection);
        } else {
            console.log("Invalid command, try again!");
        }
        command()
    });
};

command();



