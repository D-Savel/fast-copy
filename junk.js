const asyncTask = (id, timeout, willFulFilled) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willFulFilled === true) {
        // ce console.log simule un side effect
        console.log(`Log: task${id} done after ${timeout} seconds`)
        // la valeur de retour est contenu dans le resolve
        resolve(`result from task${id}`)
      } else {
        reject(new Error(`faillure from task${id}`))
      }
    }, timeout * 1000)
  })
}

const main = async () => {
  try {
    const results = await Promise.all([
      asyncTask(1, 2, true),
      asyncTask(2, 0.5, true),
      asyncTask(3, 1, true)
    ])
    for (const result of results) {
      console.log(result)
    }
    const res4 = await asyncTask(4, 1, true)
    console.log(res4)
  } catch (e) {
    console.error(e.message)
  }
}

main()