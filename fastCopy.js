const fsPromises = require('fs/promises')
const path = require('path')


const filesList = async (directoryPath) => {
  try {
    return await fsPromises.readdir(directoryPath)
  } catch (e) {
    throw (e)
  }
}

const copyFile = async (directoryPath, copyDirectoryPath) => {
  try {
    const response = await fsPromises.copyFile(directoryPath, copyDirectoryPath)
    return response
  } catch (e) {
    throw (e)
  }
}


const main = async () => {
  let promisesArray = []
  try {


    for (file of await filesList("./directory")) {
      let filePath = "./directory" + '/' + file
      let filePathCopy = './fastCopyDirectory' + '/' + file
      promisesArray.push(copyFile(filePath, filePathCopy))
    }
    await Promise.all(promisesArray)
  } catch (e) {
    console.error(e.message)
  }
}

main()
