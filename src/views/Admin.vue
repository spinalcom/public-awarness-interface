<template>
    <div>
        <login v-if="!loggedIn"
               @connect="connect"
        ></login>
        <div v-else>
            Nombre de connection total: {{nbCo}}

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
                    <td class="text-xs-right">{{ props.item.nbConnection }}</td>
                </template>

            </v-data-table>

        </div>
    </div>
</template>

<script>
  import Login from '../components/Login.vue';
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
        users: [
        ],
        headers: [
          { text: 'E-mail', value: 'email' },
          { text: 'Code postal', value: 'zipcode' },
          { text: 'Nombre de connection', value: 'nbConnection' },
        ],
        loggedIn: false
      };
    },
    computed: {
      nbCo() {
        let res = 0;
        for (let i = 0; i < this.users.length; i++) {
          res += this.users[i].nbConnection;
        }
        return res;
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
        console.log( event );
      }
    },
    mounted() {

      this.userManager = new UserManager();
      this.userManager.getUsers().then(users => {
        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          this.users.push({
            email: user.email.get(),
            zipcode: user.zipCode.get(),
            nbConnection: user.nbConnection.get()
          })
        }
      })
      const cookie = window.$cookies.get( 'user' );
      if ((typeof cookie !== 'undefined' || cookie !== null)) {
        this.userManager.getUser( cookie ).then( user => {
          if (user.hasOwnProperty( 'isAdmin' ) && user.isAdmin)
            this.loggedIn = true
        } )
      }
    }

  }
</script>

<style scoped>

</style>
