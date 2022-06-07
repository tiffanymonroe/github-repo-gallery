// profile info
const profile = document.querySelector(".overview");
const username = "tiffanymonroe";

const getData = async function (){
  const request = await fetch(`https://api.github.com/users/${username}`);
  const response = await request.json();

  displayUserInfo(response);
};

const displayUserInfo = function (data) {
  const user = document.createElement("div");
  user.classList.add("user-info");
  user.innerHTML =
    `<figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>`;
  profile.append(user);
};

getData();
