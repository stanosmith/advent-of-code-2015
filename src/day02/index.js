import { getInput } from '../utils/index.js'

// const inputPath = './input.txt'
const inputPath = './test-input.txt'

try {
  const inputString = await getInput(inputPath)
  const inputArray = inputString.split('\n').filter((value) => value !== '')

  // Total square footage of wrapping paper
  console.log(
    inputArray
      .map((box) => {
        return getWrappingPaperTotals(...box.split('x'))
      })
      .reduce((totalSquareFeet, present) => {
        return totalSquareFeet + present.total
      }, 0),
  )

  // Total feet of ribbon to order
  console.log(
    inputArray.map((box) => {
      return getRibbonTotals(...box.split('x'))
    }),
  )
} catch (e) {
  console.error(e)
}

function getWrappingPaperTotals(length, width, height) {
  const sortedSquareFeet = [
    length * width,
    width * height,
    height * length,
  ].sort(function (a, b) {
    return a - b
  })
  const smallestSide = sortedSquareFeet[0]
  const squareFeetWrappingPaper = sortedSquareFeet.reduce((sum, squareFeet) => {
    // 2*l*w + 2*w*h + 2*h*l
    return sum + 2 * squareFeet
  }, 0)

  return {
    sortedSquareFeet,
    smallestSide,
    squareFeetWrappingPaper,
    total: squareFeetWrappingPaper + smallestSide,
  }
}

function getRibbonTotals(length, width, height) {}
