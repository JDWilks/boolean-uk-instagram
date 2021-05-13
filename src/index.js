function createEl(tag) {
  return document.createElement(tag);
}

////////

const rootEl = document.querySelector("#root");
console.log(rootEl);

//////// header section ////////

const headerEl = createEl("header");
headerEl.setAttribute("class", "main-header");

const mainEl = createEl("main");
mainEl.setAttribute("class", "wrapper");

rootEl.append(headerEl, mainEl);

///////////////////////////////////

//////// create user section - getting the date from server on line 185 // appended to headerEl///

function createUserSection(users) {
  const divEl = createEl("div");
  divEl.setAttribute("class", "wrapper");

  for (person of users) {
    function createUser(person) {
      const chipEl = createEl("div");
      chipEl.setAttribute("class", "chip");

      const avatarSmallEl = createEl("div");
      avatarSmallEl.setAttribute("class", "avatar-small");

      const imgEl = createEl("img");
      imgEl.setAttribute("src", person.avatar);
      imgEl.setAttribute("alt", person.username);

      const nameEl = createEl("span");
      nameEl.innerText = person.username;

      avatarSmallEl.append(imgEl);

      chipEl.append(avatarSmallEl, nameEl);

      divEl.append(chipEl);
    }
    createUser(person);
  }

  headerEl.append(divEl);
}

///////////////////////////////////

//////// create post section // appended to main ///

const createPostSectionEl = createEl("section");
createPostSectionEl.setAttribute("class", "create-post-section");
mainEl.append(createPostSectionEl);

const feedEl = createEl("section");
feedEl.setAttribute("class", "feed");

///////////////////////////////////

////// create create post section (form)  // form appended to createPostSectionEl which is appended to main ////

function createCreatePostSection() {
  const formEl = createEl("form");
  formEl.setAttribute("id", "create-post-form");
  formEl.setAttribute("autocomplete", "off");

  const titleEl = createEl("h2");
  titleEl.innerText = "Create A Post";

  const labelForImageEl = createEl("label");
  labelForImageEl.setAttribute("for", "image");
  labelForImageEl.innerText = "Image URL";
  const inputForImageEl = createEl("input");
  inputForImageEl.setAttribute("id", "image");
  inputForImageEl.setAttribute("name", "image");
  inputForImageEl.setAttribute("type", "text");

  const labelForTitleEl = createEl("label");
  labelForTitleEl.setAttribute("for", "title");
  labelForTitleEl.innerText = "Title";
  const inputForTitleEl = createEl("input");
  inputForTitleEl.setAttribute("id", "title");
  inputForTitleEl.setAttribute("name", "title");
  inputForTitleEl.setAttribute("type", "text");

  const labelForTextAreaEl = createEl("label");
  labelForTextAreaEl.setAttribute("for", "content");
  labelForTextAreaEl.innerText = "Content";
  const textAreaEL = createEl("textarea");
  textAreaEL.setAttribute("id", "content");
  textAreaEL.setAttribute("name", "content");
  textAreaEL.setAttribute("rows", "2");
  textAreaEL.setAttribute("columns", "30");

  const actionDivEl = createEl("div");
  actionDivEl.setAttribute("class", "action-btns");

  const previewBtnEl = createEl("button");
  previewBtnEl.innerText = "Preview";
  previewBtnEl.setAttribute("id", "preview-btn");
  previewBtnEl.setAttribute("type", "button");

  const submitBtnEl = createEl("button");
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

  createPostSectionEl.append(formEl);
}

///////////////////////////////////

////////// feed section ///////

function createPostSection(postData) {
  for (post of postData) {
    const listItemEl = createEl("li");

    const chipEl = createEl("div");
    chipEl.setAttribute("class", "chip");

    const avatarSmallEl = createEl("div");
    avatarSmallEl.setAttribute("class", "avatar-small");

    const imgEl = createEl("img");
    imgEl.setAttribute("src", person.avatar);
    imgEl.setAttribute("alt", person.username);

    const nameEl = createEl("span");
    nameEl.innerText = person.username;

    users.avatar;
  }
}

// "id": 1,
// "title": "A tree in blossom",
// "content": "Spring is finally here... I just love the colours.",
// "image": {
// "src": "https://images.unsplash.com/photo-1616745309504-0cb79e9ae590?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
// "alt": "a tree in blossom"
// },
// "likes": 0,
// "userId": 1

// {/* <li class="post">
// <div class="chip active">
//   <div class="avatar-small">
//     <img
//       src="https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
//       alt="Salvador Dali"
//     />
//   </div>
//   <span>Salvador Dali</span>
// </div> */}

//// speaking to server section - getting user data //////

let users = [];

fetch(`http://localhost:3000/users`)
  .then(function (response) {
    console.log("json raw data info: ", response);
    return response.json();
  })
  .then(function (userData) {
    console.log("user date from first fetch: ", userData);
    createUserSection(userData);
    users = userData;
  });

createCreatePostSection();

////////////////////////////////////////////

//// this is geting post data ////

//1. Get the post data, be able to use that data in a create post function

fetch(`http://localhost:3000/posts`)
  .then(function (response) {
    return response.json();
  })
  .then(function (postData) {
    console.log("This is post data from second fetch: ", postData);
    createPostSection(postData);
    console.log("this is users data from second fetch: ", users);
  });
