<script setup lang="ts" name="Logo">
type Props = {
  width?: number;
  height?: number;
  from?:string
  to?:string
};
const props = withDefaults(defineProps<Props>(), {
  width: 100,
  height: 100,
  from:'#fad5a5',
  to:'#f06c68'
});
</script>
<template>
  <div class="flex items-center justify-center" :style="{ width: props.width + 'px', height: props.height + 'px' }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="-0.0005922442651353776 0 110.34119415283203 100"
    >
      <defs>
        <linearGradient
          id="aa49a0edc-2d39-4780-a671-cadf7f7e2089"
          x1="127.09"
          y1="100.34"
          x2="11.24"
          y2="19.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" :stop-color="props.from"></stop>
          <stop offset="1" :stop-color="props.to"></stop>
        </linearGradient>
        <linearGradient
          id="b2e85b305-a48f-4eaa-99fe-a23f5485b66c"
          x1="12.79"
          y1="-21.54"
          x2="83.81"
          y2="101.47"
          href="#aa49a0edc-2d39-4780-a671-cadf7f7e2089"
        ></linearGradient>
      </defs>
      <path
        d="M108.13 58.27L88.82 91.72A16.56 16.56 0 0 1 74.49 100H35.86a16.54 16.54 0 0 1-8.72-2.49C86.56 97.51 82.65 50 82.65 50a8.59 8.59 0 0 0-2.52-6.09L61.26 25a8.62 8.62 0 0 0-12.18 0L30.22 43.91a8.51 8.51 0 0 0-2.41 4.69c-.06-8.11 2.5-46 55.56-46a16.43 16.43 0 0 1 5.43 5.68l19.31 33.45a16.51 16.51 0 0 1 .02 16.54z"
        fill="url(#aa49a0edc-2d39-4780-a671-cadf7f7e2089)"
      ></path>
      <path
        d="M27.81 48.6a8.61 8.61 0 0 0 2.41 7.49L49.08 75a8.62 8.62 0 0 0 12.18 0l18.87-18.91A8.59 8.59 0 0 0 82.65 50s3.91 47.51-55.51 47.51a16.48 16.48 0 0 1-5.61-5.79L2.22 58.27a16.51 16.51 0 0 1 0-16.54L21.53 8.28A16.56 16.56 0 0 1 35.86 0h38.63a16.54 16.54 0 0 1 8.9 2.6c-53.08 0-55.64 37.89-55.58 46z"
        fill="url(#b2e85b305-a48f-4eaa-99fe-a23f5485b66c)"
      ></path>
    </svg>
  </div>
</template>
<style scoped lang="less"></style>
