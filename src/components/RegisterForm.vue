<template>
    <v-card min-width="350" max-width="420" dark>
        <v-card-title>
            Découvrez le projet de deconstruction de la raffinerie
        </v-card-title>
        <v-card-text>
            <h4>
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
            </h4>


            <v-text-field
                    label="E-mail"
                    :rules="[rules.email]"
                    placeholder="E-mail"
                    outlined
                    type="email"
                    v-model="email"
            ></v-text-field>
            <v-text-field
                    label="Code postal"
                    placeholder="Code postal"
                    :rules="[rules.zip]"
                    outlined
                    v-model="zipCode"
            ></v-text-field>
            <v-checkbox
                    v-model="optIn"
                    label="J’accepte de recevoir des informations par email"
                    :color="color"
            >
            </v-checkbox>
            <v-checkbox
                    v-model="cgu"
                    :color="color"
            >
                <template v-slot:label>
                    <div>
                        Accepter les
                        <a  class="link"
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

            <v-btn :color="color"
                   light
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
            return pattern.test( value ) || 'E-mail invalide.';
          },
          // eslint-disable-next-line no-restricted-globals
          zip: value => (value.length === 5 && !(isNaN( value ))) ||
            'Code postal invalide',
        },
        notSaved: true,
        color: 'rgba(246, 226, 0,1)',
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
        this.$emit( 'saved', event );
      },
    },
  };
</script>

<style scoped>
.link{
    color: rgba(246, 226, 0,1);
}
</style>
