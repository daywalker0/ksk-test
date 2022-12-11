<template>
  <footer class="footer">
    <div class="footer__container">
      <span>КСК.TЗ</span>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss">
.footer {
  background-color: #ececec;
  &__container {
    max-width: 1900px;
    min-height: 40px;
    display: flex;
    align-items: center;
    span {
      @include font(Roboto, 400, 14px, 24px, #393b3d);
    }
  }
}
</style>
