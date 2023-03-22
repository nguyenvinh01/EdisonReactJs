var spacecraftName:string = 'Determination'
var speedMph:number = 17500
var kilometersToMars:number = 225000000
var kilometersToTheMoon:number = 384400
var milesPerKilometer:number = 0.621

export class spaceLocation{
    kilometersAway:number
    name:string
    constructor(kilometerAway:number, name:string){
        this.kilometersAway = kilometerAway;
        this.name = name
    }
}

let spac = new spaceLocation(225000000,'Mars')

class Spacecraft{
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
    constructor(name:string, speedMph: number){
        this.name=name
        this.speedMph = speedMph
    }
    getDaysToLocation(kilometersAway:number) :number {
        let milesAway: number = kilometersAway * milesPerKilometer;
        let hours: number = milesAway / speedMph;
        return hours / 24;
    }
    printDaysToLocation(location: spaceLocation){
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
        
    }
}

let obj = new Spacecraft(spacecraftName,speedMph)


obj.printDaysToLocation(spac);