
// function loadData (){
//     fetch('https://jsonplaceholder.typicode.com/users/')
//       .then(response => response.json())
//       .then(users => {
//         displayuser(users)
//       })

// };
async function loadData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json();
  return data
}

loadData().then( data=> {
  displayuser(data)
});
function displayuser( users){
  const ul =document.getElementById('myList');
  for( let i =0; i<users.length; i++){
    let user = users[i];
    const li = document.createElement('li');
    li.innerText= user.name;
    ul.appendChild(li);
  };
};