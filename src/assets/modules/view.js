import * as logger from './logger'
import { constructors, global } from './map'
import { loadLayers } from './layers'

const createView = (map, View, container) => {
        logger.log('Creating View...')
        global.view = new View({
            container: container,
            map: map,
            scale: 25000000,
            center: [-52.17, -13.78],
            viewingMode: 'global',
            starsEnabled: true,
            atmosphereEnabled: true
        })

        global.view.then(() => {
            logger.log('View ready!')

            controlUI(global.view, constructors.utils.Search)
            loadLayers()
            watcherRunning(global.map, global.view, constructors.utils.watchUtils)
        })
    },
    watcherRunning = (map, view, watchUtils) => {
        watchUtils.whenTrue(view, 'stationary', () => {
            if (view.extent) {
                logger.log(`View changed! Mapping all layers...`)

                console.log(view.extent.center.latitude, view.extent.center.longitude)

                map.allLayers.map((elm, indx, arr) => {
                    if (((view.scale < elm.minScale &&
                        view.scale > elm.maxScale) ||
                        (elm.minScale === 0 &&
                            elm.maxScale === 0)) &&
                        (elm.raw !== undefined &&
                        elm.raw.esri.visible)) {
                        if (elm.raw.esri.type === 0) {
                            const urlQuery = `!xmin=${view.extent.xmin}!xmax=${view.extent.xmax}!ymin=${view.extent.ymin}!ymax=${view.extent.ymax}`

                            logger.log(`Getting quadrant to request ${elm.title}`)
                            logger.log(`Requesting to server: ${elm.raw.esri.url}/where=${urlQuery}`)

                            elm.definitionExpression = urlQuery
                        }

                        logger.log(`Drawing layer: ${elm.title}`)
                    }
                })
            }
        })
    },
    controlUI = (view, Search) => {
        logger.log('Changing UI elements...')
        view.environment.atmosphere.quality = 'low'

        const searchWidget = new Search({
            view: view
        })

        view.ui.add(searchWidget, {
            position: 'top-left',
            index: 2
        })

        view.ui.remove([
            'zoom', 'compass', 'navigation-toggle'
        ])
    },
    newPosition = (_coordinates, _scale, _camera) => {
        const view = global.view

        view.goTo({
            center: [_coordinates.longitude, _coordinates.latitude],
            scale: _scale,
            tilt: _camera.tilt,
            heading: _camera.heading
        })

        logger.log(`Changing map position...`)
    },
    changeBasemap = basemap => {
        const map = global.map

        map.basemap = basemap

        logger.log(`Change basemap...`)
    }

export {
    createView,
    newPosition,
    changeBasemap
}
