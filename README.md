

This is a overreview of my portfolio website

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### Screenshot

![](./screenshot.jpg)


## My process

- First I wrote all of the copy needed for my portfolio
    - That included the case studies, bio, and contact

- Then I found a design template that I liked and coded my site to look similar to it

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

A problem I had was turning the nav links from the hamburger menu to flexbox when the screen increased in size. After clicking on the hamburger menu and then increasing the size the nav links would stay in a block style, regardless of the fact that I added a tablet media query to change the nav links to a flex box style. 

What finally worked was adding an !important after the flex box style so that it could override the mobile's block style.
```css
#myLinks{	
			display: flex !important;
			justify-content: space-between;	
			width: 60%;
			
			
			}
```


### Useful resources

- https://www.w3schools.com/howto/howto_js_mobile_navbar.asp. Used this hamburger menu for mobile version

- https://www.w3schools.com/jsref/met_win_matchmedia.asp. I needed this to help with writing a media query in Javascript. I had time getting my "myLinks" id to flex in tablet and desktop screens and thought this could help. While I didn't use it, it was still resourceful in its own way.


## Author

- Website - [Lisa Thompson](https://www.lisacodesnow.com)


## Acknowledgments

Lisa Savoie was a teacher and mentor at Skillcrush and she reviewed my portfolio with amazing tips. She helped when I couldn't figure out the nav menu and was always encouraging. 

