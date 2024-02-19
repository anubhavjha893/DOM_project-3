var main = document.querySelector("#main")
var cr = document.querySelector(".cursor")
main.addEventListener("mousemove",function(dets){
console.log(dets)
    cr.style.left = dets.x+"px"
cr.style.top = dets.y+"px"
})