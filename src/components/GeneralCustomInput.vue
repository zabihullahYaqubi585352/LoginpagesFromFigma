<template>
  <div class="w-full h-full flex flex-col gap-[4px]">
    <label class="customeLabel">{{ label }}</label>

    <div class="px-[6px] h-[70px] max-w-[975px] ">
      <q-input
        v-model="internalValue"
        borderless
        :clearable="clearable"
        dense
        hide-bottom-space
        @keyup.enter.prevent="$emit('onenter')"
        v-bind="$attrs"
        :suffix="suffix ? suffix : ''"
        class="customeInput"
        v-show="show"
       :class="{
      'has-value': modelValue && modelValue.trim() !== '',
      'has-error': hasError,
    }"
      >
        <!-- Prepend icon -->
        <template v-if="icon_name" v-slot:prepend>
          <q-icon    color="orange" :name="icon_name" @click="$emit('icon_click')" class="mt-8 mr-2" />
        </template>

        <!-- Append slot -->
        <template #append>
          <slot name="append"></slot>
        </template>
      </q-input>

    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {

  hasError: {
    type: Boolean,
    default: false,
  },
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: true,
    },
    suffix: {
      type: String,
      default: "",
    },
    icon_name: {
      type: String,
    },

  },
  emits: ["update:modelValue", "onenter", "icon_click"],
  data() {
    return {
      internalValue: this.modelValue,
    };
  },
  watch: {
    // Sync internal value with parent
    internalValue(newVal) {
      this.$emit("update:modelValue", newVal);
    },
    // If parent changes modelValue externally, update internalValue
    modelValue(newVal) {
      this.internalValue = newVal;
    },
  },
};
</script>

<style scoped>
.customeInput ::v-deep(.q-field__control) {
  background-color: rgb(255, 255, 255);
  border: 1px solid white;
  transition: all 0.3s ease;
  border-radius: 20px;
  height: 70px;
  padding-left: 22px;
  box-shadow: 6px 6px 4px 3px rgba(128, 128, 128, 0.1) inset,
    5px 5px 4px 0 rgba(0, 0, 0, 0.1);
}

.customeInput.has-value ::v-deep(.q-field__control) {
  background-color: #fff9f1;
  border: 2px solid rgba(253, 137, 3, 0.4);
}

::v-deep(.q-field--focused .q-field__control) {
  border: 2px solid rgba(253, 137, 3, 0.4);
  background: #fff9f1;
}

.customeInput.has-error ::v-deep(.q-field__control) {
  border-radius: 20px;
  border: 2px solid #ed1c24;
  background: #fff9f1;
  box-shadow: 6px 6px 4px 3px rgba(128, 128, 128, 0.1) inset,
    5px 5px 4px 0 rgba(0, 0, 0, 0.1);
}

.customeInput ::v-deep(input::placeholder) {
  color: rgba(0, 51, 41, 0.3);
  font-family: "Arena Uno";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.customeLabel {
  color: #003329;
  text-align: left;
  font-family: "Arena Uno";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 8px;
}


</style>
