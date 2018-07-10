/**
 *
 * 推断为 对象的时候 要放在靠下的位置
 * */
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x): any {
    // Otherwise just let them pick the card
    if (typeof x === "number") {
        let pickedSuit = Math.floor(x / 13);
        return {suit: suits[pickedSuit], card: x % 13};
    }
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x === "object") { // 推断为对象
        if (Array.isArray(x)) { // 推断为数组

            return Math.floor(Math.random() * x.length);
        }

    }
}

let myDeck = [{suit: "diamonds", card: 2}, {suit: "spades", card: 10}, {suit: "hearts", card: 4}];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);