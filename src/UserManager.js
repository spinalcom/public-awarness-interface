import {
  SpinalContext,
  SpinalNode,
  SPINAL_RELATION_LST_PTR_TYPE,
} from 'spinal-env-viewer-graph-service';
import getGraph from './spinal-connector';

const ColasContextName = 'ColasUser';
const ColasUserType = 'ColasUser';
const ColasRelationName = 'ColasUserRelationName';
const ColasRelationType = SPINAL_RELATION_LST_PTR_TYPE;

/**
 * Class used to retrieve the user
 */
export default class UserManager {
  constructor() {
    this.initialized = this.init();
  }
  
  
  init() {
    return getGraph()
      .then( ( graph ) => {
        this.graph = graph;
      } )
      .then( () => this.graph.getChildren() )
      .then( ( children ) => {
        for (let i = 0; i < children.length; i++) {
          if (children[i].info.name.get() === ColasContextName) {
            return children[i];
          }
        }
        return undefined;
      } )
      .then( ( context ) => {
        if (typeof context !== 'undefined') this.colasUserContext = context;
        else {
          const colasContext = new SpinalContext( ColasContextName );
          this.graph.addContext( colasContext )
            .then( ( c ) => { this.colasUserContext = c; } );
        }
      } );
  }
  
  register( email, zip ) {
    return this.initialized
      .then( () => this.colasUserContext.getChildren( [ColasRelationName] ) )
      .then( ( children ) => {
        for (let i = 0; i < children.length; i++) {
          if (children[i].info.email.get() === email) return false;
        }
        return true;
      } )
      .then( ( canRegister ) => {
        if (canRegister) {
          const user = new SpinalNode( email, undefined, undefined );
          const info = {
            name: email,
            id: user.info.id.get(),
            type: ColasUserType,
            connections: [],
            isAdmin: false,
            email,
            zip
          };
          user.mod_attr( 'info', info);
          return this.colasUserContext.addChildInContext( user, ColasRelationName, ColasRelationType, this.colasUserContext );
        }
        return undefined;
      } )
      .then( ( user ) => {
        return user;
      } );
  }
  
  connect( id ) {
    return this.initialized
      .then( () => this.colasUserContext.getChildren( [ColasRelationName] ) )
      .then( ( children ) => {
        for (let i = 0; i < children.length; i++) {
          if (children[i].info.id.get() === id) {
            const user = children[i];
            user.info.connections.push( new Date().getTime() );
            return user;
          }
        }
        return false;
      } );
  }
  
  connectAdmin(email, password){
    return this.initialized
      .then( () => this.colasUserContext.getChildren( [ColasRelationName] ) )
      .then( ( children ) => {
        for (let i = 0; i < children.length; i++) {
          if (children[i].info.email.get() === email && children[i].info.password.get() === password) {
            return children[i];
          }
        }
        return false;
      } );
    
  }
  
  getUsers() {
    return this.initialized
      .then( () => this.colasUserContext.getChildren( [ColasRelationName] ) );
  }
  
  getUser( id ) {
    return this.initialized
      .then( () => this.colasUserContext.getChildren( [ColasRelationName] ) )
      .then( ( children ) => {
        for (let i = 0; i < children.length; i++) {
          if (children[i].info.id.get() === id) {
            return children[i];
          }
        }
        return undefined;
      } );
  }
  
  getUserByEmail( email ) {
    return this.initialized
      .then( () => this.colasUserContext.getChildren( [ColasRelationName] ) )
      .then( ( children ) => {
        for (let i = 0; i < children.length; i++) {
          if (children[i].info.email.get() === email) {
            return children[i];
          }
        }
        return undefined;
      } );
  }
}
