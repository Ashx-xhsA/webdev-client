export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <img
        id="wd-your-image"
        src="/images/yno2.png"
        alt="A big Sun"
        width="400px"
      />
      <img
        id="wd-ai-image"
        src="https://apod.nasa.gov/apod/image/2609/M31After_Scherer_960.jpg"
        alt="The Andromeda galaxy"
        width="200px"
      />
    </div>
  );
}
