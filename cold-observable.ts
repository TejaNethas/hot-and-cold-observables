import * as Rx from "rxjs";

const observable = Rx.Observable.create((observer) => {
    observer.next(Math.random()); //data producer inside of observable
});

// subscription 1
observable.subscribe((data) => {
  console.log(data); // 0.24957144215097515 (random number)
});

// subscription 2
observable.subscribe((data) => {
   console.log(data); // 0.004617340049055896 (random number)
});
