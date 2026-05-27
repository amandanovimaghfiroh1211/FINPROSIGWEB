alert("Selamat datang di website CV Amanda Novi Maghfiroh");
document.addEventListener("DOMContentLoaded", function () {

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function () {

document.body.classList.toggle("dark");
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){
if(document.documentElement.scrollTop > 200){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}
};

topBtn.onclick = function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
};

});

});