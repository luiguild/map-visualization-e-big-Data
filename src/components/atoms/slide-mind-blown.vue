<style scoped lang="sass">
    @import ../../sass/imports/_extend

    #internal
        position: relative
        height: 100%
        width: 100%
        +flex(row, n, flex-end, center)

        > .box
            padding: 0
            width: 100%
            height: 100%
            background-color: transparentize($white, .3)
            +flex(column, n, center, center)

            img
                height: 100%
                width: 100%
</style>

<template lang="pug">
    #internal
        .box
            img(src="static/img/mind-blown.gif")
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        props: [],
        data: () => ({
            info: {
                id: 'mind-blown',
                light: {
                    cameraTracking: true
                },
                coordinates: {
                    latitude: -34.026807,
                    longitude: 18.350787
                },
                scale: 30000,
                camera: {
                    tilt: 60,
                    heading: 130
                },
                basemap: 'satellite'
            }
        }),
        mounted: function () {
            this.checkSlide()
        },
        computed: {
            ...mapGetters([
                'slides'
            ]),
            ...mapState({
                actual: state => state.app.actual
            })
        },
        methods: {
            ...mapActions([
                'actualSlide'
            ]),
            checkSlide () {
                const slide = this.slides[this.actual]
                if (slide === this.info.id) {
                    this.actualSlide(this.info)
                }
            }
        }
    }
</script>
