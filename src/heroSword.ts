
// ci-dessous, les différents imports de classe permettant leur utilisation.
import { Hero } from "./hero";
import { Weapon } from "./weapon";
import { HeroSpear } from "./heroSpear";



//la classe HeroAxe hérite des attributs de la classe Hero par le mot clé 'extends'
//cette classe se rend également disponible aux autres classes par le mot clé 'export'
export class HeroSword extends Hero {

    constructor(name: string, power: number, life: number) {// appel du constructeur de la classe mère Hero avec ses 3 paramètres
        super(name, power, life); // on utilise le mot clé 'super' pour acceder à la classe mère Hero
        this.weapon = new Weapon("Sword");
    }


    attack(opponent: Hero): void { // méthode attack de la clase mère Hero
        super.attack(opponent)// on utilise 'super' pour pouvoir utiliser cette méthode de la classe mère

        if (opponent instanceof HeroSpear) {// Si l'ennemi est une instance de la classe HeroAxe alors la puissance est multipliée par 2

            this.puis *= 2;
        }
    }


}





