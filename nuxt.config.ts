// https://nuxt.com/docs/api/configuration/nuxt-config
// import fetchRepositories from "./utils/fetch-repositories";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/style.css",
    configPath: "~/tailwind.config.ts",
  },
  runtimeConfig: {
    githubToken: "",
    apiBaseURL: "",
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css", "aos/dist/aos.css"],
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    meta: [
      {
        name: "msapplication-TileColor",
        content: "#da532c",
      },
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],
  },
//   hooks: {
//     async "nitro:config"(nitroConfig) {
//       if (nitroConfig.dev) return;

//       const pages = await fetchRepositories();
//       const routes = pages.map((route) => `/repository/${route.name}`);

//       nitroConfig.prerender.routes.push(...routes);
//     },
//   },
//   router: {
//     base: "/nuxtfolio/",
//   },
});
