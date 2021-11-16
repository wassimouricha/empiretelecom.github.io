const inputs = document.querySelectorAll(".inputus");

Function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

Function blurFunc(){
    let parent = this.parentNode;
    if(this.value ==""){
        parent.classList.remove("focus"); 
    }
    
}

inputs.forEach(.inputus => {
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",focusFunc);
})