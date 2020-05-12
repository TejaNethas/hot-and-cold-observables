import * as Rx from "rxjs";

const random = Math.random()

const observable = Rx.Observable.create((observer) => {
    observer.next(random);
});

// subscription 1
observable.subscribe((data) => {
  console.log(data); // 0.11208711666917925 (random number)
});

// subscription 2
observable.subscribe((data) => {
   console.log(data); // 0.11208711666917925 (random number)
});
