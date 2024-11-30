"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = getRandomInt;
/**
 * Get a random number between 1 and 1,000,000,000,000
 * @returns {number}
 */
function getRandomInt() {
    return Math.floor(Math.random() * 1_000_000_000_000);
}
