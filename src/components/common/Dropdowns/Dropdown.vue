<template>
  <div class="dropdown">
    <div href="#" class="dropdown__title" @click="optionVisible = !optionVisible">
      <p class="dropdown__title_name">{{ selected }}</p>
      <img v-if="!optionVisible" src="@/assets/arrow-passive.svg" alt="arrow" />
      <img v-if="optionVisible" src="@/assets/arrow-active.svg" alt="arrow" />
    </div>
    <div class="dropdown__options" v-if="optionVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="dropdown__options_item"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      optionVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.optionVisible = false;
    },
  },
};
</script>

<style lang="scss">
.dropdown {
  background-color: #fff;
  position: relative;
  cursor: pointer;
  width: 232px;
  z-index: 1;
  &__options {
    position: absolute;
    top: 33px;
    width: 230px;
    background-color: #fff;
    border: 1px solid #e0e5e6;
    @include br(2px);
    &_item {
      @include font(Roboto, 400, 14px, 16px, #2b2839);
      padding: 8px 12px;
      margin: 0;
    }
  }
  &__title {
    @include font(Roboto, 700, 14px, 16px, #2b2839);
    display: flex;
    justify-content: space-between;
    border: 1px solid #e0e5e6;
    padding: 8px 12px;
  }
}
</style>
