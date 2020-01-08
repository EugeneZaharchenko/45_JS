interface Boiler {
    volume?: number;
    power?: any;
    trademark: string;

    setVolume: (quantity: number) => void;
    getVolume: (quantity: number) => number;
}

class Teapot implements Boiler{

    constructor(
        public volume: number=3000,
        public power: any,
        public trademark: string
        ) {
        console.log("Here comes some tea")
    }
    public setVolume(quant: number) {
        if (quant < this.volume) {
            this.volume = quant;
        }
        else {
            throw new Error("Max water limit is exceeded")
        }
    };

    public getVolume(quant: number) {
        if (quant < this.volume) {
            this.volume -= quant;
            return quant;
        }
        else {
            throw new Error("You try to pour more than is present")
        }
    };

    public getCurrentVolume() {
        return this.volume;
    };
}

class IMTTeapot extends Teapot {
    volume: number;
    trademark: string;
    power: any;
}

let ahmad = new Teapot(3500, "750 W", "Tefal");
ahmad.setVolume(2700);
ahmad.getVolume(2400);

console.log(ahmad.getCurrentVolume());

let batic = new IMTTeapot(3000, 1250, "Kettle");
batic.setVolume(2000);
batic.getVolume(2400);

console.log(batic.getCurrentVolume());