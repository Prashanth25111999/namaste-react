Namaste React Learning 🔥

/*
Heading
  -Logo
  -Links

Body
  -Cards

Footer
  -Copyright
  -Social Media Links
*/

// Custom Hook to maintain the code readability

// Lazy Loading or Dynamic Import or On Demanding or Chunking or Code Splitting

// HigherOrder Component -- > it takes the another component as input and return enhanced component

# Steps to setup Tesing Framework

- Install React Testing Library
- Install Jest
- Install Balble
- Setup Bable Dependency
- Setup Parcel Dependency to override old bable Dependency 

After this we can check setup is done or not

- npx jest --init || npx create jest
- Install JSdom for to run the scripts in that environment [npm install --save-dev jest-environment-jsdom]

// JS Dom is the virtual browser which give all the super powers of browser to run the test scripts

  Install @bable/preset-react library to make work of jsx in testing
  Include @bable/preset-react in the bable.config.js file and add runtime:"automatic"
  Install npm i -D @testing-library/jest-dom

  # Testing techniques and definations
// Querying : Means finding the element in the JSdom 
// Assertion : Means confirms that our code behaves as expected 
// We will Use it("",()=>{}) insted of test("",()=>{})
// To combine group of testcase we will use describe("Group Of TestCase",()=>{})

// After each successfull save of testcase file if we need to run testcase automatically the script is 
// "watch-test":"jest --watch"

// we need to do moke fetch call because whenever we are testing the component that has fetch call
// we need to render our component inside act() when we are using the state and useeffects otherwis gives falsy value 
// better to add data-testid = "to get testIdByAll"
