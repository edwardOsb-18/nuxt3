// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },


// nitro:{
//   prerender:{
//     routes:["/","/servicios"]
//   }

// }
routeRules:{

"/":{   prerender:true},
"/contacto":{   prerender:true},
"/osb":{   ssr:false},
"/servicios":{   prerender:true},
}
  
  
})











