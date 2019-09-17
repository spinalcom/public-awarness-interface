<template>
    <v-card min-width="420"  dark>
        <v-card-title>
            Bienvenue sur la plateforme de suivi de la déconstruction du site SRD !
        </v-card-title>
        <v-card-text>
            <h4>
                <p>
                    Cette plateforme de partage vous informe de l’avancement des travaux de déconstruction, en
                    visualisant pas à pas les différentes étapes.
                </p>
                <p>
                    Avant de vous permettre l’accès à la maquette numérique, nous vous prions de bien vouloir saisir les
                    informations suivantes :
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
            Si vous le souhaitez, ces informations seront utilisées pour vous informer des mises à jour sur la
            maquette ou des évènements sur le chantier (Journées du patrimoine, etc.).
            <v-checkbox
                    v-model="optIn"
                    label="Je ne souhaite pas que ces informations soient utilisées pour me contacter."
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
                            @click="openCGU"
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
        optIn: false,
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
        event.optIn = !this.optIn;
        this.$emit( 'saved', event );
      },
      openCGU(){
        this.$router.push('cgu')
      }
    },
  };
</script>

<style scoped>
.link{
    color: rgba(246, 226, 0,1);
}
</style>
