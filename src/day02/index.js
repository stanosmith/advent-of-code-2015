import { getInput } from '../utils/index.js'

const inputPath = './input.txt'

try {
  const inputString = await getInput(inputPath)
  console.log(inputString)
} catch (e) {
  console.error(e)
}
