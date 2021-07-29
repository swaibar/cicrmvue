<template>
    <div>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            Addresses
                        </div>
                        <div class="card-body">
                            <div>
                                <router-link :class="['btn btn-md btn-success mb-2']" to="/create">Create</router-link>
                                <hr>
                                <div class="table-responsive mt-2">
                                    <table class="table table-hover table-bordered">
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(person, index) in persons" :key="person.id">
                                            <td>
                                                {{ person.salutation }} {{ person.first_name }} {{ person.last_name }}
                                            </td>
                                            <td>
                                                {{ person.address }} {{ person.city }} {{ person.postcode }}
                                            </td>
                                            <td>
                                                <router-link :to="{name: 'edit', params: { id: person.id }}"
                                                             class="btn btn-sm btn-primary mr-2">Edit
                                                </router-link>
                                                <button @click.prevent="PersonDelete(person.id, index)"
                                                        class="btn btn-sm btn-danger">Delete
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                per_page: 10,
                current_page: 1,
                persons: []
            }
        },
        created() {
            axios.get(this.$base_url + 'api/person')
                .then(response => {
                    this.persons = response.data.data;
                });
        },
        methods: {
            PersonDelete(id, index) {
                axios.delete(this.$base_url + 'api/person/' + id)
                    .then(() => {
                        this.persons.splice(index, 1);
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            },
            personsForList() {
                return this.data.slice(
                    (this.current_page - 1) * this.per_page,
                    this.current_page * this.per_page,
                );
            }
        },
        computed: {
            rows() {
                return this.persons.length
            }
        }
    }
</script>

