export const panes = [
    {
        title: 'Tab 1',
        keyName: '1',
        component: import('../components/page1/page.jsx')
    },
    {
        title: 'Tab 2',
        keyName: '2',
        component: import('../components/page2/page.jsx'),
        closable: false
    },
    // {
    //     title: 'Tab3',
    //     key: '3',
    //     component: import('../components/page3/page.jsx')
    // }
];