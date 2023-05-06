const loadUser = ()=> {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    console.log(user);
    // image
    document.getElementById('image').src = user.results[0].picture.large
    
    // name
    const name =document.getElementById('name')
    name.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last
    
    // gender
    document.getElementById('gender').innerHTML = user.results[0].gender

    // location 
    document.getElementById('location').innerHTML = user.results[0].location.city

}
loadUser()