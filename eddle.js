document.addEventListener("DOMContentLoaded", function() {
    let csv = document.getElementById("unparsed").innerHTML;
    let playerArr = $.csv.toArrays(csv);
    console.log(playerArr);
    console.log(playerArr[3]);
    console.log(playerArr[100]);

  
    let options = document.querySelector('.options');

for (let i = 2; i < playerArr.length; i++) {
  let li = document.createElement("li");
  let firstName = playerArr[i][0]; // Get the first name from the first column
  let lastName = playerArr[i][1]; // Get the last name from the second column
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
  
    optionList.forEach(function(optionListSingle) {
        optionListSingle.addEventListener('click', function() {
          var text = this.textContent;
          soValue.value = text;
          var boxElements = document.querySelectorAll('[id$="1"], [id$="6"]');
          for (var i = 0; i < boxElements.length; i++) {
            if (boxElements[i].textContent.trim() === '') {
              boxElements[i].textContent = text;
              break; // Exit the loop after updating the first available box
            }
          }
          selectBox.classList.remove('active');
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
  