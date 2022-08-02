export const productsArrState = [
    {
        id: 1,
        name: 'Product 1',
        price: '10$',
        amount: 1,
    },
    {
        id: 2,
        name: 'Product 2',
        price: '20$',
        amount: 2,
    },
    {
        id: 3,
        name: 'Product 3',
        price: '30$',
        amount: 3,
    }
]

export const changeAmount = (arr) => {
    console.log('button clicked');
    for (const item of arr) {
        item.amount++;
    }
    return arr;
}