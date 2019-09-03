<template>
    <div>
        <admin-login class="login-form" v-if="!loggedIn"
               @connect="connect"
               :displayErrorText="displayErrorText"
        ></admin-login>
        <div v-else>
            <v-btn @click="exportCSV"> Export CSV</v-btn>
            <v-btn @click="exportExcel"> Export Excel</v-btn>
            <v-data-table
                    :headers="headers"
                    :items="users"
                    class="elevation-2"
            >

                <template v-slot:items="props">
                    <td>{{ props.item.email }}</td>
                    <td class="text-xs-right">{{ props.item.zipcode }}</td>
                    <td class="text-xs-right">{{ props.item.date }}</td>
                </template>
            </v-data-table>

            <p>Nombre de connection total: {{nbCo}}</p>
            <p>Nombre d'utilisateur total: {{nbUser}}</p>
        </div>
    </div>
</template>

<script>
  import AdminLogin from '../components/AminLogin.vue';


  import {
    exportToXLSX,
    exportToCSV
  } from '../export/exportFunc';

  export default {
    name: 'Admin',
    components: { AdminLogin },
    data() {
      return {
        users: [],
        headers: [
          { text: 'E-mail', value: 'email' },
          { text: 'Code postal', value: 'zipcode' },
          { text: 'Date de connection', value: 'date' },
          { text: 'Heure de connection', value: 'hour' },
          { text: 'Administrateur', value: 'isAdmin' },
        ],
        loggedIn: false,
        displayErrorText: false,
        nbUser: 0
      };
    },
    computed: {
      nbCo() {
        return this.users.length;
      },
    },
    methods: {
      exportCSV() {
        exportToCSV( 'users', this.users );
      },
      exportExcel() {
        exportToXLSX( 'user', this.users );
      },
      connect( event ) {
        this.displayErrorText = false;
        this.$userManager.connectAdmin( event.email, event.password )
          .then( res => {
            if (typeof res !== "boolean")
            {
              this.loggedIn = true;
              this.init()
            }
            else{
              this.displayErrorText = true;
            }
          } )

      },
      init() {
        this.$userManager.getUsers()
          .then( users => {
            this.nbUser = users.length;
            for (let i = 0; i < users.length; i++) {
              const user = users[i];
              for (let j = 0; j < user.info.connections.length; j++) {
                const connection = user.info.connections[i];
                if (typeof connection !== "undefined")
                  this.users.push( {
                    email: user.info.email.get(),
                    zipcode: user.info.zip.get(),
                    date:
                      new Date( user.info.connections[i].get() ).toLocaleDateString(),
                    hour:
                      new Date( user.info.connections[i].get() ).toLocaleTimeString(),
                    isAdmin: user.info.isAdmin.get().toString()
                  })
              }
            }
          } );
      }
    },
    mounted() {

      const cookie = window.$cookies.get( 'user' );
      if ((typeof cookie !== 'undefined' || cookie !== null)) {
        this.$userManager.getUser( cookie ).then( user => {
          if (typeof user !== 'undefined' && user.info.hasOwnProperty( 'isAdmin' )
            &&
            user.info.isAdmin.get())
          {
            this.loggedIn = true;
            this.init();
          }
        } )
      }
    }

  }
</script>

<style scoped>
    .login-form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
</style>
