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

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

sleep(5000).then(() => console.log('Done'))
