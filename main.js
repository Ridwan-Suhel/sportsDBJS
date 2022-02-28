const loadPlayer = () => {
  const searchValue = document.getElementById("inputSearch").value;
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPlayer(data.player));
};
const showPlayer = (players) => {
  const searchWrapper = document.getElementById("result-wrapper");
  for (const player of players) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "col-md-6");
    cardDiv.innerHTML = `
      <img src="${player.strThumb}" class="card-img-top" alt="Image" />
      <div class="card-body">
        <h5 class="card-title">Name: ${player.strPlayer}</h5>
        <p class="lead">Birth Place: ${player.strBirthLocation}<p>
        <p class="card-text">${player.strDescriptionEN.slice(0, 40)}</p>
        <a href="#" class="btn btn-primary">Delete</a>
        <a href="#" class="btn btn-primary">Details</a>
      </div>
    `;
    searchWrapper.appendChild(cardDiv);
    console.log(player);
  }
};
