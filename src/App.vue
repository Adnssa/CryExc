<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  data() {
    return {
      todos: []
    }
},
methods: {
  async getTodos() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    this.todos = await res.json();
  }
},
created() {
  this.getTodos();
},
provide() {
    return {
      todos: this.todos
    }
  }
});
</script>
<style src='@ionic/core/css/core.css'></style>
<style src='@ionic/core/css/ionic.bundle.css'></style>
