export function* test1() {
  yield Object.defineProperty(foo(1, 2, 3), Symbol.for("@@redux-saga/LOCATION"), {
    value: {
      fileName: "test/fixtures/declaration-es6-modules/source.js",
      lineNumber: 2,
      code: "foo(1, 2, 3)"
    }
  });
}

Object.defineProperty(test1, Symbol.for("@@redux-saga/LOCATION"), {
  value: {
    fileName: "test/fixtures/declaration-es6-modules/source.js",
    lineNumber: 1,
    code: null
  }
})
export default function* test2() {
  yield 2;
}
Object.defineProperty(test2, Symbol.for("@@redux-saga/LOCATION"), {
  value: {
    fileName: "test/fixtures/declaration-es6-modules/source.js",
    lineNumber: 5,
    code: null
  }
})