//set initial count
let count = 0;

//select value and buttons

const value = document.querySelector('#value')
const btns =  document.querySelectorAll('.btn')


//looping all over the buttons
//changing the count value by selecting buttons by class

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('dicrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if (count>0){
            value.style.color = "green"
        }
        else if (count<0){
            value.style.color = "red"
        }
        else{
            value.style.color = "rgb(118, 88, 252)"
        }
        value.textContent = count;
    })
})
