// Character list. Each house has a name and a code.
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const houseSelect = document.getElementById("house");
const characterList = document.getElementById("characters");

// --- Fill dropdown ---
houses.forEach(house => {
  const option = document.createElement("option");
  option.value = house.code;
  option.textContent = house.name;
  houseSelect.appendChild(option);
});

// --- When user selects a house ---
houseSelect.addEventListener("change", () => {
  const selected = houseSelect.value;
  const chars = getCharacters(selected);

  // Clear previous list
  characterList.innerHTML = "";

  // Add new characters
  chars.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    characterList.appendChild(li);
  });
});
