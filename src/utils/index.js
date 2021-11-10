import fs from 'fs/promises'

export const getInput = async (inputPath) => {
  const input = await fs.readFile(inputPath)
  return input.toString()
}
