# Workout Generator

**USAGE**

1. Create a plugin ```exercizer.js```
    ```import Exercizer from "../components/Exercizer"```
   ```Vue.use(Exercizer)```
   
   
2. Add to nuxt.config.js
    ```{plugins: ['@/plugins/exercizer']}```
    
    ```const   {TRANSLATIONS} = require ("components/Exercizer/exercizer")```
    
    ```...[modules: {vueI18n: {messages: {de: {exercizer: require('vuetify-exercizer/translations').de}}}}]...```
    
    
3. Use on your page ```<exercizer></exercizer>```