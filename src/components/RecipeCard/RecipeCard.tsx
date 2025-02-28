import React from "react";
import { Card } from "antd";
import "./RecipeCard.css";
import { RecipeCardProps } from "../../interfaces/interfaces";

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  image,
  onSelect,
}) => {
  return (
    <Card
      hoverable
      cover={<img alt={title} src={image} />}
      onClick={() => onSelect(id)}
    >
      <div className="card-title">{title}</div>
    </Card>
  );
};

export default RecipeCard;
