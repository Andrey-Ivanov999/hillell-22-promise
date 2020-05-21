const promise = new Promise((resolve, reject) => {
    // resolve(); // call first callback in then()
    console.log(0);
    reject(); // call second callback in then()
});

promise
    .then(() => {
        // console.log('1 then --- > PROMSE __ RESOLVED');

        console.log(1);
        console.log(3);
        return Promise.resolve(6);
    }, () => {
        console.log(2)
        return Promise.reject(3);
    })

    .then((users) => {
            console.log(' then --- > PROMSE __ RESOLVED', users);

            return Promise.resolve(8);
        },
        (value) => {
            console.log(' then --- > PROMSE __ REJECTED', value);
            return Promise.reject(7);

        })
    .then((users) => {
            console.log(' then --- > PROMSE __ RESOLVED', users);
            console.log(9)
            return Promise.resolve(12);
        },
        (value) => {

            console.log(6);
            console.log(' then --- > PROMSE __ REJECTED', value);
            return Promise.reject(9);

        })
    .then((users) => {
            console.log(' then --- > PROMSE __ RESOLVED', users);

        },
        (value) => {

            console.log(' then --- > PROMSE __ REJECTED', value);
            console.log(12);
        });