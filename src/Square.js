export default function Square (props) {
  return (
    <button className={'square ' + (props.isCurrent ? 'isCurrent' : '')} onClick={props.onClick}>
      {props.value}
    </button>
  )
}
