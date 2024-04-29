import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Container, InputElement, SearchIcon } from "./Input.style";

export function Input({ type, value, onChange, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container noMargin>
      {!isFocused && <SearchIcon icon={faSearch} />}{" "}
      {/* Conditional rendering of the search icon */}
      <InputElement
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Container>
  );
}
