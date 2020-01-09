interface Coffee {
    water: number;
    beans: string;
    milk?: number;

    setWater: (quant: number) => void;
    setBeans: (grade: string) => void;
    setMilk: (quant: number) => void;
}

abstract class Water {
    protected constructor (public quant: number) {
    }

    public getWater(): number {
        return this.quant
    }
}

abstract class Beans {
    protected constructor (public grade: string) {
    }

    public getBeans(): string {
        return this.grade
    }
}

abstract class Milk {
    protected constructor (public quant: number) {
    }

    public getMilk(): number {
        return this.quant
    }
}

class CoffeeMachine implements Coffee{

    constructor(
        public beans: string="ZiLvova",
        public milk?: number,
        public water: number=30
    ) {
        console.log("Coffee is preparing")
    }

    public setBeans (grade: string) {
        if(grade.length !== 0) {
            this.beans = grade
        }
        else {
            console.log("You'd better try our coffee")
        }
    };

    public setMilk (quant: number) {
        if(quant > 0) {
            this.milk = quant
        }
        else {
            console.log("Add milk")
        }
    };

    public setWater (quant: number) {
        if(quant > 0) {
            this.water = quant
        }
        else {
            console.log("Water needed")
        }
    };

    public getAmericano(milk= 0) {
        if(this.water > 0) {
            return (this.water *2 + this.beans + milk)
        }
        else {
            alert("Low water");
            this.setWater(100);
        }
    }

    public getEspresso() {
        if(this.water > 0) {
            return (this.water + this.beans)
        }
        else {
            alert("Low water");
            this.setWater(100);
        }
    }

    public getLatte() {
        if(this.water > 0) {
            return (this.water *1.5 + this.beans + this.milk)
        }
        else {
            alert("Low water");
            this.setWater(100);
        }
    }

}
