<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col col lg="7" class="mx-xs-12">
        <div role="tablist">

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-1 variant="info"> {{ products[0].name }}</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <flickity ref="flickity" :options="flickityOptions" class="carousel">

                  <div class="carousel-cell" v-for="(product, i) in Cremation" :key="i">
                    <b-card :title="product.name" :img-src="product.image" img-alt="Image" img-top tag="article" style="" class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>

                      <b-button href="#" variant="primary" @click="addToStore(product);">Go somewhere</b-button>
                    </b-card>
                  </div>

                  <!-- <div class="carousel-cell d-none d-md-block" v-for="(product, i) in Cremation" :key="i">
                    <b-card :title="product.name" :img-src="product.image" img-alt="Image" img-top tag="article" style="" class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>

                      <b-button href="#" variant="primary" @click="addToStore(product);">Go somewhere</b-button>
                    </b-card>
                  </div>

                  <div class="carousel-cell d-md-none" v-for="(product, i) in Coffins" :key="i">
                    <b-card :title="product.name" :img-src="product.image" img-alt="Image" img-top tag="article" style="" class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>

                      <b-button href="#" variant="primary" @click="addToStore(product);">Go somewhere</b-button>
                    </b-card>
                  </div> -->
                </flickity>
                <!-- if you don't want to use the buttons Flickity provides -->`
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-2 variant="info"> {{ products[1].name }}</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <flickity ref="flickity" :options="flickityOptions" class="carousel">

                  <div class="carousel-cell" v-for="(product, i) in Coffins" :key="i">
                    <b-card :title="product.name" :img-src="product.image" img-alt="Image" img-top tag="article" style="" class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>

                      <b-button href="#" variant="primary" @click="addToStore(product);">Go somewhere</b-button>
                    </b-card>
                  </div>

                  <!-- <div class="carousel-cell d-none d-md-block" v-for="(product, i) in Coffins" :key="i">
                    <b-card :title="product.name" :img-src="product.image" img-alt="Image" img-top tag="article" style="" class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>

                      <b-button href="#" variant="primary" @click="addToStore(product);">Go somewhere</b-button>
                    </b-card>
                  </div>

                  <div class="carousel-cell d-md-none" v-for="(product, i) in Coffins" :key="i">
                    <b-card :title="product.name" :img-src="product.image" img-alt="Image" img-top tag="article" style="" class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </b-card-text>

                      <b-button href="#" variant="primary" @click="addToStore(product);">Go somewhere</b-button>
                    </b-card>
                  </div> -->

                </flickity>

              </b-card-body>
            </b-collapse>
          </b-card>

        </div>
      </b-col>

      <b-col cols="12" lg="auto"></b-col>
      <b-col col lg="auto" class="px-sm-12 px-xs-12">

        <div id="price-table">

          <div class="pricing">
            <p class="prices-value">
              <span class="prices-value-total"> {{ sum }} </span>
              Total
            </p>
          </div>
          <table class="price-table">
            <tr v-for="(item, i) in cart" :key="i" @mouseover="itemToShow = i" @mouseleave="itemToShow = -1" style="width: 100%">
              <td>
                {{ item.name}}
              </td>
              <td>
                <div v-show="itemToShow != i" class="h2 mb-0">
                  <b-icon icon="check-circle" variant="success"></b-icon>
                </div>
                <div v-show="itemToShow == i" class="h2 mb-0">
                  <b-icon icon="x-circle-fill" variant="danger" @click="removeFromStore(item);"></b-icon>
                </div>
              </td>
            </tr>
          </table>
        </div>

      </b-col>
    </b-row>
  </b-container>

</template>

<script>
import Flickity from "vue-flickity";
import { store, mutations } from "../store";

export default {
  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false

        // any options from Flickity can be used
      },
      products: [{ name: "Cremation" }, { name: "Caskets" }],
      Cremation: [
        {
          id: "jdfshjjff",
          name: "Cremation Jar",
          image: "http://placehold.it/800x600/418cf4/fff",
          category: "Cremation",
          price: 50,
          quantity: 10
        },
        {
          id: "jfgjkfdks",
          name: "Express Cremation",
          image: "http://placehold.it/800x600/f44242/fff",
          category: "Cremation",
          price: 500,
          quantity: 1
        },
        {
          id: "oiurwoptoir",
          name: "Preserve Cremate",
          image: "http://placehold.it/800x600/3ed846/fff",
          category: "Cremation",
          price: 100,
          quantity: 2
        },
        {
          id: "bmnxcnbvnm",
          name: "Gold Jar",
          image: "http://placehold.it/800x600/418cf4/fff",
          category: "Cremation",
          price: 100,
          quantity: 10
        }
      ],
      Coffins: [
        {
          id: "jhdfbgvofs",
          name: "Mahhogany coffin",
          image: "http://placehold.it/800x600/418cf4/fff",
          category: "Coffins",
          price: 50,
          quantity: 10
        },
        {
          id: "jikfdosgodfg",
          name: "Bronze overlay casket",
          image: "http://placehold.it/800x600/f44242/fff",
          category: "Coffins",
          price: 500,
          quantity: 1
        },
        {
          id: "ilousdifguig",
          name: "Silvery Casket",
          image: "http://placehold.it/800x600/3ed846/fff",
          category: "Coffins",
          price: 100,
          quantity: 1
        },
        {
          id: "bmnxzcbnv",
          name: "Golden Casket",
          image: "http://placehold.it/800x600/418cf4/fff",
          category: "Coffins",
          price: 100,
          quantity: 10
        }
      ],
      itemToShow: -1
    };
  },

  computed: {
    cart() {
      return store.cart;
    },
    sum() {
      return store.cart.reduce((acc, product) => acc + product.price, 0);
    },
    show() {
      return this.post.id === this.selectedId;
    }
  },

  methods: {
    addToStore: mutations.addToCart,

    removeFromStore: mutations.removeFromCart,

    cartMouseOver: function() {
      this.iconActive = !this.iconActive;
    }
  },
  props: {
    post: Object,
    selectedId: Number
  }
};
</script>

<style>
.carousel {
  width: inherit;
  height: max-content;
  padding: 20px 20px 20px 20px;
}

.carousel-cell {
  width: calc(100% / 2);
  height: max-content;
  margin-right: 10px;
  margin-left: 10px;
  /* border-radius: 5px; */
  /* counter-increment: carousel-cell; */
}

.carousel-cell.d-md-none {
  width: 75%;
  margin-right: 10px;
  margin-left: 10px;
}

#price-table {
  width: 300px;
}
.prices-value {
  font-size: 14px;
  margin: 16px 0;
}
.prices-value:before {
  content: "€";
  display: inline-block;
  font-weight: 700;
  margin-right: 4px;
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
}

.prices-value-total {
  font-size: 46px;
  line-height: 1.14;
}

.pricing {
  height: 150px;
  width: 300px;
  background: #4b1504;
  color: #fff;
  text-align: center;
  text-justify: auto;
}

#price-table table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid darkslategrey;
}

tr:hover {
  background-color: #f5f5f5;
}

/* cell number */
/* .carousel-cell:before {
  display: block;
  text-align: center;
  content: counter(carousel-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
} */
</style>