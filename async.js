//!ASYNC JS

//?Q Write a function which takes a callback
/**
 * *function strLength() which takes
 * ?Your name
 * ?A function which it will call with the length of your name
 */

const printNameLength = (name, nameLength) => {
  console.log(`The lenght of ${name} is ${nameLength}`);
};

const strLength = (name, cb) => cb(name, name.length);

// strLength("znjs", printNameLength);

//?Q Write a function with 2 callbacks
/**
 * *funciton willThanosKillMe()
 * ?your name
 * ?function to call if thanos doesnt kill you
 * ?function to call if thanos kills you
 */

const thanosKillsyou = (name) =>
  console.log(`Thanos is going to kill you ${name}`);

const thanosNotKillsyou = (name) =>
  console.log(`You are safe thanos is not going to kill you ${name}`);

const willThanosKillMe = (name, cb1, cb2) =>
  name.length % 2 ? cb1(name) : cb2(name);
// willThanosKillMe("znjs", thanosKillsyou, thanosNotKillsyou);

//?Q use setTimeout()
/**
 * *Write a function that takes a message and a delay and prints that message after a delay
 */

const printAfterDelay = (msg, delay) =>
  setTimeout(() => console.log(msg), delay * 1000);

// printAfterDelay("znjs", 2);

//!setTimer returns a timer id which can be used later to stop or kill timer

//!HW: setInterval

//?Q
/**
 * *Learn how setInterval works?
 * *write a function that takes a number, Then print a countdown from that number to 0. at zero print("Time out")
 */
//!setInterval
/**
 * *The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. ~MDN
 * *The method returns a unique ID which can be used later to remove the timer using clearInterval()
 */
const timer = (num) => {
  let timerId = setInterval(() => {
    console.log(num);
    num--;
    if (num === 0) {
      console.log("Time out");
      clearInterval(timerId);
    }
  }, 1000);
};
// timer(10);

//? CC: Aman Dubey, Taran Singh, Srikar

const timeBomb = (delay) => {
  let id = setInterval(() => {
    console.log(delay--);
    if (!(delay + 1)) clearInterval(id) || console.log("bang bang");
  }, 1000);
};

// timeBomb(4);

//!Promises
//?Why use promises, why prefer them over callbacks
/**
 * *eliminates pyramid of doom
 * *easy to debug
 * *They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events
 */
/**
 * ?States:
 * *pending
 * *fulfill
 * *reject
 */

function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`);
      }
      resolve(`from server: ${msg}`);
    }, 3000);
  });
}

// console.log(fakeFetch("znjs"));
// console.log(fakeFetch("znjs", true));

// fakeFetch("znjs").then((data) => console.log(data))
// fakeFetch("znjs", true).then((data) =>
//   console.log(data).catch((err) => console.error(err))
// );

//?Q Create a function getServerResponseLength(msg) this function will use fakeFetch() internally with the message and return the length of the response by server

const getServerResponseLength = (msg) =>
  fakeFetch(msg).then((data) => data.length);

// console.log(getServerResponseLength("znjs"));
//!What ever we return from .then() will also be promise

//?Q write a function syncCallsToServer(msg1,msg2) which will take two messages and call fakeFetch() with the second message only when the first message has returned from the server

const syncCallsToServer = (msg1, msg2) =>
  fakeFetch(msg1).then((res1) => fakeFetch(msg2).then((res2) => (res1, res2)));

// console.log(syncCallsToServer("znjs", "znck"));

const parallelCalls = (msg1, msg2) => {
  fakeFetch(msg1).then((res) => console.log(res));
  fakeFetch(msg2).then((res) => console.log(res));
};
// parallelCalls("znjs", "znck");

//!ASYNC-AWAIT

//?Use async await as much as possible and always use try catch block

/**
 * *Use async keyword before the async function
 * *use await where ever there is wait for response to return
 */

const printDataFromServer = async (msg) => {
  try {
    let data = await fakeFetch(msg);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

// printDataFromServer("znjs");

const chainingAsyncAwait = async (msg1, msg2) => {
  try {
    let res1 = await fakeFetch(msg1);
    let res2 = await fakeFetch(msg2);
    console.log(res1, res2);
  } catch (err) {
    console.error(err);
  }
};

// chainingAsyncAwait("znjs", "znck");

const parallelCallsAsyncAwait = async (msg1, msg2) => {
  try {
    const [res1, res2] = await Promise.all([fakeFetch(msg1), fakeFetch(msg2)]);
    console.log(res1, res2);
  } catch (err) {
    console.error(err);
  }
};

// parallelCallsAsyncAwait("znjs", "znck");

/*
!IN THE LOOP JAKE ARCHIBALD
*/

/**
 * ?THE EVENT LOOP
 * *Webpages have something called main thread where DOM lives
 * *Use requestAnimationFrame() instead of tasks
 * *The browser decides the number of times the rAF() need to be called for efficiency
 * *tasks cant be avoided in event listeners, but using rAF() for timers, data from network saves a lot of duplicate work
 * *requestAnimationFrames comes before processing CSS and painting
 * ?MICROTASK
 * *
 */
