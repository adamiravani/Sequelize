async function populateResturant(){
    const diningRequest = await fetch('/api/dining');
    const diningData = await diningRequest.json();
    const targetBox= document.querySelector('.targetBox')
    console.table(diningData)

    diningData.data.forEach((item) => {
        const appendItem = document.createElement('div');
        appendItem.classList.add('title', 'has-text-centered','is-parent','is-3')
        appendItem.innerHTML = `
        <article class="title is-child box has-background-link-dark">
        <span class = "subtitle has-text-light has-text-weight-bold">
        ${item.hall_name}</span>
        <br />
        <span class="has-text-light">
        ${item.hall_address.split(',')[0]}
        </span>
        <br />
        <span class="has-text-light">
        ${item.hall_address.split(',')[1]}
        </span>
        </article>`;
        targetBox.append(appendItem);
    })
}


async function windowActions() {
    populateResturant();
}

window.onload = windowActions();