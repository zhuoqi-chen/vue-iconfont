<template lang="html">
  <i v-if="id" class="iconfont" :class="id"></i>
</template>

<script>
export default {
    name: 'font-icon',
    props: {
        id: {
            type: String,
            default: ''
        }
    }
};
</script>