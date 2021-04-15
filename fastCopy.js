const fsPromises = require('fs/promises')

const filesList = async (directoryPath) => {
  try {
    return fsPromises.readdir(directoryPath)
  } catch (e) {
    throw (e)
  }
}

const copyFile = async (directoryPath, copyDirectoryPath) => {
  try {
    return fsPromises.copyFile(directoryPath, copyDirectoryPath)
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
