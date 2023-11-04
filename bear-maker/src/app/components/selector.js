

export default function Selector(props) {
    const imageList = props.images

    const imgs = imageList.map((img) => (
        <div className="optionImage" key={img.id} onClick={props.updateFunction} data={img.url}>
          <img src={img.thumb != "" ? img.thumb : img.url} alt={img.alt} width="100" height="100"/>
         </div>  
    ))

    return (<>
    <h1>{props.category}</h1>
        <div className="selector">
      {imgs}
      </div>
      </>
    )
  }
  
