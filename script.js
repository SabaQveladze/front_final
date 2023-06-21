fetch(" https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    return data.json();
  })
  .then((data1) => {
    user(data1, 6);
  });

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((data) => {
    return data.json();
  })
  .then((data1) => {
    addPhoto(data1, 6);
  });

function user(data, userNumber) {
  let cardlist = document.querySelector(".cardlist");
  for (let i = 0; i < userNumber; i++) {
    let cardContainer = document.createElement("div");
    let div = document.createElement("div");
    let name = document.createElement("p");
    let infodiv = document.createElement("div");
    let id = document.createElement("p");
    let email = document.createElement("p");
    let tel = document.createElement("p");
    let userbtn = document.createElement("div");
    let selectbtn = document.createElement("button");

    div.classList.add("card");
    name.classList.add("names");
    infodiv.classList.add("infodiv");
    id.classList.add("info");
    email.classList.add("info");
    tel.classList.add("info");
    userbtn.classList.add("userbtn");
    selectbtn.classList.add("slctuser");
    cardContainer.classList.add("cardContainer");

    name.innerText = data[i].name;
    id.innerText = data[i].id;
    tel.innerText = data[i].phone;
    selectbtn.innerText = "Select User";
    email.innerText = data[i].email;
    selectbtn.addEventListener("click", () => {
      addUser(data[i].id);
    });
    userbtn.appendChild(selectbtn);
    infodiv.appendChild(id);
    infodiv.appendChild(email);
    infodiv.appendChild(tel);

    div.appendChild(name);
    div.appendChild(infodiv);
    div.appendChild(userbtn);
    cardContainer.appendChild(div);
    cardlist.appendChild(cardContainer);
  }
}
function addUser(id) {
  let newUser = document.querySelector(".idInput");
  newUser.placeholder = id;
}

async function postJSON(data) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

function newPost() {
  let id = document.querySelector(".idInput");
  let title = document.querySelector(".titleInput");
  let textarea = document.querySelector(".textarea");

  let object = {
    id: id.placeholder,
    title: title.value,
    body: textarea.value,
  };
  return object;
}

function addPhoto(obj, photoNumber) {
  let photos = document.querySelector(".photos");
  for (let i = 0; i < photoNumber; i++) {
    let img = document.createElement("img");
    img.classList.add("imgs");
    img.src = obj[i].url;
    photos.appendChild(img);
  }
}
