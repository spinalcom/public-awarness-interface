<template>
  <div class="card"
  >
    <div class="header">
      <h3> Information utilisateur</h3>
    </div>

    <div class="body">
      <v-text-field
        label="E-mail"
        :rules="[rules.email]"
        placeholder="Placeholder"
        outlined
        type="email"
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="Departement"
        placeholder="Placeholder"
        :rules="[rules.zip]"
        outlined
        v-model="departement"
      ></v-text-field>
      <v-checkbox v-model="cgu">
        <template v-slot:label>
          <div>
            Accepter less
            <a
              target="_blank"
              href="http://google.com"
              @click.stop
            >
              CGU
            </a>
          </div>
        </template>
      </v-checkbox>
      <v-checkbox
        v-model="partner"
        label="Accepter les partenaires"
      ></v-checkbox>
      <p
        class="error--text"
        v-if="displayError">
        les CGU et Partner doivent etre accepter
      </p>
    </div>
    <div class="footer">
      <v-btn @click="save"> Valider</v-btn>
    </div>
  </div>

</template>

<script>
export default {
  name: 'User Information',
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
      this.$emit('saved', event);
    },
  },
};
</script>

<style scoped>
  .header{
    position: absolute;
    top: 10%;
  }
  .card{
    width: 100%;
    height: 100%;
    background: rgba(216,216,216,100);
    border-radius: 1%;
    box-shadow: 1px solid rgba(0,0,0,0.50);
    padding: 3%;
    position: relative;
  }

  .footer{
    position: absolute;
    padding-bottom: 5%;
    bottom: 0;
  }
  .body{
    position: absolute;
    top: 20%;
    left: 25%;
    width: 50%;
  }
</style>
