import { SearchOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import React from "react";
import { Container, InputText } from '../../styledComponents';

const SearchBar = ({
  searchText = "",
  placeholder = "Search...",
  setSearchText = () => {},
  updateFilteredCart = () => {},
  handleSearch = () => {},
}) => {

  React.useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      updateFilteredCart(false);
      handleSearch();
      console.log('Searching for:', searchText);
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [searchText]);

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
    e.target.value.length === 0 && updateFilteredCart("");
  };

  return (
    <>
      <Container
        border
        borderRadius="20px"
        width="300px"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Container padding style={{ justifyContent: 'space-between'}}>
          <InputText
            value={searchText}
            onChange={(e) => {
              handleOnChange(e);
            }}
            placeholder={placeholder}
            width="250px"
            padLeft
          />
          <SearchOutlined
            className="search-icon"
          />
        </Container>
      </Container>
    </>
  );
};

export default SearchBar;
