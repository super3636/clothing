import React from "react";
import "./collection-preview.styles.scss";
import { useHistory } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
const CollectionPreView = ({ title, items }) => {
  const history = useHistory();
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => {
          history.push(`/shop/${title.toLowerCase()}`);
        }}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
export default CollectionPreView;
