<template lang="html">
    <svg v-if="iconId" class="svgicon" aria-hidden="true">
        <use :xlink:href="iconId"></use>
    </svg>
</template>

<script>
export default {
    name: 'svg-icon',
    props: {
        id: {
            type: String,
            default: ''
        }
    },
    computed: {
        'iconId'() {
            return this.id ? `#${this.id}` : '';
        }
    }
};
</script>
