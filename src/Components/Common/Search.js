import {Input} from "antd";
import styled from "styled-components";

const StyledInput = styled(Input)`
  max-width: 300px;
`

const SearchComponent = ({setFilter}) => {
    const inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setFilter(lowerCase);
    };

    return (
        <span>
      <StyledInput placeholder="Search" onChange={inputHandler}/>
    </span>
    );
};

export default SearchComponent;
