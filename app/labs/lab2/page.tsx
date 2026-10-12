import './index.css';
import ForegroundColors from './ForegroundColors';
import BackgroundColors from './BackgroundColors';
import Padding from './Padding';
import BoxModel from './BoxModel';
import Margins from './Margins';
import Corners from './Corners';
import Dimensions from './Dimensions';
import Display from './Display';
import Positions from './Positions';
import Zindex from './Zindex';
import Float from './Float';
import GridLayout from './GridLayout';
import Flex from './Flex';
import MediaQueriesDemo from './MediaQueriesDemo';
import Borders from './Borders';
import ReactIconsSampler from './tailwind/ReactIconsSampler';

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: 'blue', color: 'white' }}>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: 'purple', color: 'white' }}
      >
        This sample paragraph uses a style attribute with a purple background
        and white text.
      </p>
      <p style={{ backgroundColor: 'green', color: 'yellow' }}>
        This is my personal green-on-yellow paragraph, unchanged.
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-ai-id-selector">
          This sample paragraph uses its own ID selector with a custom color
          treatment.
        </p>
        <p id="wd-id-selector-3">This is an on your own part.</p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>
      <div className="wd-ai-class-selector">
        <p>
          This sample paragraph uses a custom AI-generated class selector with a
          distinct background and text color.
        </p>
        <h4>
          This sample heading also uses the AI-generated class selector to share
          the same look.
        </h4>
      </div>
      <div className="wd-your-class">
        <p>
          Still in page.tsx, invent a second class (for example wd-your-class)
          in index.css and apply it to both a p and an h4 so two different tags
          share one look.
        </p>
        <h4>
          Still in page.tsx, invent a second class (for example wd-your-class)
          in index.css and apply it to both a p and an h4 so two different tags
          share one look.
        </h4>
      </div>
      <ReactIconsSampler />
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-one-more">
            <div className="wd-selector-4" id="wd-id-selector-4">
              Extend the nested structure in page.tsx with one more element and
              a new descendant or child selector in index.css — then verify only
              the intended node changes color when you tweak the combinator.
            </div>
          </div>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <span className="wd-ai-selector-5">
                This sample span is a nested AI selector example.
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <Flex />
      <GridLayout />
      <MediaQueriesDemo />
      <ReactIconsSampler />
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
    </div>
  );
}
