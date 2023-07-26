<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
     <p style="font-size:30px;"><strong>Coding with Samanja</strong></p>
    </router-link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/" class="button" style="background-color: #001a1f; color:white">
            <strong>Twitter</strong>
          </router-link>
          <router-link to="/" class="button is-light">
           <strong> Linkedin</strong>
          </router-link>

          <router-link to="/" class="button"  style="background-color: #001a1f; color:white">
           <strong> Meta </strong>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</nav>


  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar{
    height:100px;
}

</style>