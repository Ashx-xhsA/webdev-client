export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let myString = "fries"
  let myNumber = 6
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let whatIsMyString = typeof myString;
  let whatIsMyNumber = typeof myNumber;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      myString = {myString}<br />
      myNumber = {myNumber}<br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}<br />
      whatIsMyString = {whatIsMyString}<br />
      whatIsMyNumber = {whatIsMyNumber}<br />
      sampleCount = {sampleCount}<br />
      isSampleCount = {isSampleCount}<br />
      sampleLabel = {sampleLabel}<br />
      isSampleLabel = {isSampleLabel}<br />
      <hr />
    </div>
  );
}