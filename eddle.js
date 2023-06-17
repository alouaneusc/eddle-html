document.addEventListener("DOMContentLoaded", function() {
    // Get the script element by its ID
    const scriptElement = document.getElementById("unparsed");
  
    // Extract the CSV content
    const csvContent = scriptElement.textContent.trim();
  
    // Split the CSV content into an array of lines
    const lines = csvContent.split("\n");
  
    // Declare variables outside the loop
    let firstName, lastName, team, position, season, number;
  
    // Declare an array to hold player objects
    const players = [];
  
    // Process each line of the CSV data
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
  
      // Split the line into individual values
      const values = line.split(",");
  
      // Create a player object and assign values to its properties
      const player = {
        firstName: values[0].trim(),
        lastName: values[1].trim(),
        team: values[2].trim(),
        position: values[3].trim(),
        season: values[4].trim(),
        number: values[5].trim()
      };
  
      // Add the player object to the array
      players.push(player);
    }
  
    // Function to print player info based on index
    function printPlayerInfo(index) {
      if (index >= 0 && index < players.length) {
        const player = players[index];
        console.log("Player Information:");
        console.log("First Name:", player.firstName);
        console.log("Last Name:", player.lastName);
        console.log("Team:", player.team);
        console.log("Position:", player.position);
        console.log("Season:", player.season);
        console.log("Number:", player.number);
      } else {
        console.log("Invalid player index.");
      }
    }
  
    let options = document.querySelector('.options');
  
    for (let i = 0; i < players.length; i++) {
      let li = document.createElement("li");
      let firstName = players[i].firstName; // Get the first name from the player object
      let lastName = players[i].lastName; // Get the last name from the player object
      let fullName = firstName + " " + lastName; // Concatenate the first and last name
      li.textContent = fullName;
      options.appendChild(li);
    }
  
    const selectBox = document.querySelector('.select-box');
    const selectOption = document.querySelector('.select-option');
    const soValue = document.querySelector('#soValue');
    const optionSearch = document.querySelector('#optionSearch');
    const optionList = document.querySelectorAll('.options li');
  
    selectOption.addEventListener('click', function() {
      selectBox.classList.toggle('active');
    });

optionList.forEach(function (optionListSingle, index) {
    optionListSingle.addEventListener('click', function () {
      var text = this.textContent;
      soValue.value = text;
      selectBox.classList.remove('active');
  
      // Find the selected player's index in the players array
      const selectedPlayerIndex = index;
  
      // Call the printPlayerInfo function with the selected player's index
      printPlayerInfo(selectedPlayerIndex);
  
      // Update the table with the selected player's information
      const player = players[selectedPlayerIndex];
      const fullName = `${player.firstName} ${player.lastName}`;
  
      document.getElementById(`box${(index) * 5 + 1}`).textContent = fullName;
      document.getElementById(`box${(index) * 5 + 2}`).textContent = player.team;
      document.getElementById(`box${(index) * 5 + 3}`).textContent = player.position;
      document.getElementById(`box${(index) * 5 + 4}`).textContent = player.season;
      document.getElementById(`box${(index) * 5 + 5}`).textContent = player.number;
    });
  });

    optionSearch.addEventListener('keyup', function() {
      var filter, li, i, textValue;
      filter = optionSearch.value.toUpperCase();
      li = options.getElementsByTagName('li');
      for (i = 0; i < li.length; i++) {
        liCount = li[i];
        textValue = liCount.textContent || liCount.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = '';
        } else {
          li[i].style.display = 'none';
        }
      }
    });
  });
  
  
  // var boxElements = document.querySelectorAll('[id$="1"], [id$="6"]');
        // for (var i = 0; i < boxElements.length; i++) {
        //     if (boxElements[i].textContent.trim() === '') {
        //         boxElements[i].textContent = text;
        //         boxElements[i].value = i;
        //         break; // Exit the loop after updating the first available box
        //     }
        // }