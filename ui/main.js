console.log('Loaded!');

//Change the text of main-text division
var element= document.getElementById('main-text');
element.innerHTML = "New Value";


//move image 
var img= document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '100px';
};
