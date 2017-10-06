<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item">
        <router-link tag="img" :src="logo" :to="{name: 'home'}"></router-link>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <b-dropdown>
          <a class="navbar-item" slot="trigger">
            <span>Menu</span>
            <b-icon pack="fa" icon="angle-down"></b-icon>
          </a>

          <b-dropdown-item custom>
            Logged as: <p><b>Daniel Queiroz</b></p>
          </b-dropdown-item>
          <hr class="dropdown-divider">
          <b-dropdown-item has-link>
            <router-link :to="{name: 'responsible-list'}">
              <div class="media">
                <b-icon class="media-left" pack="fa" icon="users"></b-icon>
                <div class="media-content">
                  <h3>Responsável</h3>
                  <small>Consultar</small>
                </div>
              </div>
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item has-link>
            <router-link :to="{name: 'responsible-new'}">
              <div class="media">
                <b-icon class="media-left" pack="fa" icon="user-plus"></b-icon>
                <div class="media-content">
                  <h3>Responsável</h3>
                  <small>Cadastrar</small>
                </div>
              </div>
            </router-link>
          </b-dropdown-item>
          <hr class="dropdown-divider">
          <b-dropdown-item value="settings">
            <b-icon pack="fa" icon="gear"></b-icon>
            Settings
          </b-dropdown-item>
          <b-dropdown-item value="logout">
            <b-icon pack="fa" icon="sign-out"></b-icon>
            Logout
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
  import logo from '../../assets/logo.png';

  export default {
    name: 'menu-bar',
    data() {
      return {
        logo,
      };
    },
  };
</script>
