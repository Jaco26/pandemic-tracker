<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div id="nav">
        <router-link :to="{name:'home'}">Home</router-link> | 
        <router-link :to="{name:'cities'}">Cities</router-link>
      </div>
    </div>
    <div class="row">
      <div id="controls">
        <router-view></router-view>
      </div>
      <div class="col-xs-8">
        <game-board></game-board>
      </div>
    </div>
   
  </div>
</template>

<script>
import gameBoard from '@/components/Board'
export default {
  components: {
    gameBoard,
  }
}
</script>


<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#controls {
  width: 400px;
  background-color: beige;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
