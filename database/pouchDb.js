import PouchDB from 'pouchdb-react-native' ; 'pouchdb-core';

PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
export const localDBWOWDBUser = new PouchDB('RoracaUser', {adapter: 'asyncstorage'})
export const remoteDBUser = new PouchDB('http://admin:1234@192.168.1.156:5984/roracausers')

 export const StartSync = () => {
  localDBWOWDBUser.sync(remoteDBUser, {
    live: true, 
    retry: true
  }).on('change', function () {
   
    localDBWOWDBUser.allDocs({include_docs:true}).then(function(doc){
      console.log(doc)
  })
  }).on('error', function (err) {
    console.log(err);
  });
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const localDBWOWDBItem = new PouchDB('RoracaItem', {adapter: 'asyncstorage'})
export const remoteDBItem = new PouchDB('http://admin:1234@192.168.1.156:5984/roracaitem')

 export const StartsSync = () => {  
  localDBWOWDBItem.sync(remoteDBItem, {
    live: true, 
    retry: true
  }).on('change', function () {
   console.log('start sync')

   localDBWOWDBItem.allDocs({include_docs:true}).then(function(doc){
      console.log(doc)
      console.log('done sync')
  })
  }).on('error', function (err) {
    console.log(err);
  });
}