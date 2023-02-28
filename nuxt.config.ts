// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
           meta: [
               {charset: "utf-8"},
               {
                   name: "description",
                   content: "Создание SC Partners сайта",
               },
               {
                   name: "viewport",
                   content: "width=device-width, initial-scale=1.0",
               },
               {
                   'http-equiv': "X-UA-Compatible",
                    content: "IE=edge",
               }
           ],
            title: "SC Partners",
            link: [
                {
                    rel:"shortcut icon",
                    href:"public/favicon.ico",
                },
                {
                    rel:"apple-touch-icon",
                    sizes: "57x57",
                    href: "public/favicons/apple-icon-57x57.png",
                },
                {
                    rel:"apple-touch-icon",
                    sizes: "72x72",
                    href: "public/favicons/apple-icon-72x72.png",
                },
                {
                    rel:"apple-touch-icon",
                    sizes: "76x76",
                    href: "public/favicons/apple-icon-76x76.png",
                },
                {
                    rel:"apple-touch-icon",
                    sizes: "114x114",
                    href: "public/favicons/apple-icon-114x114.png",
                },
                {
                    rel:"apple-touch-icon",
                    sizes: "120x120",
                    href: "public/favicons/apple-icon-120x120.png",
                },
                {
                    rel:"apple-touch-icon",
                    sizes: "144x144",
                    href: "public/favicons/apple-icon-144x144.png",
                },
                {
                    rel:"apple-touch-icon",
                    sizes: "152x152",
                    href: "public/favicons/apple-icon-152x152.png",
                },
                {
                    rel:"apple-touch-icon",
                    sizes: "180x180",
                    href: "public/favicons/apple-icon-180x180.png",
                },
            ],
        }
    },
    css:['@/assets/css/reset.css', '@/assets/css/style.css']
})