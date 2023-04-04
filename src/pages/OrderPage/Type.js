import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { OrderContext } from "../../contexts/OrderContext";

import Products from "./Products";
import Options from "./Options";
import ErrorBanner from "../../components/ErrorBanner";
import { SERVER } from "../../shared/constants";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const [orderDatas, updateItemCount] = useContext(OrderContext);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const res = await axios.get(`${SERVER}/${orderType}`);
      setItems(res.data);
    } catch (error) {
      setError(true);
    }
  };

  const ItemComponents = orderType === "products" ? Products : Options;

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, orderType)
      }
    />
  ));

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  let orderTypeKorean = orderType === "products" ? "상품" : "옵션";

  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>
        {orderTypeKorean} 총 가격: {orderDatas.totals[orderType]}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" && "column",
        }}
      >
        {optionItems}
      </div>
    </>
  );
};

export default Type;
