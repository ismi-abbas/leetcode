import runTest from '../utils'

// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis: number): Promise<void> {
  const promise = new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, millis)
  })

  return promise
}

// faster runtime
async function sleep2(millis: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, millis))
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

sleep(5000).then(() => console.log('Done'))
sleep2(5000).then(() => console.log('Done'))

// runtime test
runTest(sleep, 'sleep', 5000)
runTest(sleep2, 'sleep2', 5000)
