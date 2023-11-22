import { Weapon } from "./weapon";
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
    // 1ere methode 'attaque' : si l'ennemi est en vie, on lui enlève de la puissance
    attack(opponent: Hero): void {

        opponent.life -= this.power;
    }
    // 2eme methode 'est en vie' : pour verifier si le combattant est tjrs en vie
    isAlive() {
        if (this.life > 0) {
            return true;
        } else {
            return false;
        }
    }

    // les 3 méthodes getter/setter permettant aux différentes classes d'accéder aux attributs privés de la classe Hero
    get puis(): number {
        return this.power;
    }
    set puis(pow: number) {
        this.power = pow;
    }
    ///////////
    get appelation(): string {
        return this.name;
    }
    set appelation(ape: string) {
        this.name = ape;
    }
    ///////////
    get restant(): number {
        return this.power;
    }
    set restant(res: number) {
        this.life = res;
    }
}
