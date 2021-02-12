/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios';


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell']

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function theRyanFunction(gitHub) {
  //Creating New HTML Elements
  let div1 = document.createElement('div')
  let img = document.createElement('img')
  let div2 = document.createElement('div')
  let h3 = document.createElement('h3')
  let p1 = document.createElement('p')
  let p2 = document.createElement('p')
  let p3 = document.createElement('p')
  let a = document.createElement('a')
  let p4 = document.createElement('p')
  let p5 = document.createElement('p')
  let p6 = document.createElement('p')

  //Setting Classes to New Classes
  div1.classList.add('card')
  div2.classList.add('card-info')
  h3.classList.add('name')
  p1.classList.add('username')

  //text content
  img.src = gitHub.avatar_url
  h3.textContent = gitHub.name
  p1.textContent = gitHub.login
  p2.textContent = 'Location: ' + gitHub.location
  p3.textContent = 'Profile: '
  a.href = gitHub.url
  a.textContent = gitHub.url
  p4.textContent = 'Followers: ' + gitHub.followers
  p5.textContent = 'Following: ' + gitHub.following
  p6.textContent = 'Bio: ' + gitHub.bio

  //append
  div1.appendChild(img)
  div1.appendChild(div2)
  div2.appendChild(h3)
  div2.appendChild(p1)
  div2.appendChild(p2)
  div2.appendChild(p3)
  p3.appendChild(a)
  div2.appendChild(p4)
  div2.appendChild(p5)
  div2.appendChild(p6)

  return div1
}
//object of my github username and information, making my own github card
axios
.get('https://api.github.com/users/ryand1127')
  .then((response) => {
    //grabbing container that cards will go into
    let startPoint = document.querySelector('.cards')
    //make my card and put it into the list of cards
    const myData = response.data
    startPoint.appendChild(theRyanFunction(myData))
  })
  .catch((err) => {
    console.log(err)
  })

  //Original foreach with my followers, code not working
//make a new card of my followers and add them to the list
// axios  
// .get('https://api.github.com/users/ryand1127/followers')
//   .then(response => 
//    look through array to save follower usernames in new array
//     response.data.forEach(element => {
//       followersArray.push(element.login);
//     }))
    
followersArray.forEach(event => {
  axios.get('https://api.github.com/users/' + event)
  .then(res => {
    const theirData = res.data;
const startPoint = document.querySelector('.cards')
startPoint.appendChild(theRyanFunction(theirData))
})
})
  
// Search through original data array looking for login keyword, grabbing and pushing them into a new array one at a time
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
