// Vue Component Install
import IconFont from 'comps/IconFont/index.vue'

const component = {
  install: function (app: import("vue").App<any>): void {
    app.component(IconFont.name, IconFont)
  }
}

export default component
