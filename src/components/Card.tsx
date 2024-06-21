import React from "react";
import { Link } from "react-router-dom";

const MoreCards = () => {
  const cardInfo = [
    { image: "https://www.shutterstock.com/image-photo/happy-man-walking-colorful-shopping-260nw-1217300206.jpg", title: "MENS" },
    { image: "https://t4.ftcdn.net/jpg/04/72/44/67/360_F_472446747_AmtV7OdEJVyzVRFsVTjVHhIiFV00bMNr.jpg", title: "WOMENS" },
    { image: "https://t3.ftcdn.net/jpg/00/98/09/16/360_F_98091618_yCN1zUmBzQRADLXFKt6eujlgXHaRVnWK.jpg", title: "KIDS" },
  ];

  const renderCard = (card: { image: string; title: string; }, index: React.Key | null | undefined) => {
    let link;
    switch (card.title) {
      case "MENS":
        link = "/Mens";
        break;
      case "WOMENS":
        link = "/Womens";
        break;
      case "KIDS":
        link = "/Kids";
        break;
      default:
        link = "/";
        break;
    }

    return (
      <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="bg-slate-700 rounded-lg overflow-hidden shadow-lg">
          <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-white">{card.title}</h3>
            <Link to={link}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap -mx-4">
      {cardInfo.map(renderCard)}
    </div>
  );
};

export default MoreCards;
