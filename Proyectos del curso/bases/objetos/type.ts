export type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
    }

export let flash: Hero  = {
    name: "Barry Allen", 
    age: 30,
    powers: ["super speed", "time travel"],
    getName: function() {
        return this.name;
   
    }
}
export let superman: Hero = {
    name: "Clark Kent", 
    age: 60,
    powers: ["super speed"],
    getName: function() {
        return this.name;
   
    }
}


if (flash.getName) {
    console.log(flash.getName());
} else {
    console.log(flash.name);
}
