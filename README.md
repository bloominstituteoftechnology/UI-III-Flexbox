# User Interface Project II: Great Idea Web Page With Flexbox

Now that you have experienced building a layout using `inline-block`.  Lets revisit the same HTML structure and refactor our first page with flexbox.  If you didn't finish yesterday's assignment, just start from scratch.

Once you have finished the home page using flexbox, go build the services page based on the [design file](design-files/services-desktop-design.png) provided to you.  This time you will need to structure your own HTML in addition to using flexbox.  You have been provided all the necessary images in the img folder.   


**Useful Resource: [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**

## To Get Started

* Fork / Clone this project into a directory on your machine.
* Open the code with your preferred integrated development environment (IDE).
* Start on the objectives

## Objectives:

- [ ] Refactor the home page layout with flexbox where `inline-block` was used before
- [ ] In your navigation, point the services anchor tag's `href` to `services.html`
- [ ] Copy and paste the contents of your `index.html` page into your empty `services.html` page.  
  - Delete any content inside the body tag besides the navigation 
  - If you didn't finish yesterday's assignment, you may use the last assignment's solution code here instead.
  - Update the title in your newly copied services page to say `Great Idea! - Services`
- [ ] Using the provided [design file](design-files/services-desktop-design.png), create the services page layout using flexbox.  Remember, you should be using box model properties this whole time.  Flexbox is only used for bigger layout pieces.  You will still need content width, padding, border, and margins to succeed. 

## Stretch Goals: 
- [ ] Add an anchor tag around the Great Idea logo and point the `href` to`index.html`
- [ ] Create another page based on one of the navigation items in addition to services.  Try to create a layout that follows the patterns of the first two designs but with your own creative twist.  Use lorem ipsum text for all your content.
- [ ] Introduce media queries into your services page to create a mobile view that stacks all the boxes on top of each other on phone but looks like the layout file on desktop.




/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* Set every element's box-sizing to border-box */
* {
    box-sizing: border-box;
}

html, body {
    height: 100%;
    font-family: 'Titillium Web', sans-serif;
}

h1, h2, h3, h4, h5 {
    font-family: 'Bangers', cursive;
    letter-spacing: 1px;
    margin-bottom: 15px;
}

/* Copy and paste your work from yesterday here and start to refactor into flexbox */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* Set every element's box-sizing to border-box */
* {
    box-sizing: border-box;
}

html, body {
    height: 100%;
    font-family: 'Titillium Web', sans-serif;
}

h1, h2, h3, h4, h5 {
    font-family: 'Bangers', cursive;
    letter-spacing: 1px;
    margin-bottom: 15px;
}

.container {
  width: 880px;
  /* TB LR */
  margin: 0 auto;
}

/* header */

header nav {
  display: inline-block;
  width: 691px;
  vertical-align: top;
  margin-top: 35px;
}

header nav a {
  display: inline-block;
  margin-right: 65px;
  font-size: 14px;
  color: gray;
  text-decoration: none;
}

header nav a:hover {
  text-decoration: underline;
}

header nav a:first-child {
  margin-left: 0;
}

header nav a:last-child {
  margin-right: 0;
}

header .logo {
  display: inline-block;
  margin-top: 25px;
}

/* cta */

.cta .cta-text {
  display: inline-block;
  vertical-align: top;
  font-size: 77px;
  margin-top: 120px;
  text-align: center;
  padding: 0px 90px;
}

.cta .cta-text button {
  background: white;
  vertical-align: top;
  margin-top: 6px;
  padding: 8px 44px;
  font-size: 17px;
  border: 1px solid black;
  cursor: pointer;
}

.cta .cta-text button:hover {
  background: black;
  color: white;
}

.cta img {
  display: inline-block;
  margin-top: 69px;
}

.main-content {
  border-top: 1px solid black;
  margin-top: 76px;
  padding-top: 39px;
}

.main-content .top-content {
  padding: 0 10px;
}

.main-content .top-content .text-content {
  width: 410px;
  display: inline-block;
  margin-right: 34px;
}

.main-content .top-content .text-content:last-child {
  margin-right: 0;
}

.main-content .middle-img {
  margin-top: 45px;
}

.main-content .bottom-content {
  margin-top: 37px;
  padding: 0 10px;
}

.main-content .bottom-content .text-content {
  width: 275px;
  display: inline-block;
  margin-right: 12px;
}

.main-content .bottom-content .text-content:last-child {
  margin-right: 0;
}

.contact {
  margin-top: 57px;
  border-top: 1px solid black;
  padding: 39px 10px 0;
}

.contact p {
  margin: 20px 0;
}

footer {
  margin: 32px 0;
  text-align: center;
  font-size: 14px;
}


/*services css now begins*/

.services header nav{
	display: flex;
	border: 1px solid black;
	margin-left: 50px;
	max-width: 625px;
	padding: 0px;
	position: absolute;
}
.services header nav a{
	
	display: inline-block;
	border: 1px solid black;
	
}

.servicesLogo1 {
	display:flex;
	justify-content: flex-end; 
	color: red;
	padding: 20px;
	margin-right: 400px;
}

.servicesHeader {
	display:flex;
	justify-content: flex-start;
	padding: px;
	margin-left: 30px;
	
}

.servicesHeadertxt {
	display: flex;
	margin-left: 30px;
	margin-top: 20px;

}

.serviceText {
	border: 1px solid black;
	display: flex;
	width: 880px;
	margin-left: 30px;

}

hr {
	max-width: 880px;
	margin-left: 30px;
	margin-top: 20px;
}

.digitalDesign {
	border: 1px solid black;
	width: 360px;
	margin-left: 30px;
	margin-top: 20px;
	background-color: silver;

}

.digitalDesign .header {
	border: 1px solid black;
	width: 100px;
	margin-left: 10px;
	margin-top: 10px;
	font-size: 12px;
}

.digitalDesign .ddt{
	border: 1px solid black;
	margin-left: 10px;
	width: 342px;
}

.digitalDesign .bottom{
	border: 1px solid black;
	width: 120px;
	margin-left: 10px;
	display: flex;
	justify-content: center;
	margin-top: 10px;
	margin-bottom: 10px;
	height: 30px;
	align-items: center;
	background-color: white;
}

.uxUi {
	border: 1px solid black;
	width: 360px;
	margin-left: 550px;
	margin-top: -205px;
	background-color: silver;

}

.uxUi .header {
	border: 1px solid black;
	width: 100px;
	margin-left: 10px;
	margin-top: 10px;
	font-size: 12px;
}

.uxUi .uxUItext{
	border: 1px solid black;
	margin-left: 10px;
	width: 342px;
}

.uxUi .bottom{
	border: 1px solid black;
	width: 120px;
	margin-left: 10px;
	display: flex;
	justify-content: center;
	margin-top: 10px;
	margin-bottom: 10px;
	height: 30px;
	align-items: center;
	background-color: white;
}

.digitalMarketing {
	border: 1px solid black;
	width: 360px;
	margin-left: 30px;
	margin-top: 20px;
	background-color: silver;

}

.digitalMarketing .header {
	border: 1px solid black;
	width: 100px;
	margin-left: 10px;
	margin-top: 10px;
	font-size: 12px;
}

.digitalMarketing .digitalMarketingtext{
	border: 1px solid black;
	margin-left: 10px;
	width: 342px;
}

.digitalMarketing .bottom{
	border: 1px solid black;
	width: 120px;
	margin-left: 10px;
	display: flex;
	justify-content: center;
	margin-top: 10px;
	margin-bottom: 10px;
	height: 30px;
	align-items: center;
	background-color: white;
}




sleldededhioedwedjedeuwfuiefewfkwe;ofdjiefevwfhuewdhued


<!-- copy and paste your index.html page structure in here, markup the content provided after that -->

<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Great Idea! - Services</title>

  <link href="https://fonts.googleapis.com/css?family=Bangers|Titillium+Web" rel="stylesheet">
  <link rel="stylesheet" href="css/index.css">

  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->
</head>

  <body>

    <!-- Copy and paste your HTML from the first UI project here -->
    <div class="services">

      <header>
        <nav>
          <a href="services.html">Services</a>
          <a href="#">Product</a>
          <a href="#">Vision</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
    </div>
        
    
  </body>
</html>



<div class = "servicesLogo1">
<img class="logo" src="img/logo.png" alt="Great Idea! Company logo.">
</div>

<div class = "servicesHeader">
<img class="services-header-img" src="img/services-header.jpg" alt="Our services header image">
</div>

<div class = "servicesHeadertxt"> <h1>Services</h1></div>

<div class = "serviceText"><p>Our services provide the best digital value in nulla suscipit interdum diam at maximus. Proin vitae tellus rutrum, accumsan nunc sit amet, iaculis tortor. Mauris consectetur feugiat justo quis aliquet. Curabitur cursus et justo eu consequat. Fusce finibus sem neque, sed faucibus nibh pellentesque eleifend. Mauris euismod facilisis iaculis.</p></div>

<hr>
<section class= mainContent>
<div class="digitalDesign"><header class=header><h4>Digital Design</h4></header>

<p class ="ddt">Nulla suscipit interdum diam at maximus. Proin vitae tellus rutrum, accumsan nunc sit amet, iaculis tortor. Mauris consectetur feugiat justo quis aliquet. Curabitur cursus et justo eu consequat. Fusce finibus sem neque, sed faucibus nibh pellentesque
eleifend. Mauris euismod facilisis iaculis.</p>

<header class=bottom>Learn More</header>

</div>

<div class="uxUi"><header class=header><h4>UX / UI</h4></header>

<p class ="uxUItext">Nulla suscipit interdum diam at maximus. Proin vitae tellus rutrum, accumsan nunc sit amet, iaculis tortor. Mauris consectetur feugiat justo quis aliquet. Curabitur cursus et justo eu consequat. Fusce finibus sem neque, sed faucibus nibh pellentesque
eleifend. Mauris euismod facilisis iaculis.</p>

<header class= bottom>Learn More</header>

</div>


<div class="digitalMarketing"><header class=header><h4>Digital Marketing</h4></header>

<p class = "digitalMarketingtext">Nulla suscipit interdum diam at maximus. Proin vitae tellus rutrum, accumsan nunc sit amet, iaculis tortor. Mauris consectetur feugiat justo quis aliquet. Curabitur cursus et justo eu consequat. Fusce finibus sem neque, sed faucibus nibh pellentesque
eleifend. Mauris euismod facilisis iaculis.</p>

<heade class = bottom>Learn More</header>

</div>


Web Development

Nulla suscipit interdum diam at maximus. Proin vitae tellus rutrum, accumsan nunc sit amet, iaculis tortor. Mauris consectetur feugiat justo quis aliquet. Curabitur cursus et justo eu consequat. Fusce finibus sem neque, sed faucibus nibh pellentesque
eleifend. Mauris euismod facilisis iaculis.

Learn More



iOS Development

Nulla suscipit interdum diam at maximus. Proin vitae tellus rutrum, accumsan nunc sit amet, iaculis tortor. Mauris consectetur feugiat justo quis aliquet. Curabitur cursus et justo eu consequat. Fusce finibus sem neque, sed faucibus nibh pellentesque
eleifend. Mauris euismod facilisis iaculis.

Learn More



Android Development

Nulla suscipit interdum diam at maximus. Proin vitae tellus rutrum, accumsan nunc sit amet, iaculis tortor. Mauris consectetur feugiat justo quis aliquet. Curabitur cursus et justo eu consequat. Fusce finibus sem neque, sed faucibus nibh pellentesque
eleifend. Mauris euismod facilisis iaculis.

Learn More
</section>

Some Facts About Our Services

Nulla suscipit interdum diam at maximus. Proin vitae tellus rutrum, accumsan nunc sit amet, iaculis tortor. Mauris consectetur feugiat justo quis aliquet. Curabitur cursus et justo eu consequat. Fusce finibus sem neque, sed faucibus nibh pellentesque
eleifend. Mauris euismod facilisis iaculis.


Awesome thing
Amazing thing
Cool thing
Great thing

<img class="services-info-img" src="img/services-info.png" alt="one of our employees hard at work">

Copyright Great Idea! 2018
