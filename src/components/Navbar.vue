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

    
    <div id="user">
      <img src="/public/useryellow.webp" alt="">
      <i class="fa-solid fa-chevron-down"></i>
    </div>

    <div id="logs-btn">

      <button id="sign-in">
        Sign-In
      </button>

      <button id="sign-up">
        Sign-Up
      </button>
    </div>    
  </nav>

</template>


<style lang="scss" scoped>

nav {
  width: 100%;
  height: 80px;
  background: rgb(5,1,1);
  background: linear-gradient(180deg, rgba(5,1,1,1) 0%, rgba(87,15,15,1) 20%, rgba(162,28,28,1) 50%, rgba(184,27,27,1) 80%, rgba(213,37,37,1) 100%);
  display: flex;
  align-items: center;
  padding: 40px;
  justify-content: space-between;

  button {
    cursor: pointer;
    padding: 6px;
    border: none;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    opacity: 0.8;
    font-weight: bold;
  }
}

#user {
  display: flex;
  align-items: center;
  gap: 4px;
  
  img {
    width: 30px;
  }
}

#logs-btn {
  display: flex;
  gap: 20px;
}

#sign-in {
  background-color: red;
  color: white;
}

#sign-up {
  background-color: white;
  color: red;
}

</style>
