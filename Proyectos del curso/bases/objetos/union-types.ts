export type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
    }

    let myCustomVariable: string | number | Hero = "francisco"
 
    console.log(typeof myCustomVariable);
    myCustomVariable = 10;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Francisco",
        age: 30,
        powers: ["programming", "teaching"],
       
    };