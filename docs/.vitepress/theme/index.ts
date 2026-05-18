import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// 逐个引入组件（不经 src/index.ts，避免其全局样式副作用污染 VitePress）
import OreButton from '../../../src/components/OreButton.vue'
import OreCheckbox from '../../../src/components/OreCheckbox.vue'
import OreSwitch from '../../../src/components/OreSwitch.vue'
import OreDropdown from '../../../src/components/OreDropdown.vue'
import OreTextField from '../../../src/components/OreTextField.vue'
import OreSlider from '../../../src/components/OreSlider.vue'
import OreCard from '../../../src/components/OreCard.vue'
import OreLayout from '../../../src/components/OreLayout.vue'
import OreHeader from '../../../src/components/OreHeader.vue'
import OreScrollView from '../../../src/components/OreScrollView.vue'
import OreModal from '../../../src/components/OreModal.vue'
import OreLoadingMask from '../../../src/components/OreLoadingMask.vue'
import OrePopHost from '../../../src/components/OrePopHost.vue'

import './oreui-doc.css'
import './custom.css'

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

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    for (const [name, comp] of Object.entries(components)) {
      app.component(name, comp)
    }
  },
}

export default theme
