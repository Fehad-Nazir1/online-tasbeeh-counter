let count = 0
let x = document.getElementById("display-btn")
let y = document.getElementById("history")

function counter (){
  count++
  x.innerText = count
}

function saver(){
  let strSaver = count + " - "
  y.innerText += strSaver
  count = 0
  x.innerText = 0
}

function reset(){
  count = 0
  strSaver = " "
  x.innerText = 0
  y.innerText = ""
}
