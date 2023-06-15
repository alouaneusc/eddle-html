document.addEventListener("DOMContentLoaded", function() {
    let csv = document.getElementById("unparsed").innerHTML;
    let playerArr = $.csv.toArrays(csv);
    console.log(playerArr);
  
    let options = document.querySelector('.options');
  
    for (let i = 2; i < playerArr.length; i++) {
      let li = document.createElement("li");
      li.textContent = playerArr[i][0]; // Assuming the name is in the first column
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
        text = this.textContent;
        soValue.value = text;
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
  