var currentRoom = 1; // room where you start in

function showScene(descrip) {
    document.getElementById("scene").innerHTML = descrip;
}       
function moveNorth() {
    var notice;
    if (currentRoom === 1) {
        currentRoom = 12;
        notice = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
    } else if (currentRoom === 12) {
        notice = "You are still dead.";
    } else if (currentRoom === 2) {
        currentRoom = 3;
        notice = "This is a long hallway, with statues of giant rats.<br>The pitt is to the east.";
    } else if (currentRoom === 3) {
        currentRoom = 4;
        notice = "This room has two directions you can take.<br> There appears to be red marks toward the west path.<br>West or East, choose wisely...";
    } else if (currentRoom === 10) {
        currentRoom = 7; 
        notice = "You went back into the room with the Giant Snake.<br>Great decision...";
    } else if (currentRoom === 7) {
        currentRoom = 13;
        notice = "For some reason you decided to wake the snake.<br>It goes without saying, you were eaten...";
    } else if (currentRoom === 13) {
        notice = "You were devoured."
    } else if (currentRoom === 11) {
        currentRoom = 10;
        notice = "REALLY!?! Freedom is up ahead!";
    } else if (currentRoom === 5) {
        notice = "You have been eaten.";
    } else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
    }
    showScene(notice);
}     

function moveWest() {
    var notice;
    if (currentRoom === 1) {
        currentRoom = 2;
        notice = "You escaped to a room in heading west.<br>There are no snakes in the room, but the snakes will soon follow you.";
    } else if (currentRoom === 4) {
        currentRoom = 5;
        notice = "Dead end...<br>The snakes caught up to you and had you for dinnner.";
    } else if (currentRoom === 5) {
        notice = "You have been eaten.";
    } else if (currentRoom === 12) {
        notice = "You are still dead.";
    } else if (currentRoom === 6) {
        currentRoom = 4;
        notice = "You are back in the room with red marks toward the east.";
    } else if (currentRoom === 7) {
        currentRoom = 6;
        notice = "This is the room with the sign.<br>Are you going to follow the sign south?";
    } else if (currentRoom === 8) {
        currentRoom = 7;
        notice = "You are back in the room with the giant snake.<br>Don't disturb it!";
    } else if (currentRoom === 9) {
        notice = "You were devoured.";
    } else if (currentRoom === 10) {
        currentRoom = 12;
        notice = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
    } else if (currentRoom === 13) {
        notice = "You were devoured."
    } else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
    }
    showScene(notice);
}
function moveEast() {
    var notice;
    if (currentRoom === 2) {
        currentRoom = 1;
        notice = "You are back where you began...";
    } else if (currentRoom === 3) {
        currentRoom = 12;
        notice = "You somehow fell into the pitt that is in clear sight.<br>You are dead.";
    } else if (currentRoom === 12) {
        notice = "You are still dead.";
    } else if (currentRoom === 5) {
        notice = "You have been eaten.";
    } else if (currentRoom === 4) {
        currentRoom = 6;
        notice = "This room has a sign that states 'Freedom is South.'<br> Seems legit...";
    } else if (currentRoom === 6) {
        currentRoom = 7;
        notice = "THERE IS A 30 FOOT SNAKE NEAR THE NORTH WALL FACING EASTWARD. DONT DISTURB IT!<br>You can escape by heading East or South.";
    } else if (currentRoom === 7) {
        currentRoom = 8;
        notice = "You escaped that huge snake, atleast for now.<br>Continue onwards.";
    } else if (currentRoom === 8) {
        currentRoom = 9;
        notice = "There's no where to go...<br> The snaked slithered to your location and ate you whole with its massive mouth.";
    } else if (currentRoom === 9) {
        notice = "You were devoured.";
    } else if (currentRoom === 13) {
        notice = "You were devoured."
    }else {
        notice = "You bumped into a wall, and fell hilariously.<br>Choose a different direction.";
    }
    showScene(notice);
}