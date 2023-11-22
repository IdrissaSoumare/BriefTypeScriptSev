import { Hero } from "./hero";   // import de la classe Hero du fichier index.ts
import { Weapon } from "./weapon";
import { HeroSpear } from "./heroSpear";



//la classe HeroAxe hérite des attributs de la classe Hero
export class HeroSword extends Hero {

    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("Sword");
    }


    attack(opponent: Hero): void {
        super.attack(opponent)

        if (opponent instanceof HeroSpear) {

            this.puis *= 2;
        }
    }


}





