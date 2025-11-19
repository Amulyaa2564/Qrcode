let inputText=document.getElementById('inputText');
let errorMsg=document.getElementById('errorMsg');
let submitBtn=document.getElementById('submitBtn');
let qrDiv=document.getElementById('qrDiv');
let qrImage=document.getElementById('qrImage');

function addQr(){
    if(inputText.value.trim()===""){
        errorMsg.textContent="Please enter text or URL";
    }else{
        errorMsg.textContent="";
        qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= "+inputText.value;
        inputText.value="";
    }
}

inputText.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        addQr();
    }
});

submitBtn.onclick=addQr;
