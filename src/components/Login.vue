<template>
  <v-card max-width="344"
  >
    <v-card-title> Login</v-card-title>
    <v-card-text>
      <v-text-field
        label="E-mail"
        :rules="[rules.email]"
        outlined
        type="email"
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="Mot de passe"
        :rules="[rules.zip]"
        outlined
        type="password"
        v-model="departement"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="save">Se connecter</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      cgu: false,
      partner: false,
      email: '',
      zipCode: -1,
      rules: {
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
        // eslint-disable-next-line no-restricted-globals
        zip: value => (value.length === 5 && !(isNaN(value))) || 'Departement invalide',
      },
      notSaved: true,
    };
  },
  computed: {
    displayError() {
      if (this.notSaved) return false;
      return !(this.cgu && this.partner && this.email !== '' && this.zipCode !== -1);
    },
  },
  methods: {

    validate() {
      return this.cgu && this.partner && this.email !== '' && this.zipCode !== -1;
    },
    save() {
      this.notSaved = false;

      if (!this.validate()) return;

      const event = {};
      event.cgu = this.cgu;
      event.partner = this.partner;
      event.email = this.email;
      event.departement = this.zipCode;
      this.$emit('connect', event);
    },
  },
};
</script>

<style scoped>
.form-container{
  width: 50%;
  height: 30%;

}
</style>
