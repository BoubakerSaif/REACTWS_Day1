import { imageSrc } from "../data";

function Hero() {
  return (
    <div>
      <p>This is an image</p>
      <img src={imageSrc} width="100px" />
    </div>
  );
}

export default Hero;
