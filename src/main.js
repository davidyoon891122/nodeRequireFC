// @ts-check
// 1. 파일 간에 참조 방조 방법
// 2. nodeJS에서 제공하는 스탠다드 라이브러리
// 3. 컨벤션
// 4. 데이터 구조
// 5. 내장 객체
// console.log(module.require('./animals'))
const animals = require('./animals')
const { paths } = module
const dogs = require('dogs')

console.log(paths)
console.log(dogs)
console.log(animals)
