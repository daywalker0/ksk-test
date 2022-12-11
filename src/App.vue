<template>
  <div id="app">
    <component :is="$route.meta.layout || 'div'"> </component>
  </div>
</template>

<style lang="scss"></style>
