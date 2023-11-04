

export default function Selector(props) {
    const imageList = props.images

    const imgs = imageList.map((img) => (
        <div className="optionImage" key={img.id} onClick={props.updateFunction} data={img.url}>
          <img src={img.thumb != "" ? img.thumb : img.url} alt={img.alt} width="150px" height="150px"/>
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
  
