import { h, defineComponent } from "vue";
import { Icon as IconifyIcon } from "@iconify/vue";

// Iconify Icon在Vue里在线使用（用  于外网环境） https://docs.iconify.design/icon-components/vue/offline.html
export default defineComponent({
  name: "IconifyOnline",
  components: { IconifyIcon },
  props: {
    icon: {
      type: String,
      default: ""
    }
  },
  render() {
    const attrs = this.$attrs;
    return h(
      'span',
      {
        style: {
          verticalAlign: 'middle'
        }
      },
      [
        h(
          IconifyIcon,
          {
            icon: `${this.icon}`,
            ...attrs
          },
          {
            default: () => []
          }
        )
      ]
    );
  }
});
