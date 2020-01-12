const Rx = rxjs;
// console.log(Rx);
const Op = rxjs.operators;

const $obs = new Rx.Observable((observer) => {
    let sum = 1;
    setInterval(() => {
        observer.next(sum++);

        if (sum > 15) {
            observer.complete()
        }
    }, 400);
// debugger
//
//     observer.error("some error");
//     observer.complete();
});

$obs.subscribe((result) => {
    debugger
    console.log(result);
});

// $obs.subscribe((result) => {
//     debugger
//     console.log(result);
// },
//     (error) => {
//     console.log(error)
//     },
//     () => {
//     console.log("Complete")
//     }
//     );
//
// $obs.subscribe((result) => {
//     console.log(result);
// })