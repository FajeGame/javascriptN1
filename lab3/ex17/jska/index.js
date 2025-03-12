class Clock{
    time(){
        let time = new Date()
        console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds())
    }
}

let clock = new Clock()
clock.time()