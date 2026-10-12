export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
      </div>
      <div id="wd-ai-dimension" className="wd-ai-dimension">
        This box has a declared width of 120px and height of 60px, so this long
        sentence overflows past the yellow background to make the size obvious.
      </div>
      <div className="wd-your-dimension wd-bg-color-green wd-fg-color-white">
        My Dimension
      </div>
    </div>
  );
}
