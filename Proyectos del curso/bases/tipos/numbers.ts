(() => {
    let avengers: number = 5;
    console.log({ avengers });

    const villians: number = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    } else {
        console.log('Nos salvamos');
    }
})()