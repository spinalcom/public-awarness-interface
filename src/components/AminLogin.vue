<template>
    <v-card max-width="344"
            dark
    >
        <v-card-title> Admin Login</v-card-title>
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
                    outlined
                    type="password"
                    v-model="password"
            ></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-btn
                    light
                    @click="connect"
                    color="rgba(254,235,52,1)">
                Se connecter
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
  export default {
    name: 'Admin Login',
    data() {
      return {
        email: '',
        password: '',
        tryToConnect: false,
        rules: {
          email: ( value ) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test( value ) || !this.tryToConnect || 'Invalid e-mail.';
          }
        },
      };
    },
    computed: {
      displayError() {
        return !(this.email !== '');
      },
    },
    methods: {

      validate() {
        return this.email !== '';
      },
      connect() {
        this.tryToConnect = true;
        if (!this.validate()) return;
        const event = {};
        event.email = this.email;
        event.password = this.password;
        this.$emit( 'connect', event );
      },
    },
  };
</script>
