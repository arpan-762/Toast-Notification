let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

function showToast(e){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = e;
    toastBox.appendChild(toast); 
    
    if(e.includes('Error')){
        toast.classList.add('error');
    }
    if(e.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
      toast.remove();
    },5000);
}