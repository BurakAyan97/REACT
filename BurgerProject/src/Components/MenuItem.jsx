function MenuItem({ image, name, content, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: "10px" }}>{name}</h1>
      <h6 style={{ marginTop: "30px" }}>{content}</h6>
      <p>
        <i style={{ color: "red", marginTop: "10px" }}>{price} TL</i>
      </p>
    </div>
  );
}

export default MenuItem;
