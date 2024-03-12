<h1>Calculator</h1>

This is a simple web application that allows you to perform basic mathematical operations. You can use it for addition, subtraction, multiplication, and division of numbers. 

In addition, you can also calculate percentage of number, change the sign of a number to negative and even change App theme!

<h2>Installation and Running</h2>

<ul>
  <li>Clone the repository:
git clone click <a href="https://github.com/AlexanderDolzhenko/InnowiseCalculatorApp.git">here</a>;</li>
  <li>Navigate to the project folder:
cd InnowiseCalculatorApp;</li>
  <li>Split Terminals;</li>
  <li>Install dependencies:
npm install;</li>
  <li>Start the local server:
node server.js;</li>
  <li>Open your browser and go to:
http://localhost:3000.</li>
</ul>

P.S. Webpack is also installed, bild compiled with two files and webpack server runs, but styles and js logic are not working correctly.

<h2>Project Structure</h2>
<ul>
  <li>"modules" folder contains destructured JS files, which are imported in index.js;</li>
  <li>"styles" folder contains separate styles for components which are imported in style.css.</li>
</ul>


<h2>Usage</h2>
Enter numbers and select an operation (addition, subtraction, multiplication, or division).
Click the “Equal” button.
The result will be displayed on the screen.



You can also click more than one operation, for instance, 2 + 3 - 5 and then click the “Equal” button.

If you want to calculate percentage of change number sign, then click on relevant buttons.

If you want to change App theme, then click on "red", "yellow" or "green" buttons to switch between themes.
If you want to switch to the default App theme, then press "Escape" keybutton on ypur keyboard.

If you have entered or got a long number, then you can click on result display and move left or right using keyboard to view the full number.

<h3>Fixed Bugs</h3>
<ul>
  <li>Fixed keynote/leading zero number (002, etc);</li>
  <li>Forbidden to divide by zero;</li>
  <li>Dot (coma) is available only once(not 5,,3).</li>
</ul>

<h2>Technologies & Extensions</h2>
<ul>
  <li>HTML;</li>
  <li>CSS;</li>
  <li>JavaScript;</li>
  <li>Webpack;</li>
  <li>Husky;</li>
  <li>ESlint;</li>
  <li>Prettier;</li>
  <li>NodeJs.</li>
</ul>

<h3>License</h3>
This application is distributed under the MIT License. You are free to use, modify, and distribute it.
