<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref, useModel, type PropType } from 'vue';

const props = defineProps({
  modelValue: {
    type: Object as PropType<Date>,
    required: true,
  },
});

const vModel = useModel(props, 'modelValue');

const flag = ref<boolean>(true);

const onClick = () => {
  flag.value = !flag.value;
};

const onEvent = () => {
  flag.value = false;
};
</script>

<template>
  <div class="flex items-center space-x-4">
    <div @click="onClick">
      <input class="px-8 py-1 bg-gray-300 rounded-xl" type="button" value="Set Date" />
    </div>
    <div>{{ vModel.toLocaleString() }}</div>
  </div>
  <div class="my-4">
    <VueDatePicker
      v-if="flag"
      v-model="vModel"
      :enable-time-picker="false"
      :inline="{ input: false }"
      :week-start="0"
      auto-apply
      @update:model-value="onEvent"
    >
      <template #calendar-header="{ index, day }">
        <div :class="[
          index === 0 ? 'text-red-400' : '',
          index === 6 ? 'text-blue-400' : ''
        ]"
      >
          {{ day }}
        </div>
      </template>
    </VueDatePicker>
  </div>
</template>

<style lang="scss">
.dp__theme_dark {
    --dp-primary-color: #ff0000;
}

.dp__theme_light {
    --dp-primary-color: #ff0000;
}
</style>
