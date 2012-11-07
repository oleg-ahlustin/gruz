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
                {
                    elem: 'h1',
                    content: 'Груз 200'
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'b-text',
                    content: [
                        {
                            elem: 'h2',
                            content: 'Транспортировка, доставка, перевозка умерших (груз 200) из Алушты по Украине, России и Крыму'
                        },
                        {
                            elem: 'p',
                            content: '— В любое время суток.'
                        },
                        {
                            elem: 'p',
                            content: '— Специальным транспортом оснащенным кондиционером.'
                        },
                        {
                            elem: 'p',
                            content: '— 100% гарантия сохранности.'
                        },
                        {
                            elem: 'p',
                            content: '— Полная консультация по вопросу транспортирования, а также погребения, в т.ч. и связь с крематориями.'
                        },
                        {
                            elem: 'p',
                            content: '— Подготовка всех необходимых документов для выезда.'
                        },
                        {
                            elem: 'p',
                            content: '— Оформление таможенных документов для пересечения границы.'
                        },
                        {
                            elem: 'p',
                            content: '— Помощь в организации бальзамирования тела и полной подготовки для транспортирования.'
                        },
                        {
                            elem: 'p',
                            content: '— Помощь в приобретении гроба и всех сопутствующих предметов для похорон.'
                        },
                        {
                            elem: 'h2',
                            content: 'Контакты'
                        },
                        {
                            elem: 'p',
                            content: '+38 095 886-05-10 '
                        },
                        {
                            elem: 'p',
                            content: '+38 098 337-86-69 '
                        },
                        {
                            elem: 'p',
                            content: '+38 095 143-02-35 '
                        },
                        {
                            elem: 'p',
                            content: '+38 050 542-61-27 '
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            content: [
                {
                    elem: 'p',
                    content: 'Надежда (c) 2012'
                },
                {
                    elem: 'p',
                    content: 'Разработка сайта — '
                },
                {
                    block: 'b-link',
                    mix: [{ block: 'description', elem : 'link-inner' }],
                    url: '//tadatuta.ru/',
                    content: 'студия Тадатута'
                }
            ]
        }
    ]
})
