import Vue from "vue";

export const store = Vue.observable({
    cart: []
});

export const mutations = {
    addToCart (newValue) {
        // console.log('setMessageAction triggered with', newValue);
        store.cart.push(newValue);
    },
    removeFromCart (item) {
        var index = store.cart.indexOf(item);
        store.cart.splice(index, 1);
    }
};
