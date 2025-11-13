<template>
    <div class="info-bar">
        <p>Free Shipping on Orders Over $50!</p>
        <p>24/7 Customer Support</p>
        <p>Easy Returns within 30 Days</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.info-bar {
  background: linear-gradient(135deg, #52b788 0%, #2d5a4d 100%);
  color: white;
  padding: 12px 0;
  text-align: center;

  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>