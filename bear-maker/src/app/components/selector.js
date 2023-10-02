

export default function Selector(props) {
    const imageList = props.images

    const imgs = imageList.map((img) => (
        <div className="optionImage" key={img.id}>
          <img src={img.url} alt={img.alt} width="100" height="100"/>
         </div>  
    ))

    return (<>
        <div className="selector">
      {imgs}
      </div>
      </>
    )
  }
  
