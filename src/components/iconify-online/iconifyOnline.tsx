import { h, defineComponent } from "vue";
import { Icon as IconifyIcon } from "@iconify/vue";
import { isDark as isDarkMode } from '@/utils/dark';
// Iconify Icon在Vue里在线使用（用  于外网环境） https://docs.iconify.design/icon-components/vue/offline.html
export default defineComponent({
  name: "IconifyOnline",
  components: { IconifyIcon },
  data(){
    return {
      isDark: isDarkMode
    }
  },
  props: {
    align: {
      type: String,
      default: "middle",
    },
    icon: {
      type: String,
      default: ""
    },
    darkIcon: {
      type: String,
      default: ""
    },
    size: {
      type: [String],
      default: '22px'
    }
  },
  render() {
    const attrs = this.$attrs;
    return h(
      'span',
      {
        class: 'iconify-online',
        style: {
          verticalAlign: this.align,
          fontSize: this.size
        }
      },
      [
        h(
          IconifyIcon,
          {
            inline: true,
            icon: this.isDark && this.darkIcon ? this.darkIcon : this.icon,
            ...attrs,
            onClick(){}
          },
          {
            default: () => []
          }
        )
      ]
    );
  }
});
