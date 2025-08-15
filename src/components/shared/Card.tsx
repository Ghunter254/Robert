type CardProps = {
  image:string;
  title:string;
  description:string;
}

function Card({image,title,description}:CardProps){
  return (
    <button className="card">
      <img src={image} className = "card-image" alt = {title}></img>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{description}</p>
    </button>
  )
}

Card.defaultProps = {
  title:"Blank",
  description: "Nothing to see here",
  image:"https://cdn.joke4fun.com/media/posts/00000/0ynjvwvvpv35.jpg"
}

export default Card