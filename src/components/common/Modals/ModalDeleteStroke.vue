<template>
  <div class="modal-delete-stroke">
    <div class="modal-delete-stroke__inner">
      <span>удалить</span>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.modal-delete-stroke {
  z-index: 1;
  cursor: pointer;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(182, 182, 182, 0.25);
  border-radius: 2px;
  transition: 0.2s;
  &:hover {
    span {
      color: #045da7;
      transition: 0.2s;
      &::before {
        @include pseudo;
        background: url("@/assets/trashHover.svg");
        background-size: 24px;
        width: 24px;
        height: 24px;
        left: -27px;
        top: -4px;
      }
    }
  }
  &__inner {
    display: flex;
    padding: 12px 40px 12px 35px;
    span {
      @include font(Roboto, 400, 14px, 16px, #2b2839);
      position: relative;
      &::before {
        @include pseudo;
        background: url("@/assets/trash.svg");
        background-size: 24px;
        width: 24px;
        height: 24px;
        left: -27px;
        top: -4px;
      }
    }
  }
}
</style>
