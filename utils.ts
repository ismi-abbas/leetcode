export default function runTest(func: Function, data: any) {
  console.time(func.name)
  func(data)
  console.timeEnd(func.name)
}
