var data = [];
var currentIndex = 0;
var countDisplayed = 0;

function loadData() {
    fetch('json/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load data');
        }
        return response.json();
      })
      .then(jsonData => {
        if (!Array.isArray(jsonData)) {
          throw new Error('Invalid data format');
        }
  
        data = jsonData;
        loadPersons(currentIndex, currentIndex + 2);
        document.getElementById('previousButton').disabled = true;
      })
      .catch(error => console.error('Error loading data:', error.message));
}

function loadPersons(startIndex, endIndex) {
    var personContainer = document.getElementById('personContainer');
    personContainer.innerHTML = '';
    countDisplayed = 0;

    for (var i = startIndex; i <= endIndex; i++) {
        if (i < data.length) {
            displayPerson(data[i],i+1);
            countDisplayed++;
        } else {
            break;
        }
    }

    var countDisplay = document.getElementById('desc_title');
    countDisplay.textContent = 'CURRENTLY ' + countDisplayed + ' PEOPLE SHOWING';
}

function displayPerson(person,id) {
  var personContainer = document.getElementById('personContainer');
  var personInfo = document.createElement('div');
  personInfo.innerHTML = `  
    <table class='table table-bordered rounded-table'>
        <tr>
            <td rowspan='2' width='50' id="id" class='ids_number'> ${id} </td>
            <td id='name' class='names'>Name: ${person.name}</td>
        </tr>

        <tr>
            <td id='location' class='locations'>Location: ${person.location} </td>
        </tr>
    </table>    
    `;
    personContainer.appendChild(personInfo);       
}

function loadNextPersons() {
  var personContainer = document.getElementById('personContainer');
  personContainer.innerHTML = '';
  currentIndex += 3;

  if (currentIndex < data.length) {
    loadPersons(currentIndex, currentIndex + 2);
  } else {
    alert('No more people!');
    currentIndex -= 3;
  }
  document.getElementById('previousButton').disabled = false;
}

function loadPreviousPersons() {
  var personContainer = document.getElementById('personContainer');
  personContainer.innerHTML = '';
  currentIndex -= 3;
  if (currentIndex >= 0) {
    loadPersons(currentIndex, currentIndex + 2);
  } else {
    currentIndex = 0;
  }
  document.getElementById('previousButton').disabled = currentIndex === 0;
}

loadData();
