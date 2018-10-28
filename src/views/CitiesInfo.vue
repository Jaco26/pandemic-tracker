<template>
  <div class="cities">
    <h1>Cities</h1>
    <ul>
      <li v-for="(city, i) in cities" :key="i">
        {{city}}
      </li>
    </ul>
  </div>
</template>

<script>
import { cities } from '../lists/cities'
export default {
  data() {
    return {
      cities: cities,
    }
  }
}
</script>

