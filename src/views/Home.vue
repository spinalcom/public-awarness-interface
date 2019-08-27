<template>
    <div class="home">

        <div class="viewer">
            <spinal-forge-viewer-vue :onInitialize="onInitialize">

            </spinal-forge-viewer-vue>
        </div>
        <div class="header">
            <horizontal-date-picker @change="onDateChange"/>
        </div>


    </div>
</template>

<script>

  import { SpinalForgeViewerVue } from 'spinal-forge-viewer-vue';
  import { SpinalGraphService } from 'spinal-env-viewer-graph-service';
  import getGraph from '../spinal-connector';
  import loadModelPtr from '../utils';
  import UserManager from '../UserManager';
  import HorizontalDatePicker
    from "../components/Timlines/HorizontalDatePicker";
  import filterDb
    from "../ForgeWorkerFunction";

  export default {
    name: 'home',
    components: { HorizontalDatePicker, SpinalForgeViewerVue },
    data() {
      return {
        viewerManager: null,
        attrName: '',
        graph: null,
        timelineContext: null,
        bimFileContext: null,
        dbIds: [],
        model: null,
        loaded: false,
      };
    },
    methods: {
      onInitialize( viewerManager ) {
        this.viewerManager = viewerManager;
        getGraph()
          .then( graph => SpinalGraphService.setGraph( graph ).then( () => {
            this.graph = graph;
            return SpinalGraphService.waitForInitialization()
              .then( () => SpinalGraphService.getContext( 'Timeline' ) );
          } ) )
          .then( ( context ) => {
            if (typeof context !== 'undefined') {
              this.timelineContext = context;
              if (context.hasOwnProperty( "info" ) &&
                context.info.hasOwnProperty( "attrName" ))
                this.attrName = context.info.attrName.get();
            } else {
              alert( 'Timeline context not configured' );
            }

            return SpinalGraphService.getContext( 'BimFileContext' );
          } )
          .then( ( context ) => {
            this.bimFileContext = context;
            return this.bimFileContext;
          } )
          .then( () => this.getSvf() )
          .then( ( svf ) => {
            this.path = window.location.origin + svf;
            this.viewerManager.start( this.path, true )
              .then( ( m ) => {
                this.model = m;
                this.loaded = true;
              } );
          } );
      },
      onDateChange( e ) {
        const date = new Date( e.format() );
        filterDb( this.model, this.attrName, date )
          .then( ( obj ) => {
            this.dbIds = [];
            this.viewerManager.show( 1, this.model );
            this.dbIds = obj.dbIds;
            this.viewerManager.hide( this.dbIds, this.model );
          } );
      },
      getAttrName() {
        return new Promise( ( resolve ) => {
          SpinalGraphService.getContext( 'Timeline' )
            .then( ( context ) => {
              if (typeof context !== 'undefined') {
                this.attrName = context.info.attrName.get();
                resolve();
              }
            } );
        } );
      },
      loadSVF( bimfile ) {
        return loadModelPtr( bimfile.element.ptr )
          .then( elem => loadModelPtr( elem.currentVersion ) )
          .then( ( elem ) => {
            // eslint-disable-next-line no-prototype-builtins
            if (elem.hasOwnProperty( 'items' )) {
              for (let i = 0; i < elem.items.length; i++) {
                if (elem.items[i].path.get().indexOf( 'svf' ) !== -1) {
                  return elem.items[i].path.get();
                }
              }
            }
            return undefined;
          } );
      },

      getSvf() {
        return this.bimFileContext.getChildrenInContext( this.bimFileContext )
          .then( ( children ) => {
            if (typeof children !== 'undefined' && children.length > 0) {
              return this.loadSVF( children[0] );
            }
            return null;
          } );
      },
    },
    mounted() {
      window.$cookies.config( '90d' );

      const cookie = window.$cookies.get( 'user' );
      if (typeof cookie === 'undefined' || cookie === '' || cookie === null) this.$router.push( 'login' );
      else {
        const userManager = new UserManager();
        userManager
          .connect( cookie )
          .then( ( res ) => {
            if (!res) this.$router.push( 'login' );
          } );
      }
    },
  };
</script>

<style scoped>


    .viewer {
        height: 100vh;
        position: relative;
    }

    .header {
        position: absolute;
        top: 10%;
        width: 100vw;
    }
</style>
