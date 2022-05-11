let images = ["./img/im2.png", "./img/im3.png", "./img/im4.png", "./img/im1.png"]

let index = 0 

const imgElement = document.querySelector('#main__photo')

function change() {
  imgElement.src = images[index]
  index > 2 ? index = 0 : index++
}

window.onload = function () {
  setInterval(change, 4000)
}

// Button login enabled/disabled

let user = document.querySelector("#user")
let password = document.querySelector("#password")
let login = document.querySelector("#login")

login.disabled = true 

user.addEventListener("change", enabled)
password.addEventListener("change", enabled)

function enabled() {
  if (user.value === "" || password.value === "") {
    login.disabled = true
  } else {
    login.disabled = false
  }
}

