//////// Jonathons instagram code start /////

// i've completely ****** this exercise up
// I started with Duncan - js code is in the files
// i then restarted following along with Nico's video
// this afternoon i thought i'd start again and totally can't see why my for loop...
// ... is not working
// i'm going to get some rest for the rest of the weekend and hope that various...
//... things i've learned have stuck going into next week

{
  /* <div id="root">
  <header class="main-header">
    <!-- Go to 2-header-section.html -->
  </header>
  <main class="wrapper">
    <!-- Go to 3-header-section.html -->
  </main>
</div> */
}

// first finding root in the html ///

const rootEl = document.querySelector("#root");
console.log(rootEl);

/// making the header and main to link to root ////

const headerEl = document.createElement("header");
headerEl.setAttribute("class", "main-header");

const wrapperEl = document.createElement("wrapper");
wrapperEl.setAttribute("class", "main-header");

rootEl.append(headerEl, wrapperEl);

//////// header and main created and linked to root ✅

// <div class="wrapper">
// <div class="chip active">
//   <div class="avatar-small">
//     <img
//       src="https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
//       alt="Salvador Dali"
//     />
//   </div>

/// make one chip and hard code it  ✅

function makeUserChip(user) {
  const divEl = document.createElement("div");
  divEl.setAttribute("class", "wrapper");

  const chipEl = document.createElement("div");
  chipEl.setAttribute("class", "chip active");

  const avatarEl = document.createElement("div");
  avatarEl.setAttribute("class", "avatar-small");

  const imgEl = document.createElement("img");
  imgEl.setAttribute(
    "src",
    "https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
  );
  imgEl.setAttribute("alt", "Salvador Dali");

  avatarEl.append(imgEl);
  chipEl.append(avatarEl);
  divEl.append(chipEl);
  headerEl.append(divEl);
}

//////// get users array from server to be able to use this info ✅

let users = [];

fetch("http://localhost:3000/users")
  .then(function (response) {
    console.log("raw json data ", response);
    return response.json();
  })
  .then(function (usersData) {
    console.log("second fetch ", usersData);
    users = usersData;
  });

// the above fetch is working becuase if i call users in the console i see all 3 objects within the array

//// for loop to get each user from the users array to appear on header /// ❌

// i've made a function that takes in users (array of data) as an arguement
// it should then loop for every user of users
// each time calling the makeUserChip function (which works)
// it should be adding all 3 chips to the top header - its not

function makeUsersChips(users) {
  for (user of users) {
    makeUserChip(user);
  }
  makeUsersChips(user);
}

console.log(makeUsersChips);

///// calling functions

makeUserChip();
