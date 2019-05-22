const log = e => { console.log(e)}
// var myIterable = {};
// myIterable[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };

// console.log([...myIterable]) // [1, 2, 3]

// let arr = [0, 1, 2]
// let interrator = arr[Symbol.iterator]()
// console.log(interrator.next())
// console.log(interrator.next())
// console.log(interrator.next())


// function* f() {
//   for(var i = 0; true; i++) {
//     var reset = yield i;
//     if(reset) { i = -1; }
//   }
// }

// var g = f();

// log(g.next()) // { value: 0, done: false }
// log(g.next()) // { value: 1, done: false }
// log(g.next(true)) // { value: 0, done: false }


// function* foo(x) {
//   var y = 2 * (yield (x + 1));
//   var z = yield (y / 3);
//   return (x + y + z);
// }

// var a = foo(5);
// log(a.next()) // Object{value:6, done:false}
// log(a.next()) // Object{value:NaN, done:false}
// log(a.next()) // Object{value:NaN, done:true}

// log('-------------------------')
// var b = foo(5);
// log(b.next()) // { value:6, done:false }
// log(b.next(12)) // { value:8, done:false }
// log(b.next(13)) // { value:42, done:true }


// function* foo() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   return 6;
// }

// for (let v of foo()) {
//   console.log(v);
// }

// function* fibonacci() {
//   let [prev, curr] = [0, 1];
//   for (;;) {
//     yield curr;
//     [prev, curr] = [curr, prev + curr];
//   }
// }

// for (let n of fibonacci()) {
//   if (n > 1000) break;
//   console.log(n);
// }


// function* objectEntries(obj) {
//   let propKeys = Reflect.ownKeys(obj);

//   for (let propKey of propKeys) {
//     yield [propKey, obj[propKey]];
//   }
// }

// let jane = { first: 'Jane', last: 'Doe' };

// for (let [key, value] of objectEntries(jane)) {
//   console.log(`${key}: ${value}`);
// }
// first: Jane
// last: Doe


// function* objectEntries() {
//   let propKeys = Object.keys(this);

//   for (let propKey of propKeys) {
//     yield [propKey, this[propKey]];
//   }
// }

// let jane = { first: 'Jane', last: 'Doe' };

// jane[Symbol.iterator] = objectEntries;

// for (let [key, value] of jane) {
//   console.log(`${key}: ${value}`);
// }
// // first: Jane
// // last: Doe

// function* numbers () {
//   yield 1
//   yield 2
//   return 3
//   yield 4
// }

// // 扩展运算符
// [...numbers()] // [1, 2]

// // Array.from 方法
// Array.from(numbers()) // [1, 2]

// // 解构赋值
// let [x, y] = numbers();
// x // 1
// y // 2

// // for...of 循环
// for (let n of numbers()) {
//   console.log(n)
// }
// // 1
// // 2


// var g = function* () {
//   try {
//     yield;
//   } catch (e) {
//     console.log('内部捕获', e);
//   }
// };

// var i = g();
// i.next();

// try {
//   i.throw('a');
//   i.throw('b');
// } catch (e) {
//   console.log('外部捕获', e);
// }
// 内部捕获 a
// 外部捕获 b


// var g = function* () {
//   try {
//     yield;
//   } catch (e) {
//     console.log(e);
//   }
// };

// var i = g();
// i.next();
// i.throw(new Error('出错了！'));


// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// var g = gen();

// log(g.next())        // { value: 1, done: false }
// log(g.return('foo')) // { value: "foo", done: true }
// log(g.next())        // { value: undefined, done: true }

// function* bar() {
//   yield 'x';
//   yield* foo();
//   yield 'y';
// }

// // 等同于
// function* bar() {
//   yield 'x';
//   yield 'a';
//   yield 'b';
//   yield 'y';
// }

// for (let v of bar()){
//   console.log(v);
// }
// // "x"
// // "a"
// // "b"
// // "y"


// function* inner() {
//   yield 'hello!';
// }

// function* outer1() {
//   yield 'open';
//   yield inner();
//   yield 'close';
// }

// var gen = outer1()
// log(gen.next().value) // "open"
// log(gen.next().value) // 返回一个遍历器对象
// log(gen.next().value) // "close"

// function* outer2() {
//   yield 'open'
//   yield* inner()
//   yield 'close'
// }

// var gen = outer2()
// log(gen.next().value) // "open"
// log(gen.next().value) // "hello!"
// log(gen.next().value) // "close"


// var ticking = true;
// var clock = function() {
//   if (ticking)
//     console.log('Tick!');
//   else
//     console.log('Tock!');
//   ticking = !ticking;
// }

// var clock = function* () {
//   while (true) {
//     console.log('Tick!');
//     yield;
//     console.log('Tock!');
//     yield;
//   }
// };

// import fetch from 'node-fetch'

// function* gen(){
//   var url = 'https://api.github.com/users/github'
//   var result = yield fetch(url)
//   console.log(result.bio)
// }

// var g = gen()
// var result = g.next()

// result.value
// .then(data => data.json())
// .then(data => g.next(data))