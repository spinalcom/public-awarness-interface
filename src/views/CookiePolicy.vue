<template>
    <div>
        <h1>
            CHARTE D'UTILISATION DES COOKIES
        </h1>
        <p>
            Un cookie est un petit fichier de données composé de lettres et de
            chiffres qu’un site Web installe sur l’appareil que vous utilisez
            pour accéder à Internet. Les cookies ont différentes utilités. Nous
            utilisons des cookies pour nous aider à améliorer notre site et pour
            obtenir des informations sur l’utilisation du site Web. Certains
            tiers installent également des cookies sur votre appareil lorsque
            vous parcourez notre site Web.
        </p>
        <p>
            La plupart des navigateurs Web vous permettent de contrôler
            l’installation de cookies sur votre appareil via les paramètres du
            navigateur. Pour en savoir plus sur les cookies, notamment comment
            voir quels cookies ont été installés et comment les bloquer, les
            gérer et les supprimer, rendez-vous sur
            www.allaboutcookies.org/manage-cookies/.
        </p>
        <p>

            Si vous n’avez pas paramétré votre navigateur pour que celui-ci
            refuse les cookies, notre système installera des cookies sur votre
            appareil dès que vous visiterez une page de notre site Web.
        </p>


        <h2>
            TYPES DE COOKIES UTILISÉS PAR Spinalcom
        </h2>

        <h3> Cookies persistants</h3>
        <p>
            Ces cookies sont conservés dans l’un des sous-dossiers de votre
            navigateur jusqu’à ce que vous les supprimiez manuellement ou que
            votre navigateur les supprime en fonction de la durée spécifiée dans
            le fichier du cookie persistant.
        </p>
        <p> Les cookies persistants aident les sites Web à se souvenir de vos
            informations et de vos paramètres lorsque vous les consultez
            ultérieurement. Cela facilite et accélère l’accès au site et offre
            une meilleure expérience utilisateur.
        </p>


        <p>
            Vous trouverez davantage d’informations sur les cookies individuels
            que nous utilisons et leur utilité dans le tableau ci-dessous :
        </p>

        <v-data-table
                :headers="headers"
                :items="cookies"
                class="elevation-1"
                hide-actions
                hide-headers
                dark
        >
            <template v-slot:items="props">
                <td class="text-xs-right">{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.kind }}</td>
                <td class="text-xs-right">{{ props.item.type }}</td>
                <td class="text-xs-right">{{ props.item.usage }}</td>
            </template>
        </v-data-table>

    </div>
</template>

<script>
  export default {
    name: "CookiePolicy",
    data(){
      return {
        headers: [
          {
            text: 'Nom du cookie',
            value: 'name'
          },
          {
            text: 'Nature du cookie',
            value: 'kind'
          },
          {
            text: 'Type/Source du cookie',
            value: 'type'
          },
          {
            text: 'Utilisation/Données Collectées',
            value: 'usage'
          }
        ],
        cookies: [
          {
            name: 'user',
            kind:'Il s’agit d’un cookie persistant qui reste actif pendant troi mois.',
            type: 'Cookie Propriétaire (spinalcom)',
            usage:
              'Ce cookie est installer lorsque vous vous connectez sur la plateforme'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>