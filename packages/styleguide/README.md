# Scenso SCSS
[![npm](https://img.shields.io/npm/dt/@olivierbelaud/scenso-styleguide.svg?style=flat-square)](https://npmjs.com/package/@olivierbelaud/scenso-styleguide)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@olivierbelaud/scenso-styleguide/latest.svg?style=flat-square)](https://npmjs.com/package/@olivierbelaud/scenso-styleguide)

## Setup
- Add `@olivierbelaud/scenso-scss` dependency using yarn or npm to your project
- Add `@olivierbelaud/scenso-scss` to `modules` section of `nuxt.config.js`
```js
{
  modules: [
    '@olivierbelaud/scenso-scss'
  ]
}
````

- Add `node-sass sass-loader` in your dev dependency using yarn or npm to your project


// - You will need to use postcss loader if you are not already using it.

// ```js

// build: {
//     /*
//     ** You can extend webpack config here
//     */
//     postcss: {
//       plugins: {
//         'postcss-preset-env': {
//           features: {
//             customProperties: false
//           }
//         }
//       }
//     },
//     extend(config, ctx) {
//       // Run ESLint on save
//       if (ctx.isDev && ctx.isClient) {
//         config.module.rules.push({
//           enforce: 'pre',
//           test: /\.(js|vue)$/,
//           loader: 'eslint-loader',
//           exclude: /(node_modules)/
//         })
//       }
//     }
//   }
// ```