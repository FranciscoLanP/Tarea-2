interface Hero {
    name: string;
    age: number;
    powers: string[];
    }

let flash: {name: string, age?:number, powers:string[], getName: () => string}  = {
    name: "Barry Allen", 
    age: 30,
    powers: ["super speed", "time travel"],
    getName: function() {
        return this.name;
   
    }
}
let superman: {name: string, age?:number, powers:string[], getName: () => string}  = {
    name: "Clark Kent", 
    age: 60,
    powers: ["super speed"],
    getName: function() {
        return this.name;
   
    }
}


console.log(flash.getName());
