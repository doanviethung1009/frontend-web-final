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

- long bổ sung >>  here

- chiến bổ sung here >>

- description web url when send and share link in app
-> config in main.html
     <!-- call image to paste link -->
  - <meta property="og:URL" content="/logo-vecotra.png" />
  - <meta property="og:type" content="article" />
  - <meta property="og:title" content="VEcoTra" />
  - <meta property="og:description" content="Hành trình xanh - Kết nối bền vững" />
  - <meta property="og:image" content="/logo-vecotra.png" />

- CSS:
-> primary color:
  --> Pigment green: #23A655 (RGB: 35, 166, 85) (СМУК: 79, 0, 49, 35)
  --> Xanthous: #F9B72D (RGB: 249, 183, 45) (СМУК: 0, 27, 82, 2)

- Font:
  -> Font Logo: Seagull-Black
  -> Font Slogan: Lato

- render string (which html)
-> <td dangerouslySetInnerHTML={{__html: this.state.actions}} />
-> <https://stackoverflow.com/questions/19266197/reactjs-convert-html-string-to-jsx>
