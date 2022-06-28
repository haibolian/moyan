

export const Commentator = (props: any) => {
  return (
    <p>
      <span>{props.name}</span>
      <span>· 8 小时前</span>
    </p>
  )
}

export const CommentContent = (props: any) => {
  const qwe = inject('message')
  return (
    <p>{qwe}</p>
  )
}

export const CommentTools = (props: any) => {
  return (
    <div>
      <span class={'mr-10px'}>赞</span>
      <span>回复</span>
    </div>
  )
}
