<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
      
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"]
};
</script>

<style>
@media only screen and (min-width: 1200px) {
.loader {
  background-image: inherit;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  bottom: 0;
  color: white;
 padding-top: 20vh;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 200;

  
}}




.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>