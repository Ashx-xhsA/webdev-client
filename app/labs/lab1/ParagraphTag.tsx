export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default browsers
        render them as one contiguous piece of text as shown here on the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph tag
        to tell browsers to render the gaps.
      </p>
      <p id="wd-ai-p">
        Browsers collapse the blank lines in your source, so text only breaks
        into visually separate blocks when each chunk is wrapped in a paragraph
        tag. Each p element is a block, and its default top and bottom margins
        are what create the vertical spacing between them.
      </p>
      <p id="wd-p-your-1">Hello I am Zhanyi Chen!</p>
      <p id="wd-p-your-2">
        I would like to learn how to build web applications in this course!
      </p>
    </div>
  );
}
