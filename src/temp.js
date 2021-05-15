function createPost() {
  const liEl = document.createElement("li");
  liEl.setAttribute("class", "post");

  // const chipEl = createUserChip(user) // for later // we need a user

  // post image section

  const postImgEl = document.createElement("div");
  postImgEl.setAttribute("class", "post--image");

  const imgEl = document.createElement("img");
  imgEl.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1616745309504-0cb79e9ae590?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
  );
  imgEl.setAttribute("alt", "undefined");

  postImgEl.append(imgEl);

  // post content section

  const postContentEl = document.createElement("div");
  postContentEl.setAttribute("class", "post--content");

  const h2El = document.createElement("h2");
  h2El.innerText = "A tree in blossom";

  const pEl = document.createElement("p");
  pEl.innerText = "Spring is finally here... I just love the colours.";

  postContentEl.append(h2El, pEl);

  // post comments section

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

  // create comment form section

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

  liEl.append(postImgEl, postContentEl, commentEl, formEl);

  return liEl;
}
