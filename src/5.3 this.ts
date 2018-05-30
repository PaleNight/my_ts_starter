{
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            return function () {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    };

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();

    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
}
{
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    };

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();

    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
}

/**
 * ts中 提供一个显式的 this参数。 this参数是个假的参数，它出现在参数列表的最前面
 * */
{
    function f(this: void) {
        // make sure `this` is unusable in this standalone function
    }

    interface Card {
        suit: string;
        card: number;
    }

    interface Deck {
        suits: string[];
        cards: number[];

        createCardPicker(this: Deck): () => Card;
    }

    let deck: Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        // NOTE: The function now explicitly specifies that its callee must be of type Deck
        createCardPicker: function (this: Deck) {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    };

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();

    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

}
/** this 在回调参数里 */
{
    interface UIElement {
        /**
         * 函数类型接口
         * 需要传入一个onclick函数 类型为(this: void, e: Event) => void
         * 其中 this 为 void
         * */
        addClickListener(onclick: (this: void, e: Event) => void): void;
    }

    class Handler {
        info: string;

        onClickGood(this: void, e: Event) {
            // can't use this here because it's of type void!
            console.log('clicked!');
        }
    }

    let h = new Handler();

    class UIElementClass implements UIElement {
        addClickListener(a){
            return 1
        }

    }

    new UIElementClass().addClickListener(h.onClickGood);
}