export function Tweet(props) {
  return (
    <div>
      <strong>{props.user}</strong>
      <p>{props.children}</p>
      <button>Like</button>     
    </div>
  )
}