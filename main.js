document.getElementById("select_color").addEventListener("input", showColor);

const eleShowColor = document.getElementById("show_color");
const name_text= document.getElementById("name");
const text = document.getElementById("text");
const hanko = document.getElementById("hanko")

function showColor(){

    
    let color = document.getElementById("select_color").value;
   
    name_text.style.color = color;
    eleShowColor.style.color = color;
    
}
text.addEventListener("input", function(){
    name_text.textContent = this.value;
});

text.addEventListener("keyup",(e) => {
    if (e.target.value.length > 2) {
        name_text.style.fontSize = "50px"
        name_text.style.marginLeft="10px"
    }else{
        name_text.style.fontSize ="60px";
        name_text.style.marginLeft="0px"
    }
})
