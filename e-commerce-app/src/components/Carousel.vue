<template>
  <b-carousel ref="myCarousel" id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators interval=0 img-width="1024" img-height="480">
    <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10">
      <div>
        <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
    </b-carousel-slide>
    <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
    <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
    <b-carousel-slide caption="Fourth Slide" img-src="https://picsum.photos/1024/480/?image=23"></b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    prev() {
      this.$refs.myCarousel.prev();
    },
    next() {
      this.$refs.myCarousel.next();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
