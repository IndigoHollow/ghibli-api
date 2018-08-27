// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

//parse JSON data to JS
request.onload = function() {
  const container = document.getElementById("root");
  let data = JSON.parse(this.response);

  container.innerHTML = "<table id='arrivings'></table>";

  if (request.status >= 200 && request.status < 400) {
    let resulttable = document.getElementById("arrivings"),
      row = resulttable.insertRow(),
      firstElement = Object.keys(data[0]);

    // creating of the table header
    for (let i = 0; i < firstElement.length; i++) {
      row.insertCell().innerHTML = firstElement[i];
    }

    // pulling data from JSON to table
    data.forEach(movie => {
      let row = resulttable.insertRow();

      for (key in movie) {
        row.insertCell().innerHTML = movie[key];
      }
    });
  } else {
    console.log("error in request");
  }
};

// Send request
request.send();
