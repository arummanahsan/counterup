let counterup = document.querySelectorAll(".counter")
let arr = Array.from(counterup)

arr.map((item)=>{
    let counter=0
    function count(){
        counter++;
        item.innerHTML = counter;

        if (counter == item.dataset.number) {
            clearInterval(stop);
        }
    }
    let stop = setInterval(function(){
        count();
    }, 1000/item.dataset.number)
})