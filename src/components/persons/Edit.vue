<template>
    <div>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div v-if="errors.length">
                        <div v-for="error in errors" :key="error.index" class="alert alert-danger mt-1" role="alert">
                            {{ error }}
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            Edit Person
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="PersonUpdate">

                                <div class="form-group">
                                    <label>Salutation</label>
                                    <input type="text" class="form-control" v-model="person.salutation">
                                </div>
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" v-model="person.first_name">
                                </div>
                                <div class="form-group">
                                    <label>Middle Name</label>
                                    <input type="text" class="form-control" v-model="person.middle_name">
                                </div>
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" v-model="person.last_name">
                                </div>
                                <div class="form-group">
                                    <label>Date of Birth</label>
                                    <input type="date" class="form-control" v-model="person.date_of_birth">
                                </div>
                                <div class="form-group">
                                    <label>Address</label>
                                    <input type="text" class="form-control" v-model="person.address">
                                </div>
                                <div class="form-group">
                                    <label>City</label>
                                    <input type="text" class="form-control" v-model="person.city">
                                </div>
                                <div class="form-group">
                                    <label>Postcode</label>
                                    <input type="text" class="form-control" v-model="person.postcode">
                                </div>
                                <div class="form-group">
                                    <label>Telephone</label>
                                    <input type="text" class="form-control" v-model="person.telephone">
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" v-model="person.email">
                                </div>

                                <button type="submit" class="btn btn-md btn-success mr-2">
                                    Update
                                </button>

                            </form>
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
                person: {},
                errors: []
            }
        },
        created() {
            axios.get(this.$base_url + 'api/person/' + this.$route.params.id)
                .then((response) => {
                    this.person = response.data.data;
                });
        },
        methods: {
            PersonUpdate(e) {
                axios.put(this.$base_url + 'api/person/' + this.$route.params.id, this.person)
                    .then(() => {
                        this.$router.push({name: 'persons'});
                    }).catch(error => {
                    this.errors = [];
                    this.errors.push(error.response.data.data);
                });
                e.preventDefault()
            }
        }
    }
</script>
