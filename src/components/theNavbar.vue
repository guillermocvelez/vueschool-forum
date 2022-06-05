<template>
  <header class="header" id="header">
    <router-link :to="{ name: 'Home' }" class="logo">
      <img src="@/assets/svg/vueschool-logo.svg" alt="" />
    </router-link>

    <div class="btn-hamburger">
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <nav class="navbar">
      <ul>
        <li class="navbar-user">
          <router-link :to="{ name: 'Profile' }">
            <img
              :src="authUser.avatar"
              class="avatar-small"
              :alt="`${authUser.name} profile picture`"
            />
            <span>
              {{ authUser.name }}
              <img class="icon-profile" src="" alt="" />
            </span>
          </router-link>

          <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item"><a href="">Ver perfil</a></li>
              <li class="dropdown-menu-item"><a href="">Salir</a></li>
            </ul>
          </div>
        </li>
      </ul>

      <!-- <ul>
        <li class="navbar-item">
          <a href="">Home</a>
        </li>
        <li class="navbar-item">
          <a href="">Category</a>
        </li>
        <li class="navbar-item">
          <a href="">Forum</a>
        </li>
        <li class="navbar-item">
          <a href="">Thread</a>
        </li>
        <li class="navbar-item">
          <a href="">My perfil</a>
        </li>
        <li class="navbar-item">
          <a href="">Salir</a>
        </li>
      </ul> -->
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["authUser"]),
  },
};
</script>

<style scoped></style>
