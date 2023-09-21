const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  fontSize: "20px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};


const textStyle = {
    lineHeight: '1',
    margin: '0' ,
}

export default function StarRating({maxRating=5}) {
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i}>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>{maxRating}</p>
    </div>
  );
}
