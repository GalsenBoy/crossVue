<template>
  <div class="container">
    <h1>Liste des produits :</h1>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Mot clé</span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="ordinateur"
        aria-label="ordinateur"
        aria-describedby="basic-addon1"
        v-model="key_word"
      />
    </div>
    <p>{{ key_word }}</p>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nom</th>
            <th scope="col">Prix</th>
            <th scope="col">Promotion</th>
            <th scope="col">En Promotion</th>
            <th scope="col">Supprimer le produit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in filteredProducts" :key="index">
            <th scope="row">{{ product.id }}</th>
            <td>{{ product.name }}</td>
            <td>{{ product.price }} €</td>
            <td>
              <span v-if="product.promotion"
                ><i class="bi bi-heart-fill text-success"></i
              ></span>
            </td>
            <td>
              <button
                :class="
                  product.promotion ? 'btn btn-danger' : 'btn btn-success'
                "
                @click="reversePromo(product)"
              >
                <span v-if="product.promotion"> Enlever la promo</span>
                <span v-if="!product.promotion">Mettre en promo</span>
              </button>
            </td>
            <td>
              <button class="btn btn-danger" @click="delete_product(index)">
                <i class="bi bi-trash-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "ordinateur", price: 360, promotion: true },
        { id: 2, name: "tesla", price: 100360, promotion: false },
        { id: 3, name: "trotinette", price: 699, promotion: true },
        { id: 4, name: "iphone", price: 1199, promotion: false },
        { id: 5, name: "samsung", price: 899, promotion: false },
        { id: 6, name: "télévision", price: 700, promotion: true },
        { id: 7, name: "tondeuse", price: 90, promotion: true },
        { id: 8, name: "mac", price: 2500, promotion: false },
      ],
      selected: null,
      products_filtre: [],
      key_word: "",
    };
  },
  methods: {
    reversePromo(product) {
      this.selected = this.products.find((item) => item.id === product.id);
      // console.log(this.selected);
      this.selected.promotion = !this.selected.promotion;
    },

    delete_product(index) {
      // console.log(index);
      this.products.splice(index, 1);
    },

    // search_product() {
    //   this.key_word.toLowerCase;
    //   this.products_filtre = this.products.filter((f) =>
    //     f.name.includes(this.key_word)
    //   );
    //   this.products = this.products_filtre;
    // },
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.key_word.toLowerCase());
      });
    },
  },
};
</script>

<style>
.bi-trash-fill {
  font-size: 1.5rem;
}
</style>