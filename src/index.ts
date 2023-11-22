import { HeroSword } from "./heroSword";
import { Hero } from "./hero";


const vegeta = new Hero("vegeta", 10, 50);   //instanciation des 2 objets, soit : vegeta et sangoku
const sangoku = new Hero("sangoku", 10, 50);


const attaque = vegeta.attack(sangoku)
const attaque2 = sangoku.attack(vegeta)

while (sangoku.isAlive() && vegeta.isAlive()) {
    vegeta.attack(sangoku)
    sangoku.attack(vegeta)
    if (!sangoku.isAlive() && vegeta.isAlive()) {
        console.log("vegeta is the winner");
    } else if (sangoku.isAlive() && !vegeta.isAlive()) {
        console.log("sangoku is the winner");

    } else if (!sangoku.isAlive() && !vegeta.isAlive()) {
        console.log("It's a draw");

    }
}
























/*const cell = new HeroSword("kame", 100, 100);
const sangohan = new HeroSword("Haricots", 100, -10);
cell.attack(sangohan);
console.log(sangohan.isAlive());*/


sangoku.attack(vegeta);   // sangoku attaque vegeta*/


//console.log(vegeta.isAlive());
///////////////////////////////

