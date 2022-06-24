interface MyBarProps {
  height?: string
  color?: string
  px?: string
  py?: string
}

const MyBar = function (props: MyBarProps) {
  const {
    height = '1px',
    color = '#d0d9e2',
    px = '0',
    py = '15px'
  } = props
  return (
    <div style={{ padding: py + ' ' + px }}>
      <div style={{ height, overflow: 'hidden', background: color }}></div>
    </div>
  )
}

export default MyBar