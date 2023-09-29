// const textarea = document.getElementById("textarea");

class Room {
  constructor(name, description) {
    this._name = name;
    this._description = description;
    this._linkedRooms = {};
    this._character = "";
  }

  set character(value) {
    this._character = value;
  }

  get character() {
    return this._character;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("description is too short.");
      return;
    }
    this._description = value;
  }

  describe() {
    return (
      "Looking around the " + this._name + " you can see " + this._description
    );
  }

  linkRoom(direction, roomToLink) {
    this._linkedRooms[direction] = roomToLink;
  }

  move(direction) {
    if (direction in this._linkedRooms) {
      return this._linkedRooms[direction];
    } else {
      alert("That way is blocked.");
      return this;
    }
  }
}

class playerCharacter {
  constructor(name, description,) {
    (this._name = name), (this._description = description);
  }

  set name(value) {
    if (value.length < 3) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("Description is too short.");
      return;
    }
    this._description = value;
  }
  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }


  describe() {
    return (
      "You have located " +
      this._name + ", " + 
      this._description
    );
  }

  talk() {
    return this._name + " says " + "'" + this._conversation + "'";
  }
}

//2F
const mainEntrance = new Room(
  "Main Entrance",
  "A tight doorway leading to an open room with a hatch above it. It is on the second floor. To the south is the front hallway."
);
const frontHallway1 = new Room(
  "Front Hallway Entrance",
  "A large square room with a hall coming out from the west and a hatch in the roof. To the north is the main entrance, to the east is the executive office and to the west is the long part of the hallway."
);
const execOffice = new Room(
  "Executive Office",
  "A large office with a large desk in the corner. To the west is the front hallway."
);
const frontHallway2 = new Room(
  "Front Hallway",
  "A long hallway with a door to the west, extending the hallway and a meeting room to the south. To the east is the front hallway entrance."
);
const meetingRoom = new Room(
  "Meeting Room",
  "A large room with a large table in the middle, surrounded by chairs. To the north is the front hallway."
);
const frontHallway3 = new Room(
  "Front Hallway Extension",
  "An extension of the hallway, there is a stairway that heads down to the cargo entrance, a barricade to the west and a pantry to the south."
);
const pantry = new Room(
  "Pantry",
  "A small room with a freezer and shelves of food. To the west is the kitchen. To the north is the front hallway extension."
);
const kitchen = new Room(
  "Kitchen",
  "A small kitchen with a large oven and a fridge. To the north is the executive hallway. To the east is the pantry."
);
const execHallway1 = new Room(
  "Executive Hallway 1",
  "A very long hallway leading all the way to the back of the plane. There is a staircase leading up to the staff cabin, and more of the hall to the west. To the south is the kitchen."
);
const execHallway2 = new Room(
  "Executive Hallway 2",
  "A very long hallway leading all the way to the back of the plane. To the south is the executive bedroom, and more of the hall to the west. To the north is the first part of the executive hallway."
);
const execBedroom = new Room(
  "Executive Bedroom",
  "A large bedroom with a large bed turned on its side in the middle. To the north is the second part of the executive hallway."
);
const execHallway3 = new Room(
  "Executive Hallway 3",
  "The end of the hallway. There is a door leading to the staff section to the west. To the north is the second part of the executive hallway."
);
const staffSection = new Room(
  "Staff Section",
  "A small section for staff with several spread out seats. There is a staircase that goes down to the cargo hold and a hatch in the roof. To the east is the third part of the executive hallway."
);
//1F
const cargoEntrance = new Room(
  "Cargo Hold Entrance",
  "A small room with a low ceiling and several pipes. To the west is the first aid station. There is a staircase the goes up to the front hallway extension."
);
const firstAid = new Room(
  "First Aid Station",
  "A small room with a bed and several locked cabinets. To the west is the luggage hold. To the east is the cargo hold entrance."
);
const luggageHold = new Room(
  "Luggage Hold",
  "A large room with several suitcases and bags. To the west is the service corridor. To the east is the first aid station."
);
const serviceCorridor = new Room(
  "Service Corridor",
  "A short, thin corridor with several pipes and wires. To the south is a storage room and to the west is the cargo hold. To the east is the luggage hold."
);
const storageRoom = new Room(
  "Storage Room",
  "A small room with several locked cases of gold and various artifacts. To the north is the service corridor."
);
const cargoHold = new Room(
  "Cargo Hold",
  "A large room with several large steel crates and boxes. There is a stairway that leads up to the staff section. To the east is the service corridor."
);
//3F
const staffCabin = new Room(
  "Staff Cabin",
  "A small room with several beds and a few suitcases. To the east is the radio cabin and to the west is server room A. There is a staircase that leads down to the first part of the executive corridor."
);
const radioCabin = new Room(
  "Radio Cabin",
  "A small room with a large radio and several chairs in front of screens of complicated instruments. To the east is the cockpit. To the west is the staff cabin."
);
const cockpit = new Room(
  "Cockpit",
  "A small room with two seats and a large 180 degree window above the flight controls. There is a hatch that drops down to the front hallway entrance. To the west is the radio cabin."
);
const serverRoomA = new Room(
  "Server Room A",
  "A large corridor filled with servers and wires. To the west is server room B. To the east is the staff cabin."
);
const serverRoomB = new Room(
  "Server Room B",
  "A large corridor filled with servers and wires mirroring server room A. To the west is a hatch that drops down to the staff section. To the east is server room A."
);
mainEntrance.linkRoom("south", frontHallway1);
frontHallway1.linkRoom("north", mainEntrance);
frontHallway1.linkRoom("east", execOffice);
frontHallway1.linkRoom("west", frontHallway2);

execOffice.linkRoom("west", frontHallway1);

frontHallway2.linkRoom("east", frontHallway1);
frontHallway2.linkRoom("south", meetingRoom);
frontHallway2.linkRoom("west", frontHallway3);

meetingRoom.linkRoom("north", frontHallway2);

frontHallway3.linkRoom("south", pantry);
frontHallway3.linkRoom("down", cargoEntrance);

pantry.linkRoom("north", frontHallway3);
pantry.linkRoom("west", kitchen);

kitchen.linkRoom("east", pantry);
kitchen.linkRoom("north", execHallway1);

execHallway1.linkRoom("south", kitchen);
execHallway1.linkRoom("up", staffCabin);
execHallway1.linkRoom("west", execHallway2);

execHallway2.linkRoom("east", execHallway1);
execHallway2.linkRoom("south", execBedroom);
execHallway2.linkRoom("west", execHallway3);

execBedroom.linkRoom("north", execHallway2);

execHallway3.linkRoom("north", execHallway2);
execHallway3.linkRoom("west", staffSection);

staffSection.linkRoom("east", execHallway3);
staffSection.linkRoom("down", cargoHold);

cargoEntrance.linkRoom("up", frontHallway3);
cargoEntrance.linkRoom("west", firstAid);

firstAid.linkRoom("east", cargoEntrance);
firstAid.linkRoom("west", luggageHold);

luggageHold.linkRoom("east", firstAid);
luggageHold.linkRoom("west", serviceCorridor);

serviceCorridor.linkRoom("east", luggageHold);
serviceCorridor.linkRoom("south", storageRoom);
serviceCorridor.linkRoom("west", cargoHold);

storageRoom.linkRoom("north", serviceCorridor);

cargoHold.linkRoom("east", serviceCorridor);
cargoHold.linkRoom("up", staffSection);

staffCabin.linkRoom("east", radioCabin);
staffCabin.linkRoom("west", serverRoomA);

radioCabin.linkRoom("west", staffCabin);
radioCabin.linkRoom("east", cockpit);

cockpit.linkRoom("west", radioCabin);
cockpit.linkRoom("down", frontHallway1);

serverRoomA.linkRoom("east", staffCabin);
serverRoomA.linkRoom("west", serverRoomB);

serverRoomB.linkRoom("east", serverRoomA);
serverRoomB.linkRoom("down", staffSection);

// linking characters to rooms 

const TerroristOne = new playerCharacter(
  "Terry", "who is a terrorist behind the desk")

execOffice.character = TerroristOne

let currentRoom;

const displayRoomInfo = (room) => {
  let occupantMsg = "";

  if (room.character === "") {
    occupantMsg = "There is no one in this area.";
  } else {
    occupantMsg = `${room._character.describe()}`;
  }

  let textContent =
    "<p>" + room.describe() + "</p>" + "<p>" + occupantMsg + "</p>";

  document.getElementById("textarea").innerHTML = textContent;
  document.getElementById("usertext").value = "";
  document.getElementById("usertext").focus();
};


let weapon = ""
let name = ""

const startGame = () => {

  if (weapon === "") {
    alert("You cant fight without a weapon!")
    return;
  }

  if (name === "") {
    alert("You need a name to play the game!")
    return;
  }


  document.getElementById("textarea").classList.remove("hidden");
  document.getElementById("usertext").classList.remove("hidden");
  document.getElementById("startGameBtn").classList.add("hidden")
  document.getElementById("userInputArea").classList.add("hidden")
  // this is the starting room.
  currentRoom = mainEntrance;
  displayRoomInfo(currentRoom);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const command = document.getElementById("usertext").value.toLowerCase();
      const directions = ["north", "south", "east", "west", "up", "down"];
      if (directions.includes(command)) {
        currentRoom = currentRoom.move(command);
        displayRoomInfo(currentRoom);
      } else {
        document.getElementById("usertext").value = "";
        alert("That is not a valid command.");
        return;
      }
    }
  });
};

const setUserWeapon = (weaponPassedIn) => {
  document.getElementById("selectedWeapon").classList.remove("hidden");
  document.getElementById("usersWeapon").textContent = weaponPassedIn;
  weapon = weaponPassedIn;
}

const setName = (namePassedIn) => {
  name = namePassedIn;
}