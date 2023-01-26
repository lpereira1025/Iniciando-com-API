const section1 = document.querySelector(".info")
const section2 = document.querySelector(".repo")




fetch("https://api.github.com/users/lpereira1025")
.then(function(response){ return response.json()})
.then(function(responseJson){ 
    section1.insertAdjacentHTML("beforeend", `
        <div class="cardInfo">
            <img src="${responseJson.avatar_url}" alt="" />
            <h1>${responseJson.name}</h1>
            <p>${responseJson.bio}</p>
        </div>
    `)
})

fetch("https://api.github.com/users/lpereira1025/repos")
  .then(function (response) {
    return response.json();
}).then(function(responseJson){
    responseJson.map(repository => section2.insertAdjacentHTML("beforeend",`
        <div class="cardRepo">
            <h1>${repository.name}</h1>
            <a 
            href="${repository.html_url}"     
            target="_blank">
            Acessar repositório
            </a>
        </div>`
    ))
})

