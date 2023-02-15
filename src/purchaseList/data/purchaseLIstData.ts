export interface PurchaseListItemModel {
    name: string,
    added: Date;
    purchased: boolean,
    type: 'private' | 'home',
    quantity: number,
    unit: string,
    description: string
}

export const purchaseList = [
    {
        name: ' mleko',
        added: '03/02/2023',
        purchased: false,
        type: 'private',
        quantity: 2,
        unit: 'kartony',
        description: ' pól litrowe, 3%'
    },
    {
        name: ' jajka',
        added: '03/02/2023',
        purchased: false,
        type: 'private',
        quantity: 2,
        unit: 'szt',
        description: 'bio'
    },
    {
        name: ' papier toaletowy',
        added: '03/02/2023',
        purchased: false,
        type: 'private',
        quantity: 2,
        unit: 'op zboircze',
        description: ' '
    },
    {
        name: ' bułki',
        added: '03/02/2023',
        purchased: false,
        type: 'private',
        quantity: 4,
        unit: 'szt',
        description: ' kajzerki'
    },
]