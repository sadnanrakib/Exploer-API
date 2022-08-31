const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res=>res.json())
    .then(data=>displyUser(data.results))
}

const displyUser = users=>{
const randomuser = document.getElementById('user-container')
// randomuser.classList.add('user')
for (const user of users){
    
    userDiv = document.createElement('div')
    userDiv.classList.add('user')
    userDiv.innerHTML = `
    <h1>User : ${user.email}</h1>
    <p>Email</p>
    
    
    
    `;
    

    randomuser.appendChild(userDiv);
}
}

loadUser();