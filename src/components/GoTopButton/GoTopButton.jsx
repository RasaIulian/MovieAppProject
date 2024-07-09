import React, { useState, useEffect } from "react";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      setIsHovered(false);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            ...styles.button,
            ...(isHovered ? styles.hover : styles.default),
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Go to Top
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "8px 1.6rem",
    fontSize: "1.8rem",
    lineHeight: "3rem",
    backgroundColor: "#1e212b",
    color: "#fff",
    border: "1px solid #1e212b",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  hover: {
    backgroundColor: "#fff",
    color: "#1e212b",
  },
  default: {
    backgroundColor: "#1e212b",
    color: "#fff",
  },
};

export default GoToTopButton;
