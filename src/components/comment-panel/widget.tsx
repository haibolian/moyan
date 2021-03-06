export const Commentator = (props: any) => {
  return (
    <p>
      <span>{props.name}</span>
      {
        props.to &&
          <span> 回复 { props.to }</span>
      }
      <span>·{props.time}</span>
    </p>
  )
}

export const CommentContent = (props: any) => {
  return (
    <p>{props.content}</p>
  )
}

