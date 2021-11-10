import { getInput } from '../utils/index.js'

const inputPath = './input.txt'

try {
  const inputString = await getInput(inputPath)
  console.log(
    inputString.split('').reduce((floor, instruction) => {
      if (instruction === '(') {
        return floor + 1
      } else {
        return floor - 1
      }
    }, 0),
  )
} catch (e) {
  console.error(e)
}
