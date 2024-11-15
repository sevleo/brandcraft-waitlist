// import {type  ComponentCustomProperties } from "@vue/runtime-core"
// import { ComponentCustomProperties } from 'vue/dist/vue.js'
import { ComponentCustomProperties } from '@vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $scrollToPricingSection: () => void
  }
}
