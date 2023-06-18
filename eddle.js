document.addEventListener("DOMContentLoaded", function() {


    // Get the script element by its ID
    const scriptElement = document.getElementById("unparsed");
  
    // Extract the CSV content
    const csvContent = scriptElement.textContent.trim();
  
    // Split the CSV content into an array of lines
    const lines = csvContent.split("\n");
  
    // Declare variables outside the loop
    let firstName, lastName, team, position, season, number;
    let guessCount = 0;
    let guessFirstName = "";
    let guessLastName = "";
    let guessTeam = "";
    let guessPos = "";
    let guessSeason = "";
    let guessNumber = "";
  
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

     // Generate random indices to pick a player
     const randomIndex = Math.floor(Math.random() * players.length);
     const randomPlayer = players[randomIndex];
     // Get the correct player's information
     let correctFirstName = randomPlayer.firstName;
     let correctLastName = randomPlayer.lastName;
     let correctTeam = randomPlayer.team;
     let correctPos = randomPlayer.position;
     let correctSeason = randomPlayer.season;
     let correctNumber = randomPlayer.number;

  
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
            ///
            document.getElementById("tblGuesses").classList.remove("hide");
            
            // Access the table element by its ID
            let tbl = document.getElementById("tblGuesses");

            // Access the tbody element within the table
            let tbody = tbl.getElementsByTagName("tbody")[0];

            // Insert a new row into the tbody
            let row = tbody.insertRow(tbody.rows.length);
            // Add a class to the row for styling
            row.classList.add('added-row');

            let cName = row.insertCell(0);
            let cTeam = row.insertCell(1);
            let cPos = row.insertCell(2);
            let cSeason = row.insertCell(3);
            let cNumber = row.insertCell(4);

            // Get the selected player's information
            let selectedPlayer = this.textContent;
            let player = players.find(p => p.firstName + ' ' + p.lastName === selectedPlayer);



            // Assign the player's information to the table cells
            guessFirstName = player.firstName;
            guessTeam = player.team;
            guessLastName = player.lastName;
            guessPos = player.position;
            guessSeason = player.season;
            guessNumber = player.number;
            
            cName.textContent = guessFirstName + ' ' + guessLastName;
            cTeam.textContent = guessTeam;
            cPos.textContent = guessPos;
            cSeason.textContent = guessSeason;
            cNumber.textContent = guessNumber;

            function isGuessCorrect() {
                if (guessFirstName == correctFirstName && guessLastName == correctLastName) {
                  return true;
                }  
                return false;
              }
              
              function isTeamCorrect() {
                if (guessTeam == correctTeam) {
                  return true;
                }
                return false;
              }
              
              function isTeamClose() {
                let asfc = ["ARI", "AUS", "HON", "NOL", "NYS", "OCO", "SJS"];
                let nsfc = ["BAL", "BER", "CHI", "COL", "CTC", "SAR", "YKW"];
                
                if (asfc.includes(correctTeam)) {
                  //correct team is in ASFC
                  if (asfc.includes(guessTeam)) {
                    return true;
                  }
                } else {
                  //correct team is in NSFC
                  if (nsfc.includes(guessTeam)) {
                    return true;
                  }
                }
                
                return false;
              }
              
              function isPosCorrect() {
                if (guessPos == correctPos) {
                  return true;
                }
                return false;
              }
              
              function isPosClose() {
                let off = ["QB", "RB", "WR", "TE", "OL", "T", "G", "C", "FB"];
                let def = ["DE", "DT", "LB", "CB", "SS", "FS","K"];
                
                if (off.includes(correctPos)) {
                  //correct pos is offense
                  if (off.includes(guessPos)) {
                    return true;
                  }
                } else {
                  //correct pos is defense
                  if (def.includes(guessPos)) {
                    return true;
                  }
                }
                
                return false;
              }
              
              function isSeasonCorrect() {
                if (guessSeason == correctSeason) {
                  return true;
                }
                return false;
              }
              
              function isSeasonClose() {
                if (guessSeason > correctSeason) {
                  return true;    
                }
                return false;
              }

              function isNumberCorrect() {
                if (guessNumber == correctNumber) {
                  return true;
                }
                return false;
              }
              
              function isNumberClose() {
                if (guessNumber > correctNumber) {
                  return true;    
                }
                return false;
              }

            

              if (isGuessCorrect()) {
                //WIN
                cName.classList.add("correct");
                cTeam.classList.add("correct");
                cPos.classList.add("correct");
                cSeason.classList.add("correct");
                cNumber.classList.add("correct");
              } else {
                //guess was INCORRECT
                if (isTeamCorrect()) {
                  cTeam.classList.add("correct");
                } else if (isTeamClose()) {
                  cTeam.classList.add("close");
                }
                if (isPosCorrect()) {
                  cPos.classList.add("correct");
                } else if (isPosClose()) {
                  cPos.classList.add("close");
                }
                if (isSeasonCorrect()) {
                  cSeason.classList.add("correct");
                } else if (isSeasonClose()) {
                  cSeason.classList.add("close");
                }
                if (isNumberCorrect()) {
                    cNumber.classList.add("correct");
                } else if (isNumberClose()) {
                    cNumber.classList.add("close");
                }
              } 
                    // Increment the guess count
            guessCount++;

            // Display the updated guess count
            document.getElementById("guesses").textContent = guessCount + " of 10 guesses";

            if (guessCount === 10) {
                const correctFullName = correctFirstName + " " + correctLastName;
                if (confirm("You lost! The answer was " + correctFullName + ". Want to play again?")) {
                  // Restart the page
                  location.reload();
                }
              }

            if (isGuessCorrect()) {
            // WIN
            cName.classList.add("correct");
            cTeam.classList.add("correct");
            cPos.classList.add("correct");
            cSeason.classList.add("correct");
            cNumber.classList.add("correct");

            // Check if all cells have the "correct" class
            if (
                cName.classList.contains("correct") &&
                cTeam.classList.contains("correct") &&
                cPos.classList.contains("correct") &&
                cSeason.classList.contains("correct") &&
                cNumber.classList.contains("correct")
            ) {
                        const tries = guessCount; // Calculate the number of tries
                if (confirm("You won in " + tries + " tries! Play again?")) {
                // Restart the page
            location.reload();
        }
      }
            } else {
            // guess was INCORRECT
            }
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
  



