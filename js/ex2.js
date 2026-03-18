// Country list
const countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
                    "Anguilla", "Antarctica", "Antigua-and-Barbuda", "Argentina",
                    "Armenia", "Aruba", "Australia", "Autria", "Azerbaïjan"];

const input = document.getElementById("country");
const suggestions = document.getElementById("suggestions");

// When user types in the input box
  input.addEventListener("input", () => {
    const text = input.value.trim().toLowerCase();

    // Clear previous suggestions
    suggestions.innerHTML = "";

    // If empty, stop here
    if (text === "") {
      return;
    }

    // Filter countries starting with the typed text
    const matches = countryList.filter(country =>
      country.toLowerCase().startsWith(text)
    );

    // Create suggestion elements
    matches.forEach(country => {
      const div = document.createElement("div");
      div.textContent = country;
      div.classList.add("suggestion");

    // Clicking a suggestion fills the input box
    div.addEventListener("click", () => {
      input.value = country;
      suggestions.innerHTML = ""; // Clear suggestions
    });

      suggestions.appendChild(div);
    });
  });