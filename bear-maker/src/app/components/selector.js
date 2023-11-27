export default function Selector(props) {

    const handleCategoryClick = () => {
      // Handle category click if needed
      if (props.id) {
        props.clicked(props.id); // Pass the category to the clicked prop
      }
    };

    const imageList = props.images

    const imgs = imageList.map((img) => (
        <div className="optionImage" key={img.id} onClick={props.updateFunction} data={img.url}>
          <img src={img.thumb != "" ? img.thumb : img.url} alt={img.alt} width="140px" height="140px"/>
         </div>  
    ))

    return (<>
    <div onClick={handleCategoryClick} className="underline">
      <h2 className="selectionCategory">{props.category}</h2>
      <p><i className="arrow up"></i></p>
    </div>
      <div className="selector">
        {imgs}
      </div>
      </>
    )
  }
  
