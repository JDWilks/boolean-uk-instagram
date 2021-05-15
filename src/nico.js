//// starting again on my own - following Nico's video ////

////////////////////////////////////////////////////////////////////
//// query root to create bridge between the below and the html ////

const rootEl = document.querySelector("#root");
console.log(rootEl);

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
  const postSectionEl = document.querySelector(".create-post-section");
  postSectionEl.append(formEl);
}

/////////////////function to create the feed///////////

function createFeedSection() {
  const ulEl = document.createElement("ul");
  ulEl.setAttribute("class", "stack feed-list");

  const feedSectionEl = document.querySelector(".feed");

  feedSectionEl.append(ulEl);
}

/////////////////function to create the post///////////

// list of posts

function createPost(post) {
  const feedListEl = document.querySelector(".feed-list");
  console.log("inside create post", post);

  ///

  const liEl = document.createElement("li");
  liEl.setAttribute("class", "post");

  // post image section

  const postImgEl = document.createElement("div");
  postImgEl.setAttribute("class", "post--image");

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", post.image.src);
  imgEl.setAttribute("alt", post.title);

  postImgEl.append(imgEl);

  ////

  // post content section

  const postContentEl = document.createElement("div");
  postContentEl.setAttribute("class", "post--content");

  const h2El = document.createElement("h2");
  h2El.innerText = post.title;

  const pEl = document.createElement("p");
  pEl.innerText = post.content;

  postContentEl.append(h2El, pEl);

  ////

  const postCommentsEl = document.createElement("div");
  postCommentsEl.setAttribute("class", "post--comments");

  const h3El = document.createElement("h3");
  h3El.innerText = "Comments";

  const commentEl = document.createElement("div");
  commentEl.setAttribute("class", "post--comment");

  const avatarEl = document.createElement("div");
  avatarEl.setAttribute("class", "avatar-small");

  const commentImgEl = document.createElement("img");
  commentImgEl.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU"
  );
  commentImgEl.setAttribute("alt", "Van Gogh");

  avatarEl.append(commentImgEl);

  const commentTextEl = document.createElement("p");
  commentTextEl.innerText = "What a great photo!!";

  commentEl.append(avatarEl, commentTextEl);

  /////

  const formEl = document.createElement("form");
  formEl.setAttribute("id", "create-comment-form");
  formEl.setAttribute("autocomplete", "off");

  const commentLabelEl = document.createElement("label");
  commentLabelEl.setAttribute("for", "comment");
  commentLabelEl.innerText = "Add comment";

  const commentInputEl = document.createElement("input");
  commentInputEl.setAttribute("id", "comment");
  commentInputEl.setAttribute("name", "comment");
  commentInputEl.setAttribute("type", "text");

  const submitbtn = document.createElement("button");
  submitbtn.setAttribute("type", "submit");
  submitbtn.innerText = "Comment";

  formEl.append(commentLabelEl, commentInputEl, submitbtn);

  ///

  const headingEl = document.createElement("h2");
  headingEl.innerText = post.title;

  feedListEl.append(postImgEl, postContentEl, commentEl, formEl);
}

function getPosts() {
  return fetch("http://localhost:3000/posts")
    .then(function (Response) {
      return Response.json();
    })
    .then(function (posts) {
      console.log("inside posts request", posts[0]);
      createPost(posts[0]);
    });
}

getPosts();

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

  return chipEl;
}

/////////////creating a function that loops and makes all chips//////

function createUserChips(users) {
  for (const user of users) {
    const chipEl = createUserChip(user);

    const wrapperEl = document.querySelector(".header.wrapper");

    wrapperEl.append(chipEl);
  }
}

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
createFeedSection();
getUsers();
