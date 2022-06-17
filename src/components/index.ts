import { App } from 'vue'
import IconifyOnline from './iconify-online/iconifyOnline'

export default {
  install(app: App){
    app.component('IconifyOnline', IconifyOnline)
  }
}
