let inputText=document.getElementById('inputText');
let errorMsg=document.getElementById('errorMsg');
let submitBtn=document.getElementById('submitBtn');

submitBtn.onclick=function(){
    if(inputText.value.trim()===""){
        errorMsg.textContent="Please enter text or URL"
    }else{
        errorMsg.textContent="";
    }
}