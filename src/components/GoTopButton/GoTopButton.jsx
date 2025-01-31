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
          title="Go to top"
          onClick={scrollToTop}
          style={{
            ...styles.button,
            ...(isHovered ? styles.hover : styles.default),
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {">"}
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    height: "4rem",
    width: "4rem",
    position: "fixed",
    bottom: "1.5rem",
    right: "1rem",
    fontSize: "1.8rem",
    lineHeight: "3rem",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    color: "#1e212b",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: "rotate(-90deg)",
  },
  hover: {
    backgroundColor: "rgba(30, 33, 43, 0.5)",
    color: "#fff",
  },
  default: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    color: "#1e212b",
  },
};

export default GoToTopButton;
