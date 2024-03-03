/**
 * Guessing game
 *
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-02-20
 */

import { createPrompt } from 'bun-promptx'

function boardFootCalculation (width, height) {

  // borad foot = 12" x 12" x 1" = 144"
  const boardFoot = 144

  const length = 144 / width / height

  return length
}

const widthString = createPrompt("Enter the width of the object (kg): ")
const heightString = createPrompt("Enter the height of the object (kg): ")

// input
const width = parseFloat(widthString.value || "-1")
const height = parseFloat(heightString.value || "-1")
if (isNaN(width) == true || isNaN(height) == true || width <= 0 || height <= 0) {
  console.log("Invalid input.")
} else {
  const length = boardFootCalculation (width, height)
  console.log(`The wood should be ${length}" long.`)
}


//output 
console.log("\nDone.")
