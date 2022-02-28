const loadUsers = () => {
  fetch(`https://randomuser.me/api/?results=5`)
    .then((res) => res.json())
    .then((data) => showOser(data.results));

  document.getElementById("spinner-area").style.display = "flex";
};
const showOser = (users) => {
  const divContainer = document.getElementById("user-container");
  for (const user of users) {
    console.log(user);

    const divCol = document.createElement("div");
    divCol.classList.add("col-3", "mt-5");
    divCol.innerHTML = `
    <h2>Name: ${user.name.first}</h2>
    <p>Gender: ${user.gender}</p>
    <p>Email: ${user.email}</p>
    <img src="${user.picture.large}" class="img-fluid" alt="image" />
    `;
    divContainer.appendChild(divCol);
    document.getElementById("spinner-area").style.display = "none";
  }
};
