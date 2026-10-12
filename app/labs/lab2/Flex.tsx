export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-flex-grow-1">Column 1</div>
        <div className="wd-bg-color-yellow wd-flex-fix">Column 2</div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">110px</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Auto</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Stretches (grow 1)
        </div>
      </div>
    </div>
  );
}
