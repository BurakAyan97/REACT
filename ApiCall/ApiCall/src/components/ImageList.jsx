import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceHolder }) {
  return (
    <div>
      {imagesPlaceHolder.map((image, index) => {
        return <ImageItem key={index} image={image} />; //key vermek zorunlu yoksa hata veriyor.API den gelen resim listesini ImageItem componentine props olarak verdik. Her biri bir component mantığı ile çalışsın diye.
      })}
    </div>
  );
}

export default ImageList;
