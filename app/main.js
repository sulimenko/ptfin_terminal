import Vue from 'vue'
import NastCore from 'nast'
import settings from './_config'
import libs from './_libs'
import ui from './_ui'
import components from 'components'

Vue.use(ui)
Vue.mixin({ components, })
NastCore.createApp(settings, libs)
