const navList = [
    {
        label: '页面1',
        id: '1',
        render: () => import('../components/page1/page'),
        iconType: 'user',
        children: []
    },
    {
        label: '页面2',
        id: '2',
        render: () => import('../components/page2/page'),
        iconType: 'user',
        children: []
    },
    {
        label: '页面3',
        id: '3',
        render: '',
        iconType: 'user',
        children: [
                {
                    label: '页面3-1',
                    id: '3-1',
                render: () => import('../components/page3/page'),
                    iconType: 'user',
                    children: []
                },
                {
                    label: '页面3-2',
                    id: '3-2',
                    render: () => import('../components/page4/page'),
                    iconType: 'user',
                    children: []
                },
                {
                    label: '页面3-3',
                    id: '3-3',
                    render: '',
                    children: [
                        {
                            label: '页面3-3-1',
                            id: '3-3-1',
                            render: () => import('../components/page5/page'),
                            iconType: 'user',
                            children: []
                        },
                    ]
                },
        ]
    },
]
export default navList