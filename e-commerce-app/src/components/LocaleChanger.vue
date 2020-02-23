<template>
  <!-- <v-col style="padding-top: 1px;  height: 50px;">
    <v-select v-model="$i18n.locale" :items="langs" item-text="langs" chips dense></v-select>
  </v-col> -->

  <b-select v-model="$i18n.locale" :options="langs" ></b-select>

  <!-- <b-button :v-for="lang in langs" v-bind:key="i">{{ lang }} x</b-button> -->
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return { langs: ["ee", "ru"] };
  },
  computed: {},
  mounted() {
    this.$root.$data.langs;
  }
};
</script>
<style scoped>

</style>

