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
        <a href="#" class="btn btn-danger">Delete</a>
        <a href="#" onclick="playerDetails('${
          player.idPlayer
        }')" class="btn btn-primary">Details</a>
      </div>
    `;
    searchWrapper.appendChild(cardDiv);
    console.log(player);
  }
};
const playerDetails = (plDetails) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${plDetails}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPlayerDetails(data.players[0]));
};
const showPlayerDetails = (playerDetails) => {
  const detailsWrapper = document.getElementById("details-wrapper");
  const div = document.createElement("div");
  div.classList.add("col-md-12");
  div.innerHTML = `
      <img src="${playerDetails.strThumb}" class="card-img-top" alt="Image" />
      <div class="card-body">
        <h5 class="card-title">Name: ${playerDetails.strPlayer}</h5>
        <p class="lead">Birth Place: ${playerDetails.strBirthLocation}<p>
        <p class="card-text">${playerDetails.strDescriptionEN}</p>
      </div>
  `;
  detailsWrapper.appendChild(div);
};
