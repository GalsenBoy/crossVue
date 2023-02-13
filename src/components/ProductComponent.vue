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
              :class="product.promotion ? 'btn btn-danger' : 'btn btn-success'"
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
    <div class="container">
      <form action="" @submit="on_submit" style="width: 500px" class="mb-5">
        <div class="form-group">
          <label class="mt-3" for="">Identifiant</label
          ><input v-model="form.id" type="number" class="form-control" />
        </div>
        <div class="form-group">
          <label class="mt-3" for="">Article</label>
          <input type="text" v-model="form.name" class="form-control" />
        </div>
        <div class="form-group">
          <label class="mt-3" for="">Prix</label>
          <input type="number" v-model="form.price" class="form-control" />
        </div>

        <div class="form-group">
          <input
            type="checkbox"
            id="contactChoice1"
            name="contact"
            value="true"
            v-model="form.promotion"
          />
          <label for="contactChoice1" class="mt-2">Mettre en promo</label>
          <button class="btn btn-info m-2">Ajouter le produit</button>
        </div>
      </form>
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
      form: {
        id: "",
        name: "",
        price: "",
        promotion: "",
      },
    };
  },
  methods: {
    reversePromo(product) {
      this.selected = this.products.find((item) => item.id === product.id);
      this.selected.promotion = !this.selected.promotion;
    },
    delete_product(index) {
      const confirmation = confirm("Voulez-vous vraiment supprimer ce produit");
      if (confirmation) {
        this.products.splice(index, 1);
        this.on_update();
      }
    },
    on_submit(e) {
      if (this.form.name && this.form.price) {
        for (const product of this.products) {
          if (this.form.id == product.id) {
            alert("Cet identifiant existe déjà");
            return false;
          }
        }
        for (const product of this.products) {
          if (this.form.name == product.name) {
            alert("Cet article existe déjà");
            return false;
          }
        }
        this.products.push(this.form);
        this.on_update();
        // localStorage.setItem("products", JSON.stringify(this.products));
      }
      if (!this.form.name || !this.form.price) {
        alert("Tous les champs doivent être remplis");
      }
      this.form = {};
      e.preventDefault();
    },
    on_update() {
      localStorage.setItem("produits", JSON.stringify(this.products));
    },
  },
  created() {
    // Récupérer les produits stockés dans localStorage
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    }
  },
  watch: {
    products: {
      handler() {
        // Mettre à jour les produits dans localStorage lorsque la propriété products change
        localStorage.setItem("products", JSON.stringify(this.products));
      },
      deep: true,
    },
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.key_word.toLowerCase());
      });
    },
  },
  product: {},
};
</script>

<style>
.bi-trash-fill {
  font-size: 1.5rem;
}
</style>