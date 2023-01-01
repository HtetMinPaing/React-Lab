import photo from '../assests/istockphoto-1297349747-170667a.png'

function Addimage() {

    const imageUrl ="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fnature%2Flandscape&psig=AOvVaw0kVeo8zRmY0MQQ8T3Oc6rM&ust=1672673565973000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLim8N_YpvwCFQAAAAAdAAAAABAE";
    return(
        <div>
        <h1>Task: Add some images</h1>
        <img
          height={200}
          width={200}
          src={photo}
        />
        <img
          height={200}
          width={200}
          src={require("../assests/istockphoto-1297349747-170667a.png")}
        />
        <img
          height={200}
          width={200}
          src={imageUrl}
        />
      </div>
    )
}

export default Addimage