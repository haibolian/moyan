export default  {
  maxlength: {
    type: [Number, String],
    default: 1000
  },
  showWordLimit: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: '分享你的想法'
  },
  // 简洁模式，默认只显示文本框，不显示按钮
  plain: {
    type: Boolean,
    default: false
  },
  showAvatar: {
    type: Boolean,
    default: false
  },
  avatarSrc: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 2
  }
}
