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
      showDropdown: false,
      userImage: "/public/useryellow.webp"
    }
  },

  methods: {
    changeUserIcon(image) {
      this.userImage = image;
    }
  }
}
</script>


<template>

  <nav>

    <div id="logo">
      <img src="/public/mylogo.png" alt="">
      <div id="links">
        <ul>
          <li><a href="#">Tv Series</a></li>
          <li><a href="#">New Movies</a></li>
          <li><a href="#">Geners</a></li>
          <li><a href="#">Cooming Soon</a></li>
        </ul>
      </div>
    </div>

    <div id="logs-btn">

      <FilmFounder></FilmFounder>
      <div id="user" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
        <img :src="userImage" alt="">
        <i class="fa-solid fa-chevron-down"></i>
        <div v-if="showDropdown" id="dropdown-menu">
          <div @click="changeUserIcon('/public/useryellow.webp')">Yellow</div>
          <div @click="changeUserIcon('/public/usergreen.webp')">Green</div>
          <div @click="changeUserIcon('/public/userred.webp')">Red</div>
          <div @click="changeUserIcon('/public/userblue.webp')">Blue</div>
        </div>
      </div>

      <i class="fa-solid fa-bell">
        <div id="notification">
          2
        </div>
      </i>

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
  background: rgb(5, 1, 1);
  background: linear-gradient(180deg, rgba(5, 1, 1, 1) 0%, rgba(87, 15, 15, 1) 20%, rgba(162, 28, 28, 1) 50%, rgba(184, 27, 27, 1) 80%, rgba(213, 37, 37, 1) 100%);
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

  i {
    cursor: pointer;
  }
}

//#ID'S
#logo {
  display: flex;
  align-items: center;
}

#notification {
  width: 18px;
  height: 18px;
  border-radius: 12px;
  background-color: white;
  font-size: 14px;
  text-align: center;
  position: absolute;
  left: 18px;
  top: 18px;
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

#user {

  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    width: 30px;
  }

  #dropdown-menu {

    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    color: black;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 8px;
    z-index: 2;
    cursor: pointer;

    div {
      padding: 8px 16px;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
}

#links {

  list-style-type: none;
  padding: 0;

  li {
    display: inline;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 5px 10px;
  }
}
//.CLASSESS

.fa-bell {
  color: rgb(184, 62, 62);
  font-size: 30px;
  position: relative;
}

</style>
