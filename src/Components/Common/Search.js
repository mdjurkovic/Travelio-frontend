import { Input } from "antd";

const SearchComponent = ({ setFilter }) => {
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setFilter(lowerCase);
  };

  return (
    <span>
      <Input placeholder="Search" onChange={inputHandler} />
    </span>
  );
};

export default SearchComponent;
