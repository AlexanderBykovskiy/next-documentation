# Введение

[Оригинал статьи](https://nextjs.org/docs/getting-started/project-structure)

Актуальность: 10.03.2024

---



Добро пожаловать в документацию Next.js.

## Next.js структура проекта

На этой странице представлен обзор структуры проекта приложения Next.js. Здесь рассматриваются файлы и папки верхнего уровня, файлы конфигурации и соглашения о маршрутизации в каталогах app и pages.

## Папки верхнего уровня

Папки верхнего уровня используются для организации кода и статических файлов вашего приложения.

![](./images/project-structure/top-level-folders.avif)

`app` - App Router

`public` - папка статических файлов

`src` - опционально (если выбрали при установке проекта) папка с кодом проекта

## Файлы верхнего уровня

Файлы верхнего уровня используются для настройки приложения, управления зависимостями, запуска промежуточного ПО (миделвеар), интеграции инструментов мониторинга и определения переменных окружения.

`next.config.js` Конфигурационный файл для Next.js

`package.json` Зависимости и скрипты проекта

`instrumentation.ts` Файл OpenTelemetry и Instrumentation
middleware.ts Промежуточное ПО для запросов Next.js

`.env` Переменные окружения

`.env.local` Локальные переменные окружения

`.env.production` Переменные окружения в продакшен

`.env.development` Переменные окружения разработки

`.eslintrc.json` Конфигурационный файл для ESLint

`.gitignore` Файл, описывающий список файлов и папок, которые следует игнорировать в Git

`next-env.d.ts` Файл декларации TypeScript для Next.js

`tsconfig.json` Конфигурационный файл для TypeScript

`jsconfig.json` Файл конфигурации для JavaScript

## Назначение файлов в App Routing

Для определения маршрутов и обработки метаданных в `App Routing` используются следующие соглашения:

`layout` (`.js | .jsx | .tsx`) - лейаут (макет)

`page` (`.js | .jsx | .tsx`) - страница

`loading` (`.js | .jsx | .tsx`) - компонент лодера

`not-found` (`.js | .jsx | .tsx`) - страница Not found

`error` (`.js | .jsx | .tsx`) - страница ошибки

`global-error` (`.js | .jsx | .tsx`) - глобальная страница ошибки

`route` (`.js | .ts`) - API эндпоинт

`template` (`.js | .jsx | .tsx`) - шаблон (макет, который ререндерится при переходе по страницам в отличае от `layout`)

`default` (`.js | .jsx | .tsx`) - фолбэк (fallback) страница для параллельного маршрута

## Вложенные роуты

`folder` - сегмент роута

`folder/folder` - вложенный сегмент роута

## Динамические роуты

`[folder]` - сегмент динамического роута

`[...folder]` - catch-all (получает все сегменты) сегмент роута

`[[...folder]]` - опциональный (включает коневой сегмент) catch-all сегмент роута

## Группы роутов и приватные папки

`(folder)` - групповой роут (не участвует в системе роутинга)

`_folder` - исключает папку и все вложенные сегменты из роутинга

## Параллельные и перехватывающие роуты

`@folder` - именованный слот (параллельный роут)

`(.)folder` - перехватывающий роут на том же уровне вложенности

`(..)folder` - перехватывающий роут на уровень выше

`(..)(..)folder` - перехватывающий роут на два уровня выше

`(...)folder` - перехватывающий роут на уровне корня

## Файлы метаданных

`favicon` (`.ico`) - favicon файл

`icon` (`.ico | .jpg | .jpeg | .png | .svg`) - иконка приложения

`icon` (`.js | .ts | .tsx`) - генерируемая иконка приложения

`apple-icon` (`.jpg | .jpeg | .png`) - иконка Apple приложения

`apple-icon` (`.js | .ts | .tsx`) - генерируемая иконка Apple приложения

## Файлы метаданных Open Graph и Twitter Images

`opengraph-image` (`.jpg | .jpeg | .png | .gif`) - файл изображения Open Graph

`opengraph-image` (`.js | .ts | .tsx`) - генерируемый файл изображения Open Graph

`twitter-image` (`.jpg | .jpeg | .png | .gif`) - файл изображения Twitter

`twitter-image` (`.js | .ts | .tsx`) - генерируемый файл изображения Twitter

## SEO

`sitemap` (`.xml`) - sitemap файл

`sitemap` (`.js | .ts`) - генерируемый файл sitemap

`robots` (`.txt`) - robots файл

`robots` (`.js | .ts`) - генерируемый файл robots
