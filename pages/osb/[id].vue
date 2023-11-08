<template>
    <div>
      <h1>hola {{ titulo }}</h1>
      <p>{{des}}</p>
      <button @click="cambio">cmabiar descripcion</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptas necessitatibus, repudiandae eos reprehenderit voluptatem nam nesciunt laudantium sapiente maiores.</p>
    </div>
  </template>
  
  <script setup>

  const des=ref("Lorem ipsum dolor sit amet consectetur,")
const route=useRoute()

const titulo=route.params.id
  
const cambio=()=>{
des.value="vamos cremas vamos"

}
  </script>