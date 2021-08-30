
String.prototype.palindrome = function (){
    return this.valueOf() === this.split("").reverse().join("")
}

const words = ["Lorem", "wow", "ipsum", "dolor", "kayak", "sit", "lol", "amet", "adipisicing"]
for (let word of words){
    if (word.palindrome()){
        console.log(`'${word}' is a palindrome`)
    }   else {
        console.log(`'${word}' is NOT a palindrome`)
    }
}





















4