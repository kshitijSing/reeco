import React from "react";
import { useDispatch } from "react-redux";
import { getCatalog } from '../../../jsonData';
import { addProductsToCart } from "../../../redux/orderSlice";

export const useAddItemLogic = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState("");
  const [catalog, setCatalog] = React.useState([]);
  const [isCatalogLoading, setIsCatalogLoading] = React.useState(false);
  const [isCatalogEmpty, setIsCatalogEmpty] = React.useState(false);
  const [isCatalogFetched, setIsCatalogFetched] = React.useState(false);
  const [isInReviewMode, setIsInReviewMode] = React.useState(false);
  

  const setInitialStates = () => {
    setIsCatalogEmpty(false);
    setIsCatalogLoading(false);
    setIsCatalogFetched(false);
    setIsInReviewMode(false);
    setCatalog([]);
    setSearchText("");
  }

  const handleSearch = async () => {
    setIsCatalogLoading(true);
    setIsCatalogEmpty(false);
    setIsInReviewMode(false);
    try {
      const result = await getCatalog(searchText.toLowerCase());
      setCatalog(result);
      if (result.length === 0) setIsCatalogEmpty(true);
      setIsCatalogFetched(true);
      setIsCatalogLoading(false);
    } catch (e) {
      setIsCatalogLoading(false);
    }
  };

  const handleInputChange = ({ item, type, value }) => {
    if (isInReviewMode) return;
    setCatalog((catalog) => {
      return catalog.map((eachCatalog) => {
        if (eachCatalog.uuid === item.uuid) {
          eachCatalog[type] = value;
        }
        return eachCatalog;
      });
    });
  };

  const handleAddProducts = () => {
    let requiredProducts = catalog.filter(
      (eachCatalog) => eachCatalog.quantity > 0
    );
    dispatch(addProductsToCart({ products: requiredProducts }));
  };

  const selectedProductCount = (catalog || []).filter(
    ({ quantity }) => parseInt(quantity) > 0
  )?.length;

  return {
  isCatalogLoading,
  isCatalogEmpty,
  isCatalogFetched,
  searchText,
  handleSearch,
  handleInputChange,
  handleAddProducts,
  selectedProductCount,
  setInitialStates,
  isInReviewMode,
  setSearchText,
  catalog,
  setIsInReviewMode,
  }
}