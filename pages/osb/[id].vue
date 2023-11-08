<template>
    <div>
      <h1>hola {{ titulo }}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore inventore qui ullam at est. Repellat provident hic nam unde.</p>
    
    </div>
  </template>
  
  <script setup>
const route=useRoute()

const titulo=route.params.id
  

  </script>