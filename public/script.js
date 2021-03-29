async function populateDiners() {
  const diningRequest = await fetch("/api/dining"); // gets the dining data using our api
  const diningData = await diningRequest.json();  // converts the data to json
  const dinerArray = diningData.data; // helps store the data?
  console.table(dinerArray); // prints results as a table to console
  const target = document.querySelector('.target'); // selecting where in the html we will insert the rows below

  dinerArray.forEach((item) => { //for each item in dinerArray, do this
    const rows = document.createElement('tr'); // creates rows, a 'table row' variable that we will populate and insert to the html
    rows.innerHTML = `
    <td>${item.hall_id}</td> 
    <td>${item.hall_name}</td>
    <td>${item.hall_address}</td>
    `; // populates three rows containing information snippets from each item
    target.append(rows); // inserts our html into the index.html using the rows variable @ the target location 
  });
}

async function windowActions() {
  populateDiners();
}

window.onload = windowActions();
