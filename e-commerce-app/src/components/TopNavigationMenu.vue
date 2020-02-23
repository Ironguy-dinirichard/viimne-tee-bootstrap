<template>
  <transition>
    <div class="nav-placeholder">

      <div class="header" id="myHeader">

        <a href="tel:+37255551" class="number">
          <p>
            <ios-call-icon w="20px" h="20px" /> 24H ddddd </p>
        </a>

        <b-navbar toggleable="lg">

          <b-navbar-brand to="/" class="back">
            <img src="https://firebasestorage.googleapis.com/v0/b/viimnetee-2147d.appspot.com/o/viimne_tee.png?alt=media&token=983d2330-e423-4b90-b2b9-090cbad7f2ef" alt="Logo" class="back">
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

              <b-nav-item :to="`/${ $i18n.locale }/`">{{ $t("nav.about")}}</b-nav-item>
              <b-nav-item-dropdown class="dd-menu" :text="$t('nav.service')" no-caret>
                <b-dropdown-item to="/Content2">{{ $t("nav.services.funeral")}}</b-dropdown-item>
                <b-dropdown-item href="#">{{ $t("nav.services.cremation")}}</b-dropdown-item>
                <b-dropdown-item to="/Galerii">{{ $t("nav.services.specialOccasion")}}</b-dropdown-item>

              </b-nav-item-dropdown>
              <b-nav-item :to="`/${ $i18n.locale }/Price`">{{ $t("nav.price")}}</b-nav-item>
              <b-nav-item>{{ $t("nav.planning")}}</b-nav-item>
              <b-nav-item>{{ $t("nav.grieving")}}</b-nav-item>
              <b-nav-item :to="`/${ $i18n.locale }/Kontact`">{{ $t("nav.contact")}}</b-nav-item>
              <b-nav-item>{{ $t("nav.flowers")}}</b-nav-item>

              <div class="nav-stick">

              </div>
              <LocaleChanger />

            </b-navbar-nav>
          </b-collapse>

        </b-navbar>

      </div>
    </div>
  </transition>
</template>

<script>
import LocaleChanger from "./LocaleChanger";

export default {
  name: "NavigationMenu",
  props: {
    name: String
  },
  components: {
    LocaleChanger
  }
};
</script>


<style scoped>
.nav-placeholder {
  height: 97px;
}

img {
  height: 60px;
  margin-left: 10px;
}

p {
  background-color: rgb(75, 4, 4);
  padding-right: 20px;
  margin: 0px;
  color: white;
  text-align: right;
}

.btn {
  background-color: transparent;
  border-color: rgb(209, 224, 187);
  color: black;
  border: none;
  border-radius: 0 !important;
}

.header {
  z-index: 2;
}
</style>