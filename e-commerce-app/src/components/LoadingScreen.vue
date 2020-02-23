<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
      Welcome to Heaven!
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"]
};
</script>

<style>
.loader {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/viimnetee-2147d.appspot.com/o/sugis.jpg?alt=media&token=55ff1946-4e9f-4c45-a2c5-30cb27ae4219");
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
}

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