/*jshint esversion: 6 */

// SERVER //
const USER_URL = "https://randomuser.me/api/";


// ELEMENTS //
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const profilePicture = document.getElementById("profile_picture");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const dateOfBirth = document.getElementById("date_of_birth");

const btn = document.querySelector('.btn');


// EVENTS //
btn.addEventListener('click', () => {
  fetchData()
    .then(displayData);
});


// FUNCTIONS //
const fetchData = () => {
  return fetch(USER_URL)
    .then(resp => resp.json());
};

const displayData = (data) => {
  const user = data.results[0];
  profilePicture.src = user.picture.medium;
  fullname.innerText = titleize(`${user.name.title} ${user.name.first} ${user.name.last}`);
  email.innerText = user.email;
  street.innerText = titleize(user.location.street);
  city.innerText = titleize(user.location.city);
  state.innerText = capitalize(user.location.state);
  postcode.innerText = user.location.postcode;
  phone.innerText = user.phone;
  cell.innerText = user.cell;
  dateOfBirth.innerText = user.dob.date.slice(0,10);
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const titleize = (string) => {
  return string.split(" ").map(capitalize).join(" ");
};


// PAGE LOAD //
document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});