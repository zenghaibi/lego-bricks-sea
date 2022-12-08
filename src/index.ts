import { App } from 'vue'
export { textDefaultProps, textStylePropNames, TextComponentProps,
imageDefaultProps, imageStylePropsNames, ImageComponentProps,
shapeDefaultProps, shapeStylePropsNames, ShapeComponentProps
} from './defaultProps'

import LText from './components/LText/index'
import LImage from './components/LImage/index'
import LShape from './components/LShape/index'

const components = [
  LText,
  LImage,
  LShape
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  LText,
  LImage,
  LShape,
  install
}
export default {
  install
}