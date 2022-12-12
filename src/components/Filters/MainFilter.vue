<template>
  <div class="filter">
    <div class="filter__inner">
      <span class="filter__title">Фильтр</span>
      <hr />

      <BaseInput label="Номер накладной:" placeholder="Введите фрагмент" />

      <div class="filter__dropdown">
        <label for="dropdown">Тип заказа:</label>
        <Dropdown id="dropdown" :options="options" @select="optionSelect" :selected="selected" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/common/Inputs/BaseInput.vue";
import Dropdown from "@/components/common/Dropdowns/Dropdown.vue";

export default {
  components: {
    BaseInput,
    Dropdown,
  },
  data() {
    return {
      options: [
        { name: "Самовывоз", value: 1 },
        { name: "Курьерская доставка", value: 2 },
        { name: "Доставка в пункт выдачи", value: 3 },
      ],
      selected: "Выберите из списка",
    };
  },
  methods: {
    optionSelect(option) {
      this.selected = option.name;
    },
  },
};
</script>

<style lang="scss">
.filter {
  max-width: 280px;
  background: #ffffff;
  box-shadow: 0px 4px 12px #e7e7e7;
  @include br(3px);
  background-color: #fff;
  &__inner {
    padding: 8px 16px 16px 16px;
    @include font(Roboto, 700, 16px, 19px, #2b2839);
    hr {
      border: 1px solid #f8f8f8;
      margin: 8px 0 16px;
    }
  }
  &__title {
  }
  &__dropdown {
    label {
      @include font(Roboto, 700, 14px, 16px, #000000);
    }
  }
}

#dropdown {
  margin-top: 4px;
}

#dropdown > div.dropdown__title > p {
  @include font(Roboto, 400, 14px, 16px, #a5a5a5);
}
</style>
