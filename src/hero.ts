import { Weapon } from "./weapon";
import { HeroSword } from "./heroSword";
export class Hero {
    private name: string;     //déclaration de classe avec 3 attributs
    private power: number;    //declaration avec private qui implique que ces infos ne sont accessibles que dans cette classe
    private life: number;
    protected weapon: Weapon | undefined;


    // constructeur de la classe Hero
    constructor(name: string, power: number, life: number) {
        this.name = name;
        this.power = power;
        this.life = life;


    }
    // 1ere methode, attaque : si l'ennemi est en vie, on lui enlève de la puissance
    attack(opponent: Hero): void {

        opponent.life -= this.power;
    }
    // 2eme methode, est en vie : pour verifier si le combattant est tjrs en vie
    isAlive() {
        if (this.life > 0) {
            return true;
        } else {
            return false;
        }
    }
    get puis(): number {
        return this.power;
    }
    set puis(pow: number) {
        this.power = pow;
    }
    ///////////
    get Power(): number {
        return this.power;
    }
    set Power(pow: number) {
        this.power = pow;
    }
    ///////////
    get puissance(): number {
        return this.power;
    }
    set puisance(pow: number) {
        this.power = pow;
    }


}
