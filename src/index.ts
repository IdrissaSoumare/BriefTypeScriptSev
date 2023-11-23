
// import de la classe Hero
import { Hero } from "./hero";

//instanciation des 2 objets, soit : vegeta et sangoku
const vegeta = new Hero("vegeta", 10, 50);
const sangoku = new Hero("sangoku", 10, 50);



// boucle où les 2 combattants s'affrontent et le vainqueur s'affiche en fontion de sa puissance et de ses vies restantes.
while (sangoku.isAlive() && vegeta.isAlive()) {
    vegeta.attack(sangoku);
    sangoku.attack(vegeta);
    if (!sangoku.isAlive() && vegeta.isAlive()) {
        console.log("vegeta is the winner");
    } else if (sangoku.isAlive() && !vegeta.isAlive()) {
        console.log("sangoku is the winner");
    } else if (!sangoku.isAlive() && !vegeta.isAlive()) {
        console.log("It's a draw");
    }
}


