<style scoped lang="sass">
    @import ../../sass/imports/_extend

    #slide
        position: relative
        z-index: 5
        margin-left: auto
        margin-right: auto
        height: 100%
        width: 100%
        +transition(.2s)
        // +dont_select

        > .body
            height: 100%
            width: 100%
            +flex(row, n, center, center)

    .hide
        left: 100%

    .show
        left: 0%
</style>

<template lang="pug">
    #slide(:class="toggleSlide")
        .body
            .content(:is="component")
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    // import * as libESRI from '@/assets/modules'
    // import * as arceasy from 'arceasy'
    import * as logger from '@/assets/modules/logger'

    import slideInitial from '../atoms/slide-initial'
    import slideCover from '../atoms/slide-cover'
    import slideMindBlown from '../atoms/slide-mind-blown'
    import slideAbout from '../atoms/slide-about'
    import slideStack from '../atoms/slide-stack'
    import slideWebradar1 from '../atoms/slide-webradar-1'
    import slideWebradar2 from '../atoms/slide-webradar-2'
    import slideWebradar3 from '../atoms/slide-webradar-3'
    import slideSygicHongkong from '../atoms/slide-sygic-hongkong'
    import slideSp99 from '../atoms/slide-sp-99'
    import slideMapasSaoPoderosos from '../atoms/slide-mapas-sao-poderosos'
    import slideEsri from '../atoms/slide-esri'
    import slideMaUtilizacao from '../atoms/slide-ma-utilizacao'
    import slidePossibilidades from '../atoms/slide-possibilidades'
    import slideCidades1 from '../atoms/slide-cidades-1'
    import slideCidades2 from '../atoms/slide-cidades-2'
    import slideCidades3 from '../atoms/slide-cidades-3'
    import slideCidades4 from '../atoms/slide-cidades-4'
    import slideComoFazemosIsso from '../atoms/slide-como-fazemos-isso'
    import slideRaster from '../atoms/slide-raster'
    import slideRj99 from '../atoms/slide-rj-99'
    import slideSygicParis from '../atoms/slide-sygic-paris'
    import slideDistanceToSupermarkets from '../atoms/slide-distance-to-supermarkets'
    import slideLandUse from '../atoms/slide-land-use'
    import slideVector from '../atoms/slide-vector'
    import slideStatesColors from '../atoms/slide-states-colors'
    import slideStates3d from '../atoms/slide-states-3d'
    import slideParqueDoPovo from '../atoms/slide-parque-do-povo'
    import slidePerguntas from '../atoms/slide-perguntas'
    import slideEncerramento from '../atoms/slide-encerramento'
    import slideIss from '../atoms/slide-iss'
    import slidePossibilidades3d from '../atoms/slide-possibilidades-3d'
    import slidePalmSprings from '../atoms/slide-palm-springs'
    import slideGis1 from '../atoms/slide-gis-1'
    import slideGis2 from '../atoms/slide-gis-2'
    import slideGis3 from '../atoms/slide-gis-3'
    import slideGis4 from '../atoms/slide-gis-4'
    import slideGoogle1 from '../atoms/slide-google-1'
    import slideGoogle2 from '../atoms/slide-google-2'
    import slideGoogle3 from '../atoms/slide-google-3'
    import slideGoogle4 from '../atoms/slide-google-4'
    import slideGoogle5 from '../atoms/slide-google-5'
    import slideGoogle6 from '../atoms/slide-google-6'
    import slideSacanagem from '../atoms/slide-sacanagem'
    import slideLayers1 from '../atoms/slide-layers-1'
    import slidePoint from '../atoms/slide-point'
    import slidePointsPhiladelphia1 from '../atoms/slide-points-philadelphia-1'
    import slidePointsPhiladelphia2 from '../atoms/slide-points-philadelphia-2'
    import slideScene from '../atoms/slide-scene'
    import slideQueryBuildings1 from '../atoms/slide-query-buildings-1'
    import slideQueryBuildings2 from '../atoms/slide-query-buildings-2'
    import slideGraphic from '../atoms/slide-graphic'
    import slideSubmarineCables from '../atoms/slide-submarine-cables'
    import slideMixing from '../atoms/slide-mixing'
    import slidePoi1 from '../atoms/slide-poi-1'
    import slideArceasy from '../atoms/slide-arceasy'
    import slideUncleBen from '../atoms/slide-uncle-ben'

    export default {
        props: [],
        data: () => ({
            visible: true,
            component: ''
        }),
        created: function () {
            this.startPresentention()
        },
        mounted: function () {},
        updated: function () {},
        destroyed: function () {},
        components: {
            slideInitial,
            slideCover,
            slideMindBlown,
            slideAbout,
            slideStack,
            slideWebradar1,
            slideWebradar2,
            slideWebradar3,
            slideSygicHongkong,
            slideSp99,
            slideMapasSaoPoderosos,
            slideEsri,
            slideMaUtilizacao,
            slidePossibilidades,
            slideCidades1,
            slideCidades2,
            slideCidades3,
            slideCidades4,
            slideComoFazemosIsso,
            slideRaster,
            slideRj99,
            slideSygicParis,
            slideDistanceToSupermarkets,
            slideLandUse,
            slideVector,
            slideStatesColors,
            slideStates3d,
            slideParqueDoPovo,
            slidePerguntas,
            slideEncerramento,
            slideIss,
            slidePossibilidades3d,
            slidePalmSprings,
            slideGis1,
            slideGis2,
            slideGis3,
            slideGis4,
            slideGoogle1,
            slideGoogle2,
            slideGoogle3,
            slideGoogle4,
            slideGoogle5,
            slideGoogle6,
            slideSacanagem,
            slideLayers1,
            slidePoint,
            slidePointsPhiladelphia1,
            slidePointsPhiladelphia2,
            slideScene,
            slideQueryBuildings1,
            slideQueryBuildings2,
            slideGraphic,
            slideSubmarineCables,
            slideMixing,
            slidePoi1,
            slideArceasy,
            slideUncleBen
        },
        computed: {
            ...mapGetters([
                'slides',
                'slide'
            ]),
            ...mapState({
                actual: state => state.app.actual,
                visibility: state => state.app.visibility
            }),
            toggleSlide () {
                if (this.visibility) {
                    if (this.visible) {
                        return 'show'
                    } else {
                        return 'hide'
                    }
                } else {
                    return 'hide'
                }
            }
        },
        methods: {
            ...mapActions([
                'startPresentention'
            ])
        },
        filters: {},
        watch: {
            actual: function (change) {
                const slide = this.slides[change]

                logger.log(`Actual slide: ${change} - ${slide}`)

                if (change >= 0) {
                    this.component = `slide-${slide}`
                }
            }
        }
    }
</script>
