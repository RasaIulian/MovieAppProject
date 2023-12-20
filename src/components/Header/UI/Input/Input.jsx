import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, InputElement, SearchIcon } from "./Input.style";

export function Input({ type, value, onChange, placeholder }) {
  return (
    <Container noMargin>
      <SearchIcon icon={faSearch} />
      <InputElement
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Container>
  );
}
