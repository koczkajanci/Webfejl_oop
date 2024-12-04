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
/* 
Letrehozunk egy Player nevu osztalyt 
A konstruktoraba megadunk 2 tulajdonsagot a nevet es a lejatszott meccseinek a szamat amely alapbol 0
Ha a play metodust meghivjuk akkor a lejatszott meccseket noveljuk 1-el es kiirjuk az adatokat a consoleba
A getTierLevel metodus ad nekunk egy szintet amelybe vagyunk a lejatszott meccseink alapjan 
ha 0-ol 3ig van az ertek akkor A szintbe vagyunk ha 4 es 5 kozott akkor a B-be es a 6 es tobb lejatszott meccsek eseten a C szintbe sorol be minket a metodus
*/
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
/*
A getTierLevelnek a visszateresi erteket a printTierLevel fuggvennyel kapjuk meg.
Ehhez a player valtozora van szuksegunk bemeneti parameterkent, ami a Player konstruktornak egy peldanya
*/
function printTierLevel(player){
    console.log(player.nickname,player.getTierLevel())
    
}
//Ellenorizzuk a programunkat
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

/*Egy osztaly amelynek a konstruktorjaba a nevet adjuk
A getName metodus visszaadja a name erteket
*/

class Person{
    constructor(name){
        this.name = name

    }

    getName(){
        return this.name
    }


}
/*
A Student class a Person osztalynak a leszarmazottja ezert hasznaljuk az extends-et
A superrel tudjuk meghivni a Personnak a konstruktorat
*/
class Student extends Person {
    constructor(name,school){
        super(name)
        this.school = school
    }
}

/*
Teszteljuk a classokat illetve a getNameot
*/
const student = new Student("Korte","Almak iskolaja")
console.log(student.getName())
console.log(student.school)


/*
Az Animal osztalynak egy name tulajdonsagot adunk meg illetve egy Hangkiadas metodust amely kiirja hogy az allatnak szep hangja van
*/
class Animal{
    constructor(name){
        this.name = name

    }

    Hangkiadas(){
        console.log(`${this.name}-nak/nek csodás hangja van`)
    }
}

/*
A Bird osztaly az Animal osztaly leszarmazottja amely az Animalon kivul meg repulni is tud ha meghivjuk a metodust
*/
class Bird extends Animal{
    repules(){
        console.log(`${this.name} tud repulni.`)
    }
}
/*
A Mammal is az Animal leszarmazottja aminek van egy setalas metodusa
*/
class Mammal extends Animal{
    setalas(){
        console.log(`${this.name} tud setafikálni`)
    }
}

/*
Teszteles
*/

const denever = new Bird("denever")
denever.Hangkiadas()
denever.repules()

const kutya = new Mammal("Kutya")
kutya.Hangkiadas()  
kutya.setalas()