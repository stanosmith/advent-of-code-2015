import { getInput } from '../utils/index.js'

const inputPath = './input.txt'

try {
  const inputString = await getInput(inputPath)
  console.log(
    inputString.split('').reduce((floor, instruction, index) => {
      let newFloor = instruction === '(' ? floor + 1 : floor - 1
      if (newFloor === -1) {
        console.log({ newFloor, characterPosition: index + 1 })
      }
      return newFloor
    }, 0),
  )
} catch (e) {
  console.error(e)
}
