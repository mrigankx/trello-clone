const cards = [
    {
        id: 'card-1',
        title: 'Learning how to cook',
        desc: "cooking"
    },
    {
        id: 'card-2',
        title: 'Making sandwich',
        desc: "sandwich"
    },
    {
        id: 'card-3',
        title: 'Taking the trash out',
        desc: "trash out"
    },
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'Todo',
            cards,
        },

    },
    listIds: ['list-1'],
};

export default data;