import { useParams } from "react-router-dom";
import templates from "@/data/templateData";
import Selector from "@/components/shared/Selector";

const TempDetails = () => {
  const { id } = useParams();
  const item = templates.find((t) => t.id === id);

  if (!item) return <div>Item not found</div>;

  return (
    <div>
      <div className="ProductPage">
        <div className="ProductSummary">
          <h1 className="">{item.title}</h1>
          <img
            src={item.image}
            className="generic-card-image"
            alt={item.title}
          />
          <p>{item.description}</p>
        </div>
        <div className="ProductDetails">
          <Selector />
        </div>
      </div>
    </div>
  );
};

export default TempDetails;
