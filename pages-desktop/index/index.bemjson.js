({
    block: 'b-page',
    title: 'Груз 200',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            block: 'header',
            content: [
                'Груз 200'
            ]
        },
        {
            block: 'content',
            content: [
                'Транспортировка, доставка, перевозка умерших (груз 200) из Алушты по Украине, России и Крыму',
                '— В любое время суток.'
            ]
        },
        {
            block: 'footer',
            content: [
                'footer content goes here'
            ]
        }
    ]
})
