<template>
  <div class="footer">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxlYWYtaWNvbiBsdWNpZGUtbGVhZiI+PHBhdGggZD0iTTExIDIwQTcgNyAwIDAgMSA5LjggNi4xQzE1LjUgNSAxNyA0LjQ4IDE5IDJjMSAyIDIgNC4xOCAyIDggMCA1LjUtNC43OCAxMC0xMCAxMFoiLz48cGF0aCBkPSJNMiAyMWMwLTMgMS44NS01LjM2IDUuMDgtNkM5LjUgMTQuNTIgMTIgMTMgMTMgMTIiLz48L3N2Zz4=" alt="Logo" class="logo-footer"/>
    <strong>Bądź  na bieżąco z ekologicznymi nowościami</strong>
    <p> Zapisz się na newlettera</p>
    <input type="email" placeholder="Twój email" />
    <button class="footer-button">Zapisz się</button>
    <p>&copy; 2025 Allegro Green. All rights reserved.</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
  background-color: #2d5a4d;
  color: white;
  padding: 40px 20px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  .logo-footer {
    width: 40px;
    height: 40px;
    color: #52b788;
    margin-bottom: 16px;
  }

  strong {
    display: block;
    font-size: 18px;
    margin-bottom: 8px;
    color: #52b788;
  }

  p {
    margin: 8px 0;
    font-size: 14px;
    color: #d1e7e0;

    &:last-child {
      margin-top: 24px;
      font-size: 12px;
      color: #95b8a8;
    }
  }

  input {
    padding: 10px 14px;
    border: 2px solid #52b788;
    border-radius: 6px;
    background-color: white;
    color: #2d5a4d;
    font-size: 14px;
    margin: 12px 0;
    width: 100%;
    max-width: 300px;

    &::placeholder {
      color: #95b8a8;
    }
  }

  .footer-button {
    background-color: #52b788;
    color: white;
    border: none;
    padding: 10px 24px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: 8px;

    &:hover {
      background-color: #40916c;
    }
  }
}
</style>