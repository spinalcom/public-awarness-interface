<template>
    <div class="background">
        <!--<request-user-information
                @agreed="agreed = true"
                @leave="redirectToGoogle"
        ></request-user-information>-->
        <register-form
                class="center"
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
        if (typeof user !== "undefined"){
          this.$cookies.set( 'user', user.info.id.get(), null, '/' );
          this.$router.push( '/' )
        }
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
    .background {
        background-image: url(../assets/colas.jpg);
        background-repeat: no-repeat, no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

</style>
