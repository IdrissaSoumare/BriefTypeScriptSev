import { Hero } from "./hero";  // import de la classe Hero du fichier index.ts
import { Weapon } from "./weapon";
import { HeroAxe } from "./heroAxe";

//la classe HeroAxe hérite des attributs de la classe Hero
export class HeroSpear extends Hero {


    constructor(name: string, power: number, life: number) {
        super(name, power, life)
        this.weapon = new Weapon("Spear",);
    }
    attack(opponent: Hero): void {
        super.attack(opponent)
        if (opponent instanceof HeroAxe) {// Si l'ennemi est une instance de la classe HeroAxe alors la puissance est multipliée par 2
            this.puis *= 2;
        }

    }

}