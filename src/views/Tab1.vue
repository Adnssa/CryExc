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

      <ion-list id="example-1">
        <ion-item v-for="item in data.menu.popup.menuitem" :key="item.value">
          <ion-avatar slot="start">
            <ion-img :src="image" />
          </ion-avatar>
          <ion-label>
            <h2>{{ item.value }}</h2>
            <h3><b>Price:</b> 0.0000023e</h3>
            <p>9.000.000.000 Market Cap</p>
          </ion-label>
        </ion-item>
      </ion-list>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonImg } from '@ionic/vue';
import { computed } from 'vue';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonLabel, IonItem, IonImg },
  setup() {

  const image = computed(() => require('../../public/assets/icon/eth-icon.png'))
  const data = JSON.parse('{"menu": {"id": "file","value": "File","popup": {"menuitem": [{"value": "New", "onclick": "CreateNewDoc()"},{"value": "Open", "onclick": "OpenDoc()"},{"value": "Close", "onclick": "CloseDoc()"}]}}}')

  return {
    image,
    data
    }

  }
}
</script>
