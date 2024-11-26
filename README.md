# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Installation

- create application vite  
=> npm create vite@latest . --template react
✔ Package name: … frontend-travel-2024-update
✔ Select a framework: › React
✔ Select a variant: › JavaScript + SWC

- update github
echo "# Frontend_travel_up" >> README.md

- Install Required Dependencies:
=> npm install antd axios react-toastify react-router-dom i18next react-i18next
=> npm install -D sass-embedded
Fix warning Deprecation [legacy-js-api]: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0. in vite.config.js
=> css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },ß
    },
  },

- and update config run ipv4 and localhost for react vite.config.js
server: {
    host: '0.0.0.0',
    port: 3050, // Specify the port, default is 5173 if you want to change it
  }

- update lib for i18n:
npm install i18next react-i18next i18next-browser-languagedetector

- lib config markdown
=> npm install marked @mdxeditor/editor react-markdown
