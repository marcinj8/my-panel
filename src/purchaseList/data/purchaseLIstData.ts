export interface PurchaseListItemModel {
  id: string;
  name: string;
  added: Date;
  purchased: boolean;
  listName: string;
  type: 'private' | 'home';
  quantity: number;
  unit: string;
  description: string;
}

export const purchaseList = [
  {
    id: 'mleko123',
    name: ' mleko',
    added: new Date(),
    purchased: false,
    type: 'private',
    quantity: 2,
    unit: 'kartony',
    description: ' pól litrowe, 3%',
  },
  {
    id: 'jajka123',
    name: ' jajka',
    added: new Date(),
    purchased: true,
    type: 'home',
    quantity: 2,
    unit: 'szt',
    description: 'bio',
  },
  {
    id: 'papier123',
    name: ' papier toaletowy',
    added: new Date(),
    purchased: false,
    type: 'home',
    quantity: 2,
    unit: 'op zboircze',
    description: '',
  },
  {
    id: 'bułki123',
    name: ' bułki',
    added: new Date(),
    purchased: false,
    type: 'home',
    quantity: 4,
    unit: 'szt',
    description: ' kajzerki',
  },
  {
    id: 'papryczka123',
    name: ' ostra papryczka',
    added: new Date(),
    purchased: true,
    type: 'private',
    quantity: 2,
    unit: 'szt',
    description: '',
  },
];
