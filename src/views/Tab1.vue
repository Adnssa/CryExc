<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>All Coins</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">


      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Coin List</ion-title>
        </ion-toolbar>
      </ion-header>


    <div>
      <ion-list id="example-1"  v-if="users != null">
        <ion-item v-for="item in users.data" :key="item.name">
          <ion-avatar slot="start">
            <ion-img :src="image" />
          </ion-avatar>
          <ion-label>
            <h2>{{item.name}}</h2>
            <h3><b>Price:</b> {{item.quote.USD.price}}$</h3>
            <p> {{item.quote.USD.market_cap}}$ Market Cap</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </div>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
//import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonImg } from '@ionic/vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel} from '@ionic/vue';
import { computed, onMounted, ref} from 'vue';
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent( {
  name: 'Tab1',
  //components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonLabel, IonItem, IonImg },
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonLabel, IonItem},
  setup() {

  const image = computed(() => require('../../public/assets/icon/eth-icon.png'));
  const data = JSON.parse('{"menu": {"id": "file","value": "File","popup": {"menuitem": [{"value": "New", "onclick": "CreateNewDoc()"},{"value": "Open", "onclick": "OpenDoc()"},{"value": "Close", "onclick": "CloseDoc()"}]}}}');

  //const users = ref<Users>(new Users);
  const users = ref<any>(null);

  //watch(this.users, changes);
  onMounted( () => {
    //axios.post('https://localhost:3000/users', data, config).then(
    axios.get('http://localhost:3000/users').then(
      response => {
        const st: string = response.data;
        console.log(st);
        //console.log(JSON.parse(st));
        users.value = st; // assigns the data from api call to the users variable
    })
  });

  return {
    image,
    data,
    users
    }
  },

});
</script>

<style>


</style>
