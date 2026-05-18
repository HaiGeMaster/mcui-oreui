import type { App, Plugin } from 'vue'
import './styles/index.css'

import OreButton from './components/OreButton.vue'
import OreCheckbox from './components/OreCheckbox.vue'
import OreSwitch from './components/OreSwitch.vue'
import OreDropdown from './components/OreDropdown.vue'
import OreTextField from './components/OreTextField.vue'
import OreSlider from './components/OreSlider.vue'
import OreCard from './components/OreCard.vue'
import OreLayout from './components/OreLayout.vue'
import OreHeader from './components/OreHeader.vue'
import OreScrollView from './components/OreScrollView.vue'
import OreModal from './components/OreModal.vue'
import OreLoadingMask from './components/OreLoadingMask.vue'
import OrePopHost from './components/OrePopHost.vue'

export {
  OreButton,
  OreCheckbox,
  OreSwitch,
  OreDropdown,
  OreTextField,
  OreSlider,
  OreCard,
  OreLayout,
  OreHeader,
  OreScrollView,
  OreModal,
  OreLoadingMask,
  OrePopHost,
}

export { useSound, playSound, playSoundType, setSoundEnabled } from './composables/useSound'
export type { OreSoundType } from './composables/useSound'
export { usePop, showPop, popState } from './composables/usePop'
export type { PopItem } from './composables/usePop'

const components = {
  OreButton,
  OreCheckbox,
  OreSwitch,
  OreDropdown,
  OreTextField,
  OreSlider,
  OreCard,
  OreLayout,
  OreHeader,
  OreScrollView,
  OreModal,
  OreLoadingMask,
  OrePopHost,
}

const OreUIVue: Plugin = {
  install(app: App) {
    for (const [name, comp] of Object.entries(components)) {
      app.component(name, comp)
    }
  },
}

export default OreUIVue
