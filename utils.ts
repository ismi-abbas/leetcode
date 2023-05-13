export default function runTest(func: Function, funcAlias: string, data: any) {
  console.time(funcAlias)
  func(data)
  console.timeEnd(funcAlias)
}
