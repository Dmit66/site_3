function burg() {
    var element = document.getElementById('burg_content');
    var burg = document.getElementById('burg');
    element.classList.toggle("mystyle");
    burg.classList.add('clo');
    
}
function burg_clo(){
    var burg_clo = document.getElementById('burg_clo');
    var element = document.getElementById('burg_content');
     var burg = document.getElementById('burg');
   element.classList.add('clo');
    burg.classList.add('mystyle');
    element.classList.remove('mystyle');
    element.classList.remove('clo');
     burg.classList.remove('mystyle');
    burg.classList.remove('clo');
    
}
document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  const headerWrapper = document.querySelector(".content_burg");
var burg = document.getElementById('burg');
  if (scrollTop > 1200) {
    headerWrapper.classList.remove("mystyle");
      burg.classList.remove("clo");
  } else {
    headerWrapper.classList.remove("clo");
   
  }
});
