# App Router

[Оригинал статьи](https://nextjs.org/docs/app)

Актуальность: 11.03.2024

---



Next.js App Router представляет новую модель для создания приложений с использованием новейших возможностей React, таких как серверные компоненты ([Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)), стримминг ([Streaming with Suspense](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense)) и серверные экшены ([Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)).

## Часто задаваемые вопросы

### Как я могу получить доступ к объекту запроса в макете (layout)?

Вы намеренно не можете получить доступ к необработанному объекту запроса. Однако вы можете получить доступ к заголовкам (`headers`) и cookies через функции, предназначенные только для сервера. Вы также можете установить `cookies`.

Макеты не ререндерятся. Их можно кэшировать и использовать повторно, чтобы избежать лишних вычислений при переходе между страницами. Ограничивая доступ макетов к необработанному запросу, Next.js может предотвратить выполнение потенциально медленного или дорогостоящего пользовательского кода внутри макета, что может негативно сказаться на производительности.

Такая конструкция также обеспечивает последовательное и предсказуемое поведение макетов на разных страницах, что упрощает разработку и отладку.

В зависимости от модели пользовательского интерфейса, которую вы создаете, параллельные роуты позволяют отображать несколько страниц в одном макете, а страницы имеют доступ к сегментам роута (params), а также к параметрам поиска URL (query).

### Как получить доступ к URL-адресу страницы?

По умолчанию страницы являются компонентами сервера. Вы можете получить доступ к сегментам роута через параметр [`params`](https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional) и query параметрам URL через параметр [`searchParams`](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional) для данной страницы.

Если вы используете клиентские компоненты, вы можете использовать [`usePathname`](https://nextjs.org/docs/app/api-reference/functions/use-pathname), [`useSelectedLayoutSegment`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment) и [`useSelectedLayoutSegments`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments) для более сложных роутов.

Кроме того, в зависимости от шаблона пользовательского интерфейса, который вы создаете, параллельные роуты позволяют отображать несколько страниц в одном макете, и страницы имеют доступ к сегментам роута, а также к query параметрам URL.

### Как сделать переадресацию из серверного компонента?

Вы можете использовать [`redirect`](https://nextjs.org/docs/app/api-reference/functions/redirect) для перенаправления со страницы на относительный или абсолютный URL. `redirect` - это временная (307) переадресация, а [`permanentRedirect`](https://nextjs.org/docs/app/api-reference/functions/permanentRedirect) - постоянная (308) переадресация. Когда эти функции используются при стриминге UI, они вставляют мета-тег для эмуляции редиректа на стороне клиента.

### Как я могу управлять аутентификацией с помощью App Router?

Вот несколько распространенных решений для аутентификации, которые поддерживает App Router:

* [NextAuth.js](https://next-auth.js.org/configuration/nextjs#in-app-router)
* [Clerk](https://clerk.com/docs/quickstarts/nextjs)
* [Auth0](https://github.com/auth0/nextjs-auth0#app-router)
* [Stytch](https://stytch.com/docs/example-apps/frontend/nextjs)
* [Kinde](https://kinde.com/docs/developer-tools/nextjs-sdk/)
* Или вручную обрабатывать сессии или JWT

### Как я могу установить cookies?

Вы можете установить `cookies` в серверных экшенах ([Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#cookies)) или обработчиках маршрутов ([Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)) с помощью функции [`cookies`](https://nextjs.org/docs/app/api-reference/functions/cookies).

Поскольку HTTP не позволяет устанавливать `cookies` после запуска потока, вы не можете установить cookies непосредственно со страницы или макета. Вы также можете установить cookies из [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware#using-cookies).

### Как создавать мултитенант (multi-tenant) приложения?

Если вы хотите создать одно приложение Next.js, обслуживающее несколько арендаторов, мы создали пример, демонстрирующий [демонстрирующий рекомендуемую архитектуру](https://vercel.com/templates/next.js/platforms-starter-kit).

### Как отключить кэш App Router?

В Next.js существует несколько уровней кэширования, а значит, и несколько способов отключить различные части кэша. [Узнайте больше о кэшировании](https://nextjs.org/docs/app/building-your-application/caching).

### Существуют ли комплексные приложения с открытым исходным кодом, созданные на базе App Router?

Да. Вы можете посмотреть [Next.js Commerce](https://vercel.com/templates/next.js/nextjs-commerce) или [Platforms Starter Kit](https://vercel.com/templates/next.js/platforms-starter-kit) - это два больших примера использования App Router с открытым исходным кодом.
