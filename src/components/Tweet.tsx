export function Tweet(props) {
  return (
    <div>
      <strong>{props.user}</strong>
      <p>{props.content}</p>
      <button>Like</button>     
    </div>
  )
}