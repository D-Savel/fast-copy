const axios = require('axios')

const getHtmlSize = async (url) => {
  try {
    const response = await axios.get(url)
    return response.headers['content-length']
  } catch (e) {
    throw e
  }
}

const main = async () => {
  const url1 = 'https://en.wikipedia.org/kiki/water_on_mars' // BAD URL
  const url2 = 'https://en.wikipedia.org/wiki/Old_Red_Cracker'

  const p1 = getHtmlSize(url1)
  const p2 = getHtmlSize(url2)

  const [result1, result2] = await Promise.allSettled([p1, p2])

  if (result1.status === 'fulfilled') {
    console.log(`size of page ${url1}: ${result1.value / 1000}KB`)
  } else {
    console.error(`${url1}: ${result1.reason}`)
  }
  if (result2.status === 'fulfilled') {
    console.log(`size of page ${url2}: ${result2.value / 1000}KB`)
  } else {
    console.error(`${url2}: ${result2.reason}`)
  }
}

main()