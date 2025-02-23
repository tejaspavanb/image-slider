const arrays = document.querySelectorAll(".innercontainer img")
let index=0;
function initialize(){
    
    arrays[index].classList.add('active');
    setInterval(() => {
        plusIndex(1);
    }, 5000);
   
}
function showIndex(index){
    arrays.forEach((array)=>{
        array.classList.remove('active');
    })
    arrays[index].classList.add('active');

}
function plusIndex(n){
    index=index+(n);
    if(index>=arrays.length){
        index=0;
    }
    else if(index<0){
        index=0;
    }
 
    showIndex(index);

}
document.addEventListener('DOMContentLoaded',initialize);
