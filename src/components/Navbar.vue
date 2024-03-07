<script>
import FilmFounder from '../components/FilmFounder.vue';
import { store } from '../store.js';

export default {
  components: {
    FilmFounder
  },

  data() {
    return {
      store,
    }
  },
}
</script>


<template>

  <nav>

    <div>
      <img src="/public/mylogo.png" alt="">
    </div>
    
    <FilmFounder></FilmFounder>

  </nav>

</template>


<style lang="scss">

nav {
  width: 100%;
  height: 80px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(58,9,121,1) 25%, rgba(59,28,134,1) 34%, rgba(50,35,134,1) 45%, rgba(28,51,134,1) 65%);
  display: flex;
  align-items: center;
  padding: 40px;
  justify-content: space-between;
}

</style>
