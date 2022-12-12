<template>
  <div class="sorting">
    <div class="sorting__inner">
      <Dropwdown :options="options" @select="optionSelect" :selected="selected" />
    </div>
  </div>
</template>

<script>
import Dropwdown from "@/components/common/Dropdowns/Dropdown.vue";

export default {
  components: {
    Dropwdown,
  },
  data() {
    return {
      options: [
        { name: "Номер накладной", value: 1 },
        { name: "Номер накладной", value: 2 },
      ],
      selected: "Сортировка",
    };
  },
  methods: {
    optionSelect(option) {
      this.selected = option.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.sorting {
  background: #ffffff;
  box-shadow: 0px 4px 12px #e7e7e7;
  @include br(3px);
  &__inner {
    display: flex;
    align-items: center;
    min-height: 64px;
  }
}
.dropdown {
  padding-left: 16px;
}
</style>
