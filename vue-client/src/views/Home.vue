<template>
  <div>
    <hello></hello>
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management with
      <a href="https://github.com/vuejs/vuex-router-sync" target="_blank">vuex-router-sync</a> to keep vue-router and vuex store in sync.
    </p>
    <p>
      Also, check <a href="https://github.com/mzabriskie/axios" target="_blank">axios</a> for making HTTP request for both client-side and server-side.
    </p>
  </div>
</template>

<script>
  import Hello from '../components/Hello';

  export default {
    components: {
      Hello,
    },
  };
</script>
