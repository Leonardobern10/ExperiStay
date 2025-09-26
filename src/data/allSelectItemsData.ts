import type { SelectItemType } from '../types/SelectItemType';

export const allSelectItemsData: SelectItemType[] = [
    { selectIndex: 0, selectValue: 'RJ', selectName: 'Rio de Janeiro' },
    { selectIndex: 1, selectValue: 'SP', selectName: 'São Paulo' },
    { selectIndex: 2, selectValue: 'AL', selectName: 'Maceió' },
];

export const sortOptions: SelectItemType[] = [
    {
        selectIndex: 0,
        selectValue: 'Mais recentes',
        selectName: 'Mais recentes',
    },
    {
        selectIndex: 1,
        selectValue: 'Mais relevantes',
        selectName: 'Mais relevantes',
    },
];
