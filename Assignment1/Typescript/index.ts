/**
 * This program plays rock paper scissors
 *
 * By: Johanna Liu
 * Version: 1.0
 * Since: 2024/03/06
 */

import { createSelection } from 'bun-promptx';

const options = ['Rock', 'Paper', 'Scissors'];

const userInput = createSelection(
    [
        { text: 'Rock' },
        { text: 'Paper' },
        { text: 'Scissors' }
    ],
    {
        headerText: 'Choose rock, paper, or scissors: ',
        perPage: 3,
    }
);

console.log(`Selected: ${options[userInput.selectedIndex]}`);

const randomNumber: number = Math.floor(Math.random() * options.length);

console.log(`Computer selected: ${options[randomNumber]}`);

if (userInput.selectedIndex === randomNumber) {
    console.log("Draw!");
} else if (
    (userInput.selectedIndex === 0 && randomNumber === 2) ||
    (userInput.selectedIndex === 1 && randomNumber === 0) ||
    (userInput.selectedIndex === 2 && randomNumber === 1)
) {
    console.log("You win!");
} else {
    console.log("You lose!");
}

console.log("\nDone.");