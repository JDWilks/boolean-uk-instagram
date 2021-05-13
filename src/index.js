//// starting again on my own - following Nico's video ////

////////////////////////////////////////////////////////////////////
//// query root to create bridge between the below and the html ////

const rootEl = document.querySelector("#root");
console.log(rootEl);

////////////////////////////////////////////////////////////////////
//created header and main element///appended to root el////////

/// function to create header section /////

function createHeaderSection() {
  const headerEl = document.createElement("header");
  headerEl.setAttribute("class", "main-header");

  const wrapperEl = document.createElement("div");
  wrapperEl.setAttribute("class", " header wrapper");

  headerEl.append(wrapperEl);
  rootEl.append(headerEl);
}

/// function to create main section /////

function createMainSection() {
  const mainEl = document.createElement("main");
  mainEl.setAttribute("class", "wrapper");

  const postSectionEl = document.createElement("section");
  postSectionEl.setAttribute("class", "create-post-section");

  const feedSectionEl = document.createElement("section");
  feedSectionEl.setAttribute("class", "feed");

  mainEl.append(postSectionEl, feedSectionEl);
  rootEl.append(mainEl);
}

////////////////////////////////////////////////////////////////////
/////////////////below is header section////////////////////////////

/////////////////creating a function that makes one chip///////////

function createUserChip(user) {
  const chipEl = document.createElement("div");
  chipEl.setAttribute("class", "chip");

  const avatarEl = document.createElement("div");
  avatarEl.setAttribute("class", "avatar-small");

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", user.avatar);
  imgEl.setAttribute("alt", user.username);

  avatarEl.append(imgEl);

  const nameEl = document.createElement("span");
  nameEl.innerText = user.username;

  chipEl.append(avatarEl, nameEl);

  const wrapperEl = document.querySelector(".header.wrapper");

  wrapperEl.append(chipEl);
}

/////////////creating a function that loops and makes all chips//////

function createUserChips(users) {
  for (const user of users) createUserChip(user);
}

//////// create create post section (form)  // form appended to postSectionEl which is appended to main ////

function createCreatePostSection() {
  const formEl = document.createElement("form");
  formEl.setAttribute("id", "create-post-form");
  formEl.setAttribute("autocomplete", "off");

  const titleEl = document.createElement("h2");
  titleEl.innerText = "Create A Post";

  const labelForImageEl = document.createElement("label");
  labelForImageEl.setAttribute("for", "image");
  labelForImageEl.innerText = "Image URL";
  const inputForImageEl = document.createElement("input");
  inputForImageEl.setAttribute("id", "image");
  inputForImageEl.setAttribute("name", "image");
  inputForImageEl.setAttribute("type", "text");

  const labelForTitleEl = document.createElement("label");
  labelForTitleEl.setAttribute("for", "title");
  labelForTitleEl.innerText = "Title";
  const inputForTitleEl = document.createElement("input");
  inputForTitleEl.setAttribute("id", "title");
  inputForTitleEl.setAttribute("name", "title");
  inputForTitleEl.setAttribute("type", "text");

  const labelForTextAreaEl = document.createElement("label");
  labelForTextAreaEl.setAttribute("for", "content");
  labelForTextAreaEl.innerText = "Content";
  const textAreaEL = document.createElement("textarea");
  textAreaEL.setAttribute("id", "content");
  textAreaEL.setAttribute("name", "content");
  textAreaEL.setAttribute("rows", "2");
  textAreaEL.setAttribute("columns", "30");

  const actionDivEl = document.createElement("div");
  actionDivEl.setAttribute("class", "action-btns");

  const previewBtnEl = document.createElement("button");
  previewBtnEl.innerText = "Preview";
  previewBtnEl.setAttribute("id", "preview-btn");
  previewBtnEl.setAttribute("type", "button");

  const submitBtnEl = document.createElement("button");
  submitBtnEl.setAttribute("type", "submit");
  submitBtnEl.innerText = "Post";

  actionDivEl.append(previewBtnEl, submitBtnEl);
  formEl.append(
    titleEl,
    labelForImageEl,
    inputForImageEl,
    labelForTitleEl,
    inputForTitleEl,
    labelForTextAreaEl,
    textAreaEL,
    actionDivEl
  );
  const postSectionEl = document.querySelector("section");
  postSectionEl.append(formEl);
}

////////////////////////////////////////////////////////////////////

///////////////// creating feed section ///////////

/////////creating a function to talk to database to get users//////

function getUsers() {
  return fetch("http://localhost:3000/users")
    .then(function (Response) {
      return Response.json();
    })
    .then(function (users) {
      createUserChips(users);
    });
}

/////////calling above functions//////

createHeaderSection();
createMainSection();
createCreatePostSection();
getUsers();
