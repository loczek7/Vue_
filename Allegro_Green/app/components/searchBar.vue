<template>
    <div class="search-bar-container">
        <div class="top-row">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxlYWYtaWNvbiBsdWNpZGUtbGVhZiI+PHBhdGggZD0iTTExIDIwQTcgNyAwIDAgMSA5LjggNi4xQzE1LjUgNSAxNyA0LjQ4IDE5IDJjMSAyIDIgNC4xOCAyIDggMCA1LjUtNC43OCAxMC0xMCAxMFoiLz48cGF0aCBkPSJNMiAyMWMwLTMgMS44NS01LjM2IDUuMDgtNkM5LjUgMTQuNTIgMTIgMTMgMTMgMTIiLz48L3N2Zz4=" alt="Logo" class="logo-search"/>
            <p>alle Green</p>
            <div class="search-bar">
                <input type="text" placeholder="Search..." />
                <span class="search-icon">🔍</span>
            </div>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItaWNvbiBsdWNpZGUtdXNlciI+PHBhdGggZD0iTTE5IDIxdi0yYTQgNCAwIDAgMC00LTRIOWE0IDQgMCAwIDAtNCA0djIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiLz48L3N2Zz4=" alt="Użytkownik" class="user-search"/>
            <img src=" data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNob3BwaW5nLWNhcnQtaWNvbiBsdWNpZGUtc2hvcHBpbmctY2FydCI+PGNpcmNsZSBjeD0iOCIgY3k9IjIxIiByPSIxIi8+PGNpcmNsZSBjeD0iMTkiIGN5PSIyMSIgcj0iMSIvPjxwYXRoIGQ9Ik0yLjA1IDIuMDVoMmwyLjY2IDEyLjQyYTIgMiAwIDAgMCAyIDEuNThoOS43OGEyIDIgMCAwIDAgMS45NS0xLjU3bDEuNjUtNy40M0g1LjEyIi8+PC9zdmc+" alt="Koszyk" class="cart-search"/>
        </div>
        <hr />
        <NavTop />
    </div>
</template>

<script setup lang="ts">
        
</script>

<style scoped lang="scss">
.search-bar-container {
  background-color: #f0f9f6;
  padding: 16px 0;

  .top-row {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 20px;

    .logo-search {
      width: 32px;
      height: 32px;
      color: #2d5a4d;
      flex-shrink: 0;
    }

    p {
      font-size: 20px;
      font-weight: 600;
      color: #2d5a4d;
      margin: 0;
      white-space: nowrap;
    }

    .search-bar {
      flex: 1;
      display: flex;
      align-items: center;
      background-color: white;
      border: 2px solid #52b788;
      border-radius: 8px;
      padding: 8px 12px;

      input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 14px;
        color: #2d5a4d;

        &::placeholder {
          color: #95b8a8;
        }
      }

      .search-icon {
        font-size: 18px;
        color: #52b788;
        margin-left: 8px;
      }
    }

    .user-search,
    .cart-search {
      width: 28px;
      height: 28px;
      color: #2d5a4d;
      cursor: pointer;
      flex-shrink: 0;

      &:hover {
        color: #52b788;
      }
    }
  }

  hr {
    max-width: 1200px;
    margin: 16px auto;
    border: none;
    border-top: 1px solid #d1e7e0;
  }
}
</style>