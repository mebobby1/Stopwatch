const clock = document.querySelector(".clock")

let sec=0,
    min = 0,
    hr = 0;

let IntervalID;

const Startstopwatch= ()=>{
    
    
    IntervalID = setInterval(()=>{

    if( sec < 59){
        
        sec++;

    }else if( min >= 59){

        min = 0;
        hr++;

    }else{

        sec = 0;
        min++;
    }
 
//  const timeline =  `${String(hr).padStart(2,"0")}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`
/** we can do also like that */

const hour = hr.toString().padStart(2,"0")
const minute = min.toString().padStart(2,"0")
const second = sec.toString().padStart(2,"0")


 clock.innerText = `${hour}:${minute}:${second}`;

},1000)

}

const Stopstopwatch = ()=>{

clearInterval(IntervalID);

}