<template>
    <div>
        <login class="login-form" v-if="!loggedIn"
               @connect="connect"
        ></login>
        <div v-else>
            <v-data-table
                    :headers="headers"
                    :items="users"
                    class="elevation-2 tab"
            >

                <template v-slot:items="props">
                    <td>{{ props.item.email }}</td>
                    <td class="text-xs-right">{{ props.item.zipcode }}</td>
                    <td class="text-xs-right">{{ props.item.date }}</td>
                </template>

            </v-data-table>


            <div class="summary">
                <div class="summary-text">
                    <p>Nombre de connection total: {{users.length}}</p>
                    <p>Nombre d'utilisateur: {{nbUser}}</p>
                </div>
                <div class="summary-action">
                    <v-btn @click="exportCSV"> Export CSV</v-btn>
                    <v-btn @click="exportExcel"> Export Excel</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Login from '../components/AminLogin.vue';
  import UserManager from '../UserManager';

  import {
    exportToXLSX,
    exportToCSV
  } from '../export/exportFunc';

  export default {
    name: 'Admin',
    components: { Login },
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
        nbUser:0
      };
    },

    methods: {
      exportCSV() {
        exportToCSV( 'users', this.users );
      },
      exportExcel() {
        exportToXLSX( 'user', this.users );
      },
      connect( event ) {
        this.$userManager.connectAdmin( event.email, event.password )
          .then( res => {
            if (res !== false)
              this.loggedIn = true
          } )
      }
    },
    mounted() {
      this.$userManager.getUsers().then( users => {
        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          this.nbUser++;
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
              } )
          }
        }
      } );
      const cookie = window.$cookies.get( 'user' );
      if ((typeof cookie !== 'undefined' || cookie !== null)) {
        this.$userManager.getUser( cookie ).then( user => {
          if (typeof user !== 'undefined' && user.info.hasOwnProperty( 'isAdmin' )
            && user.info.isAdmin.get())
            this.loggedIn = true
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
    .summary{

    }

    .summary-text{

    }
</style>
