let images = ["./img/im1.png", "./img/im2.png", "./img/im3.png", "./img/im4.png"]

let index = 0 

const imgElement = document.querySelector('#main__photo')

function change() {
  imgElement.src = images[index]
  index > 2 ? index = 0 : index++
}

window.onload = function () {
  setInterval(change, 4000)
}