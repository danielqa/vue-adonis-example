<template>
  <div>
    <menu-bar></menu-bar>
    <b-loading :active="HttpRequest.hasPendingRequests()" :canCancel="true"></b-loading>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{$route.meta.title}}</h1>
        </div>
      </div>
    </section>
    <b-notification :active="FlashMessage.hasPendingMessages()" :type="`is-${FlashMessage.type}`" has-icon>
      <p v-for="message in FlashMessage.messages">{{message}}</p>
    </b-notification>
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>App</strong> by <a href="http://github.com/danielqa">Daniel Queiroz</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/danielqa">
              <b-icon pack="fa" icon="github"></b-icon>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import MenuBar from './components/layout/Menu';
  import HttpRequest from './services/http-request';
  import FlashMessage from './services/flash-message';

  export default {
    components: {
      MenuBar,
    },
    data() {
      return {
        HttpRequest,
        FlashMessage,
      };
    },
  };
</script>
