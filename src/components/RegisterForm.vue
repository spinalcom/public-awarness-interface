<template>
    <v-card min-width="350" max-width="420" color="rgba(216,216,216,100)">
        <v-card-title>
            Information utilisateur
        </v-card-title>
        <v-card-text>
            <h3>
                <p>
                    Bienvenue sur le site de visualisation du démantèlement de
                    la
                    raffinerie de Dunkerque
                </p>
                <p>
                    Afin de visualiser l'avancement du démantèlement veuillez
                    compléter le
                    formulaire suivant
                </p>
            </h3>


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
                    v-model="zipCode"
            ></v-text-field>
            <v-checkbox v-model="optIn">
                <template v-slot:label>
                    <div>
                        J’accepte de recevoir des informations par email
                    </div>
                </template>
            </v-checkbox>
            <v-checkbox v-model="cgu">
                <template v-slot:label>
                    <div>
                        Accepter les
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
            <p
                    class="error--text"
                    v-if="displayError">
                les CGU doivent etre accepter
            </p>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="rgba(254,235,52,1)"
                   @click="save">
                Valider
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
  export default {
    name: 'Register form',
    data() {
      return {
        optIn: true,
        cgu: false,
        email: '',
        zipCode: 59140,
        rules: {
          email: ( value ) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test( value ) || 'Invalid e-mail.';
          },
          // eslint-disable-next-line no-restricted-globals
          zip: value => (value.length === 5 && !(isNaN( value ))) ||
            'Code postal invalide',
        },
        notSaved: true,
      };
    },
    computed: {
      displayError() {
        if (this.notSaved) return false;
        return !(this.cgu && this.email !== '' && this.zipCode !== -1);
      },
    },
    methods: {

      validate() {
        return this.cgu && this.email !== '' && this.zipCode !== -1;
      },
      save() {
        this.notSaved = false;

        if (!this.validate()) return;
        const event = {};
        event.cgu = this.cgu;
        event.email = this.email;
        event.zipCode = this.zipCode;
        event.optIn = this.optIn;
        console.log( event )
        this.$emit( 'saved', event );
      },
    },
  };
</script>

<style scoped>

</style>
