# React Unit Testing 

## Testing

### Manual Testing 

- Write Code <>Preview & Test in Browser
- Very important because we see what users will see
- But testing manually is error-prone : Its hard to test all possible combinations and scenarios

### Automated Testing

- This is not replacemnet for manual testing, its is always super important. It is an addition. 
- Code that test your code : With automated testing we write extra code that runs and test your other, your main application code 
- You can always test everything no matter what you changed 
- It does not cost you a lot of time 
- You test the individual building blocks of your app
- Very technical but allows you to test all building blocks at once

#### Different kind of automated Tests

- **Unit Tests :** Test the individual blocks(component, functions) in isolation. Projects typically contain dozens or hundredsof unit tests.The most common and important test. The idea is simply is that if you test all the individuals units on themselves the overall application will also work

- **Integration Tests:** If we put together all those units, we have integration test. Test the combination of multiple building blocks for example multiple components work together. Projects typically contain couple of integration  tests. Also important but we focus on unit tests in most cases

- **End to End Tests:** Its all about testing entire workflows in your application. Test complete scenarios in your app as the user would expreince them. Important but can also be done manually.

**What To Test ?** Test the different building blocks. Unit tests: The smallest building blocks that make up your app. 

**How To Test ?** Test success and error cases, also test rare (but possible) results

#### Where do we write this code and how do we execute this testing code?

- For this we need some extra tools and an extra setup. We need a tool for running our tests and asserting the results.-> We typically use JEST. 

- We also need a tool for "simulating"(rendering) our React app/components for those automated tests to then interact with them. -> We typically use React Testing Library. 

	**!!! Both tools(Jest and React Testing Library) are already set up for you when using CRA(create-react-app)**

- Our test file just like our component file with the word 'test' in the file name.-> App.test.js

- In that App.test.js file we have test function which takes two arguments. The first argument is  a description of the test and this is up to us, the second argument is a function which contains the actual test and code.

- How do we run this test?-> We got a script for running the development server -> for example npm test

### Writing Test - The Three "A"s

**Arrange:** Set up the test data, test conditions and test environment.

**Act:** Run logic that should be tested (e.g execute func.)

**Assert:** Compare executaion results with expected results.
