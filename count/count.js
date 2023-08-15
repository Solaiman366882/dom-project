document.getElementById('plus-btn').addEventListener('click',function(){
    const countDisplay = document.getElementById('count-display');
    const prevCount = parseFloat(countDisplay.innerText);
    let newCount = prevCount + 1;
    countDisplay.innerHTML = newCount;
});
document.getElementById('minus-btn').addEventListener('click',function(){
    const countDisplay = document.getElementById('count-display');
    const prevCount = parseFloat(countDisplay.innerText);
    let newCount = prevCount - 1;
    countDisplay.innerHTML = newCount;
});