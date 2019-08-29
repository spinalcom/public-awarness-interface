<template>
    <div class="login-body normal">
        <request-user-information
                class="login-item"
                v-if="!agreed"
                @agreed="agreed = true"
                @leave="redirectToGoogle"
        ></request-user-information>
        <register-form
                class="login-item"
                v-else
                @saved="savedInfo"
        ></register-form>

    </div>
</template>

<script>
  import RegisterForm from '../components/RegisterForm.vue';
  import RequestUserInformation from '../components/RequestUserInformation.vue';



  export default {
    name: 'Login',
    components: { RequestUserInformation, RegisterForm },
    data() {
      return {
        agreed: false,
        user: {
          email: '',
          zipCode: -1,
          cgu: false,
          partner: false,
        },
        userAlreadyExist: false
      };
    },

    methods: {
      redirectToGoogle() {
        window.location.href = 'https://google.fr';
      },
      savedInfo( info ) {
        console.log('rese', info)
        this.$userManager
          .register( info.email, info.zipCode )
          .then( ( user ) => {
            if (typeof user !== 'undefined') {
              this.redirectToMainPage( user )
            } else {
              this.$userManager.getUserByEmail( info.email )
                .then(
                  this.redirectToMainPage( user )
                )
            }
          } ).catch( console.error );
      },
      redirectToMainPage( user ) {
        window.$cookies.set( 'user', user.info.id.get(), null, '/' );
        console.log(user)
        console.log(window.$cookies.get('user'));
        this.$router.push( '/' )
      }
    },
    mounted() {

      const cookie = window.$cookies.get( 'user' );
      if ((typeof cookie !== 'undefined' || cookie !== null)) {
        this.$userManager.connect( cookie )
          .then( ( res ) => {
            if (res) this.$router.push( '/' );
          } );
      }
    },
  };
</script>

<style scoped>
    .normal {
        background-image: url(../assets/background.png), url(../assets/colas.jpg);
        background-repeat: no-repeat, no-repeat;
        background-size: cover, cover;
    }

    .login-body {

        position: relative;
        width: 100%;
        height: 100%;
    }

    .login-item {
        width: 30%;
        height: 50%;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>
