# VuetifyExercizer

A simple workout plan generator for VuetifyJS applications.
Please notice that for now, German is the only included language.

**USAGE**

Import the default export and render the component.

```vue
    <template>
       <v-app>
            <vuetify-exercizer></vuetify-exercizer>
       </v-app>
    </template>

       <script>
           import VuetifyExercizer from "vuetify-exercizer"
       
           export default {
               components: {VuetifyExercizer},
           };
       </script>
```

**Use with Nuxt.js** (optional)

To make it compatible with Nuxt add the translations to nuxt-i18n options in your nuxt.config.js.

```javascript
    module.exports = {
        modules: [
            ['nuxt-i18n', {
                    vueI18n: {
                        messages: {
                            de: {
                                exercizer: require('vuetify-exercizer/locales/de.json'),
                            }
                        }
                    }
                }
            ]
        ]
    };
```
   
**TODO**

- Add translations
- Add tests

**License**

This project is covered by the MIT license. See LICENSE for more info.