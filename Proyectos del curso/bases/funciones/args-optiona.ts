export const fullName = (firsName:string, lastName?:string): string =>{

return `${firsName} ${lastName || "no last name"}`;
}

export const fullNameResult = fullName("Bruce");

console.log({fullNameResult})

