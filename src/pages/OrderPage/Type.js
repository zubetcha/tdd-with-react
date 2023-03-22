import { useEffect, useState } from "react";
import axios from "axios";

import Products from "./Products";
import { SERVER } from "../../shared/constants";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const res = await axios.get(`${SERVER}/${orderType}`);
      setItems(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const ItemComponents = orderType === "products" ? Products : null;

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <div>{optionItems}</div>;
};

export default Type;
