import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

createApp(App).mount('#app')

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2Q2NzUzZjNkMzYwZmRlYWZiMDNmMTA0MjQ3MWEwYSIsInN1YiI6IjY1ZTgzZGJhYzE1Zjg5MDE2MzE2MmYwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cs395RSDqKtn5FguIQZv90PrEc1Tf5sJX_c480Z9p_A'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));