<template>
    <div class="home">

        <div class="viewer">
            <spinal-forge-viewer-vue :onInitialize="onInitialize">

            </spinal-forge-viewer-vue>
            <img id="logo-colas" src="../assets/logo-colas.png"/>
            <img id="logo-spinalcom" src="../assets/logo-spinalcom.png"/>
        </div>
        <div class="header">
            <!--<horizontal-date-picker @change="onDateChange"/>-->
            <timeline-video-slider
                    v-if="initialized"
                    :startDate="startDate"
                    :endDate="endDate"
                    :max="duration"
                    @change="onDateChange"
            >

            </timeline-video-slider>
        </div>


    </div>
</template>

<script>

  import { SpinalForgeViewerVue } from 'spinal-forge-viewer-vue';
  import { SpinalGraphService } from 'spinal-env-viewer-graph-service';
  import getGraph from '../spinal-connector';
  import loadModelPtr from '../utils';
  import HorizontalDatePicker
    from "../components/Timlines/HorizontalDatePicker";
  import { getValues } from "../ForgeWorkerFunction";
  import TimelineVideoSlider from "../components/Timlines/TimelineVideoSlider";
  import moment from 'moment'

  export default {
    name: 'home',
    components: {
      TimelineVideoSlider,
      HorizontalDatePicker,
      SpinalForgeViewerVue
    },
    data() {
      return {
        viewerManager: null,
        attrName: '',
        graph: null,
        timelineContext: null,
        bimFileContext: null,
        model: null,
        loaded: false,
        startTime: 999999999999990,
        endTime: 0,
        dbIds: {},
        initialized: false,
        lastDbIds: []
      };
    },
    computed: {
      startDate: function () {
        if (this.startTime === 999999999999990)
          return new moment();

        return new moment( new Date( this.startTime ) ).subtract( 1, 'd' )
      },
      endDate: function () {
        if (this.endTime === 0)
          return new moment();

        return new moment( new Date( this.endTime ) ).add( 1, 'd' )
      },
      duration: function () {
        if (this.endTime === 0 || this.startTime === 999999999999990)
          return 730;

        return this.endDate.diff( this.startDate, 'day' );
      }
    },
    methods: {
      onInitialize( viewerManager ) {
        this.viewerManager = viewerManager;

        getGraph()
          .then( graph => SpinalGraphService.setGraph( graph ).then( () => {
            this.graph = graph;
            return SpinalGraphService.waitForInitialization()
          } ) )
          .then( () => SpinalGraphService.getContext( 'Timeline' ) )
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
            return this.viewerManager.start( this.path, true )
          } )
          .then( ( m ) => {
            this.model = m;
            this.loaded = true;
            return getValues( this.model, this.attrName )
          } )
          .then( res => {
            this.dbIds = res['dbIds'];
            for (let key in this.dbIds) {
              if (this.dbIds.hasOwnProperty( key )) {
                let intKey = parseInt( key );
                if (!isNaN( intKey )) {
                  this.startTime = Math.min( intKey, this.startTime );
                  this.endTime = Math.max( intKey, this.endTime );
                }
              }
            }
            this.viewerManager.viewer.setProgressiveRendering( false );
            this.viewerManager.viewer.navigation.setCameraUpVector(
              new THREE.Vector3(-0.4082483040149399,
                0.4082483175660186,
                0.8164965606011091)
            );
            this.viewerManager.viewer.navigation.setView(
              new THREE.Vector3(3266.613776624011,-3705.1753901778,3340.975522291141),
              new THREE.Vector3(-170.97430537761724, -267.58719407153,
                -96.61287349825356));

            this.viewerManager.viewer.displayViewCubeUI(false);
            this.initialized = true;
          } );
      },
      onDateChange( e ) {
        if (typeof this.model === "undefined" || this.model === null)
          return;

        const date = new Date( e.format() );

        let res = [];
        for (let key in this.dbIds) {
          if (this.dbIds.hasOwnProperty( key )) {
            if (parseInt( key ) <= date.getTime())
              this.dbIds[key].forEach( id => {
                if (res.indexOf( id ) === -1)
                  res.push( id )
              } )
          }
        }
        let toDisplay = [];
        for (let i = 0; i < this.lastDbIds.length; i++) {
          if (res.indexOf(this.lastDbIds[i]) === -1){
            toDisplay.push(this.lastDbIds[i])
          }
        }

        this.viewerManager.show(toDisplay);
        this.lastDbIds = res;
        this.viewerManager.hide( res, this.model );
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
      }
    },
    mounted() {
      window.$cookies.config( '90d' );

      const cookie = window.$cookies.get( 'user' );
      if (typeof cookie === 'undefined' || cookie === '' || cookie === null) this.$router.push( 'login' );
      else {
        this.$userManager
          .connect( cookie )
          .then( ( res ) => {
            if (!res) this.$router.push( 'login' );
          } );
      }
    },
  };
</script>

<style scoped>


    #logo-colas {
        position: absolute;
        bottom: 20px;
        left: 20px;
        z-index: 1;
    }

    #logo-spinalcom {
        position: absolute;
        bottom: 20px;
        right: 20px;
        z-index: 1;
    }

    #viewer {
        height: 100vh;
        position: relative;
    }

    .header {
        position: absolute;
        top: 10%;
        width: 100vw;
        z-index: 1;
    }
</style>
