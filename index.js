let homeNum = 0;
let guestNum = 0;
let totalHomeNum = 0;
let totalGuestNum = 0;
let homeNumElement = document.getElementById('s-n1-home');
let guestNumElement = document.getElementById('s-n1-guest');

function addOneHome() {
  homeNum++;
  totalHomeNum++;
  homeNumElement.innerHTML = homeNum;
}

function addOneGuest() {
  guestNum++;
  totalGuestNum++;
  guestNumElement.innerHTML = guestNum;
}

function addTwoHome() {
  homeNum += 2;
  totalHomeNum += 2;
  homeNumElement.innerHTML = homeNum;
}

function addTwoGuest() {
  guestNum += 2;
  totalGuestNum += 2;
  guestNumElement.innerHTML = guestNum;
}

function addThreeHome() {
  homeNum += 3;
  totalHomeNum += 3;
  homeNumElement.innerHTML = homeNum;
}

function addThreeGuest() {
  guestNum += 3;
  totalGuestNum += 3;
  guestNumElement.innerHTML = guestNum;
}

function reset() {
  homeNum = 0;
  guestNum = 0;
  homeNumElement.innerHTML = homeNum;
  guestNumElement.innerHTML = guestNum;
}

reset();