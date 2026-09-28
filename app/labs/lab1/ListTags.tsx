export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      My favorite recipe:
      <ol id="wd-your-favorite-recipe">
        <li>Open a can of tuna.</li>
        <li>Heat a bowl of rice.</li>
        <li>Mix the tuna with the rice.</li>
        <li>Mix them with Mayonnaise.</li>
        <li>Mix them with diced cucumbers and nori furikake.</li>
        <li>Serve and enjoy!</li>
      </ol>
      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      Your favorite albums (in no particular order)
      <ul id="wd-your-books">
        <li>Kakumei-andymori</li>
        <li>some junk tape from outer space - corn wave</li>
        <li>Halcyon Digest - deerhunter</li>
        <li>Another Sunny Day - honeydip</li>
      </ul>
      HTML tags covered in this chapter:
      <ul id="wd-ai-html-tags">
        <li>h1 - the largest heading, used for the main title</li>
        <li>p - wraps a paragraph so browsers render vertical gaps</li>
        <li>ol - an ordered list, numbered for steps in sequence</li>
        <li>ul - an unordered list, bulleted when order does not matter</li>
        <li>li - a single item inside an ordered or unordered list</li>
        <li>table - arranges related values into rows and columns</li>
        <li>span - marks inline text without starting a new line</li>
      </ul>
    </div>
  );
}
