export default function Button(props) {
    return (<>
        <button className="selectButton" onClick={props.onClick}>
            <p>{props.select}</p>
        </button>
        </>
    )
  }