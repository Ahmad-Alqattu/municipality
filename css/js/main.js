let hello=document.getElementById('toggele')

hello.onclick=()=>{

  hello.classList.toggle("active")
}

let btn=document.getElementById('btn');

window.onscroll=()=>{
if(scrollY >= 850){
btn.style.display="block"
}else{
  btn.style.display="none"

}

}
btn.onclick=()=>{
  window.scrollTo(0,0)
}