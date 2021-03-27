count = 0;

async function populateResturant() {
  const diningRequest = await fetch("/api/dining");
  const diningData = await diningRequest.json();
  console.table(diningData);
  const name = document.querySelector(".name");
  const address = document.querySelector(".address");

  diningData.data.forEach((item) => {

    const appendName = document.createElement('ul');
    appendName.classList.add('title', 'has-text-centered','is-parent','is-3')
    appendName.innerHTML = `
    ${item.hall_name}
    `;
    name.append(appendName);

    const appendAddress = document.createElement('ul');
    appendAddress.classList.add('title', 'has-text-centered','is-parent','is-3')
    appendAddress.innerHTML = `
    ${item.hall_address.split(',')[0]}
    `;
    address.append(appendAddress);



  });
}

async function windowActions() {
  populateResturant();
}

window.onload = windowActions();
