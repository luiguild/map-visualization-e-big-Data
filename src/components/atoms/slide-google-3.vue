<style scoped lang="sass">
    @import ../../sass/imports/_extend

    #internal
        position: relative
        height: 80%
        width: 75%
        border-radius: $pixel-proportion / 2
        +flex(row, n, center, center)

        .meio
            overflow: hidden
            position: relative
            left: $pixel-proportion * -.2

        .column
            margin: $pixel-proportion * 2
            height: 180px

            > .title
                +flex(row, n, center, center)
                height: 150px
                font-size: 200px
                color: $black-3
            .paintbrush
                position: relative
                top: $pixel-proportion * 2
                font-size: 60px
                height: 150px
                +flex(row, n, center, center)
            .phothoshop
                position: relative
                top: $pixel-proportion * 2
                font-size: 60px
                height: 155px
                +flex(row, n, center, center)

        > .box
            width: 100%
            height: 100%
            background-color: transparentize($white, .1)
            box-shadow: none
            border: none
            +flex(column, n, center, center)

            > h1,
            > h2
                // color: $white
                // text-shadow: 0 0 30px $black

            > h1
                font-weight: 900
                font-size: 150px
                line-height: 90px

            .area
                +flex(row, n, center, center)
                position: relative
                z-index: 9
                // border: 1px solid #000
                border-radius: $pixel-proportion
                padding: $pixel-proportion * 4
                margin: $pixel-proportion * 2
                margin-bottom: $pixel-proportion * 3
                // margin-top: $pixel-proportion * 3
                background-color: $color1
                min-width: $pixel-proportion * 40
                min-height: $pixel-proportion * 15

                > h1
                    margin: 0
                    color: $white
</style>

<template lang="pug">
#internal
    .box
        h2.subtitle.is-1.is-marginless.has-text-centered Tipo assim...
        .columns
            .column.is-marginless.is-paddingless
                h2.is-marginless.is-paddingless.paintbrush.subtitle.is-1 Biscoito
            .column.meio
                h1.title.is-1 X
            .column.is-marginless.is-paddingless
                h2.is-marginless.is-paddingless.phothoshop.subtitle.is-1 Bolacha
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        props: [],
        data: () => ({
            info: {
                id: 'gis-google',
                light: {
                    cameraTracking: true
                },
                coordinates: {
                    latitude: 51.498460195338005,
                    longitude: -0.027955641775762194
                },
                scale: 34288,
                camera: {
                    tilt: 0,
                    heading: 0
                },
                basemap: 'osm'
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
