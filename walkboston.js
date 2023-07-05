function renderPosts(boston, container) {
  const people = boston.data;
  people.sort((a,b) => b[11] - a[11]);
  
  let html = '';
  for (let i = 0; i < 5; i++) {
    html +=
      '<li class="post">' + 
      '<h2>Name: ' + 
      people[i][8] + 
      '</h2>' + 
      '<h3>Salary: ' + 
      people[i][11] + 
      '</h3></li>';
  }

function renderTopEmployees(boston, container) {
  let people = boston.data;
  people.sort((a, b) => b[11] - a[11]);
  people = people.filter(person => person[11] > 200000);
  let html = "";
  for (let i = 0; i < people.length; i++) {
    html +=
    '<li class="post">' +
    "<h2>" +
    people[i][8]+
    "</h2>" +
    "<h3>" +
    "$" + people[i][11].toLocaleString() +
    "</h3>" +
    "</li>";
  
  }
}
let topEmployees = document.createElement('ul');
topEmployees.id = "topEmployees";
topEmployees.innerHTML = html;
container.appendChild(topEmployees);


let topSalaries = document.createElement('ul');
topSalaries.id = "topSalaries";
topSalaries.innerHTML = html;

container.appendChild(topSalaries);
  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
}
renderPosts(boston, document.getElementById('container'));
