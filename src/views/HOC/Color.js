import React from "react";
function getRandomColor() {
  var letters = "012345689ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Color = (WrappedComponent) => {
  const colorRandom = getRandomColor();
  return (props) => (
    <div style={{ color: colorRandom }}>
      {/* ...props là copy tất cả props đầu vào */}
      <WrappedComponent {...props} />
    </div>
  );
};

export default Color;
