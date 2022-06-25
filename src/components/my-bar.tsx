interface MyBarProps {
  height?: string
  color?: string
  p?: string,
  px?: string
  py?: string
}

const MyBar = function (props: MyBarProps) {
  const {
    height = '1px',
    color = '#d0d9e2',
    p,
    px = '0',
    py = '15px'
  } = props
  return (
    <div style={{ padding: p ? p : py + ' ' + px }}>
      <div style={{ height, overflow: 'hidden', background: color }}></div>
    </div>
  )
}

export default MyBar