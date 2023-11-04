

export default function Selector(props) {
    const imageList = props.images

    const imgs = imageList.map((img) => (
        <div className="optionImage" key={img.id} onClick={props.updateFunction} data={img.url}>
          <img src={img.thumb != "" ? img.thumb : img.url} alt={img.alt} width="140px" height="140px"/>
         </div>  
    ))

    return (<>
    <h2>{props.category}</h2>
      <div className="selector">
        {imgs}
      </div>
      </>
    )
  }
  
