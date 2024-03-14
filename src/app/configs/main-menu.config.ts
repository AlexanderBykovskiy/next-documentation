export const mainMenuConfig = [
    {
        id: 'introduction',
        title: 'Знакомство',
        link: '/',
        file: '/docs/1-introduction.ru.md'
    },
    {
        id: 'installation',
        title: 'Установка',
        link: '/installation',
        file: '/docs/2-installation.ru.md'
    },
    {
        id: 'project-structure',
        title: 'Структура проекта',
        link: '/project-structure',
        file: '/docs/3-project-structure.ru.md'
    },
    {
        id: 'app-router',
        title: 'App Router',
        link: '/app-router',
        file: '/docs/4-app-router.ru.md'
    },
    {
        id: 'building-app',
        title: 'Построение приложения',
        link: '/building-app',
        file: '/docs/5-building-app.ru.md'
    },
    {
        id: 'routing',
        title: 'Роутинг',
        link: '/routing',
        file: '/docs/6-routing.ru.md',
        children: [
            {
                id: 'defining-routes',
                title: 'Определение роутов',
                link: '/defining-routes',
                file: '/docs/6.1-defining-routes.ru.md',
            },
            {
                id: 'pages-and-layouts',
                title: 'Страницы и макеты',
                link: '/pages-and-layouts',
                file: '/docs/6.2-pages-and-layouts.ru.md',
            },
            {
                id: 'linking-and-navigating',
                title: 'Ссылки и навигация',
                link: '/linking-and-navigating',
                file: '/docs/6.3-linking-and-navigating.ru.md',
            },
        ]
    },
]
