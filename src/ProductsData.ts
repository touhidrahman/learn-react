export interface IProduct {
    id: number
    name: string
    description: string
    price: number
}

export const Products: IProduct[] = [
    {
        id: 1,
        name: 'A',
        description: 'Aaa',
        price: 1.11,
    },
    {
        id: 2,
        name: 'B',
        description: 'Bbb',
        price: 2.11,
    },
    {
        id: 3,
        name: 'C',
        description: 'Ccc',
        price: 3.32,
    },
    {
        id: 4,
        name: 'D',
        description: 'Ddd',
        price: 11,
    },
]
