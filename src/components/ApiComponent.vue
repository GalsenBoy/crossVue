<template>
    <h1>Hello Api Word</h1>
    <div class="container">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Rechercher</span>
            </div>
            <input type="text" class="form-control" placeholder="Yvelines" aria-label="Yvelines"
                aria-describedby="basic-addon1" v-model="search_department">
        </div>
        <p>{{ search_department }}</p>
        <table class="table table-striped mt-5 border">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Nom</th>
                    <th scope="col">CodeRegion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(department, index) in departments" :key="index">
                    <td>{{ department.code }}</td>
                    <td>{{ department.nom }}</td>
                    <td>{{ department.codeRegion }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<script>
import axios from "axios";
export default {
    data() {
        return {
            departments: [],
            search_department: '',
        };

    },
    mounted() {
        axios
            .get("https://geo.api.gouv.fr/departements")
            .then((response) => (this.departments = response.data));
    },
};
</script>
  