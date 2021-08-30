// const sleep = (ms) => {return new Promise(resolve => {setTimeout(() => resolve(), ms)})}
//
// sleep(2000).then(() => console.log("from then 1"))
// sleep(3000).then(() => console.log("from then 2"))
//
//

const PUSH_UP_TIME = 500
const SQUAT_TIME = 200

const pushUp = (count) => {
    return new Promise((resolve, reject) => {
        if (count > 20){
            reject(new Error("слишком много отжиманий"));
        } else {
        setTimeout(() => {
            resolve()
            }, PUSH_UP_TIME * count);}
    })
}

const squatting = (count) => {
    return new Promise((resolve, reject) => {
        if (count > 20) {
            reject(new Error("слишком много приседаний"));
        } else {
        setTimeout(() => {
            resolve();
            }, SQUAT_TIME * count)}
    })
}

async function myTraining() {
    try {
        await pushUp(20);
        console.log("отжиманья завершены");

        await squatting(130)
        console.log("приседанья завершены")

        return true
    }
    catch(e) {
        console.log(e.toString())
        return false
    }
}


myTraining().then((result) => {console.log(result);})
// myTraining()