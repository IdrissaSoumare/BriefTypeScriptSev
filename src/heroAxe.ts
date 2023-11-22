import { Hero } from "./hero"; // import de la classe Hero du fichier index.ts
import { Weapon } from "./weapon";
import { HeroSword } from "./heroSword";

//la classe HeroAxe hérite des attributs de la classe Hero
export class HeroAxe extends Hero {


    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("Axe");
    }
    attack(opponent: Hero): void {
        super.attack(opponent);
        if (opponent instanceof HeroSword) {// Si l'ennemi est une instance de la classe HeroAxe alors la puissance est multipliée par 2
            this.puis *= 2;
        }

    }

}
