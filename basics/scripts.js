// function Player(nickname){
//     this.nickname = nickname
//     this.playedMatch = 0
// }
// Player.prototype.play = function(){
//     this.playedMatch++;
//     console.log(this.nickname, this.playedMatch)
// }

// Player.prototype.getTierLevel = function(){
//     if(this.playedMatch <= 3){
//         return 'a'
//     }
//     else if(this.playedMatch <3 && this.playedMatch <= 5){
//         return 'b'
//     }
//     else{
//         return 'c'
//     }
// }


class Player {
    constructor(nickname) {
        this.nickname = nickname
        this.playedMatch = 0
    }

    play() {
        this.playedMatch++;
        console.log(this.nickname, this.playedMatch)
    }
    getTierLevel() {
        if (this.playedMatch <= 3) {
            return 'a'
        }
        else if (this.playedMatch <= 5) {
            return 'b'
        }
        else {
            return 'c'
        }
    }
}

function printTierLevel(player){
    console.log(player.nickname,player.getTierLevel())
    
}

const gomszab = new Player("gomszab")

console.log(gomszab)
gomszab.play()
console.log(gomszab.getTierLevel())


gomszab.play()
printTierLevel(gomszab)
gomszab.play()
printTierLevel(gomszab)
gomszab.play()
gomszab.play()
printTierLevel(gomszab)
/*
function Person(name){
    this.name = "Géza"
}

Person.prototype.getName = function(){
    return this.name
}

function Student(name,school){
    Person.call(this,name)
    this.school = school
}

Object.setPrototypeOf(Student.prototype, Person.prototype)
*/


class Person{
    constructor(name){
        this.name = name

    }

    getName(){
        return this.name
    }


}

class Student extends Person {
    constructor(name,school){
        super(name)
        this.school = school
    }
}

const student = new Student("Körte","Almak iskolaja")
console.log(student.getName)
console.log(student.school)



class Animal{
    constructor(name){
        this.name = name

    }

    Hangkiadas(){
        console.log(`${this.name}-nak/nek csodás hangja van`)
    }
}

class Bird extends Animal{
    repülés(){
        console.log(`${this.name} tud repülni.`)
    }
}

class Mammal extends Animal{
    sétálás(){
        console.log(`${this.name} tud sétafikálni`)
    }
}


const denever = new Bird("denevér")
denever.Hangkiadas()
denever.repülés()

const kutya = new Mammal("Kutya")
kutya.Hangkiadas()  
kutya.sétálás()