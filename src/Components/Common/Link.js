import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: ${(props) =>
    props?.selected ? "var(--color-secondary)" : "var(--color-primary)"};
`;

const LinkComponent = ({
  to,
  parameter = "",
  childPath = "",
  children,
  ...restProps
}) => {
  const encodedParameter = encodeURIComponent(parameter).replace(/%20/g, "-");

  const finalTo = parameter ? `${to}/${encodedParameter}${childPath}` : `${to}`;

  return (
    <StyledLink to={finalTo} {...restProps}>
      {children}
    </StyledLink>
  );
};

export default LinkComponent;
