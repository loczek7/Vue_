<template>
  <div class="nav-top">
    <ul>
        <li><NuxtLink to="/">Wszystkie kategorie</NuxtLink></li>
        <li><NuxtLink to="/product">Dom i ogród</NuxtLink></li>
        <li><NuxtLink to="/contact">Uroda</NuxtLink></li>
        <li><NuxtLink to="/services">Moda</NuxtLink></li>
        <li><NuxtLink to="/about">Elektronika</NuxtLink></li>
        <li><NuxtLink to="/blog">Sport i rekreacja</NuxtLink></li>

    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.nav-top {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;

    li {
      a {
        color: #2d5a4d;
        text-decoration: none;
        font-weight: 500;
        font-size: 15px;
        padding: 8px 0;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;

        &:hover {
          color: #52b788;
          border-bottom-color: #52b788;
        }
      }
    }
  }
}
</style>