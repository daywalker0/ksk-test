<script>
export default {
  props: {
    label: {
      type: [String, Boolean],
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div class="input-wrap">
    <label class="label" v-if="label">{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  label {
    @include font(Roboto, 700, 14px, 16px, #000);
    text-align: start;
    margin-bottom: 4px;
  }
  input {
    @include font(Roboto, 400, 14px, 16px, #000);
    @include br(2px);
    background: #ffffff;
    border: 1px solid #d9d9d9;
    padding: 8px 12px;
    outline: transparent;
    transition: 0.3s;
    &::placeholder {
      @include font(Roboto, 400, 14px, 16px, #a5a5a5);
    }
    &:focus {
      background: rgba(197, 228, 249, 0.3);
      border: 1px solid #1390e5;
      transition: 0.3s;
    }
  }
}
input {
  @include placeholder--opacity;
}
</style>
