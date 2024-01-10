# TerrariumBuild
A site where you can build your own terrarium of succulents and cacti.
<img width="1419" alt="Terrarium-Build-Sample" src="https://github.com/erlopez11/terrariumBuild/assets/101296798/da936f09-4857-4f6b-ab56-433f40f8953a">

# Description
This is a project where the user can click and drag the succulent images and place them inside of the glass jar in the configuration of their choosing to create their own terrarium. The project was created using HTML, CSS, and Javascript for a lesson featured in Microsofts Web Dev for Beginners lessons.

# Design
This project began with brainstorming and sketching the type of jar and succulents that I wanted to include in the final design; I knew from the beginning that I wanted to create my own drawings of the succulents instead of using stock images. I made a list of 14 succulents that had a variety of colors, shapes, and textures. Afterwards I drew and digitally painted each succulent in Krita. Once all of the succulents were created, I used Figma to create a mock-up design of the layout and color scheme I wanted to use for this project. The design resembles a small floating shelf on a wall using natural colors that commonly appear in desert like terrariums.
<img width="781" alt="Terrarium-Build-Figma" src="https://github.com/erlopez11/terrariumBuild/assets/101296798/55e277d7-1aa8-413f-bffd-62a9bf41625a">


# Challenges
One of the challenges I faced early on was with the placement and sizing of the succulent and jar elements. Since there 14 succulents, it became a challenge trying to figure out how to place them so they all fit within the left side container without overflowing and without being reduced to too small of a size. When the succulents were too small the jar overpowered them. When they were too large, they overflowed the screen and was only able to fit three succulents in the jar. I used a combination of grid and flexbox, as well as experimenting with the image sizing, in order to get it  as close as possible to the design. Even now, there is some overflow and adjustments that need to be made.

Another challenge faced was the functionality of the click, drag, and drop of the the succulent element. After looking up tutorials on how to create this functionality, I ended up deciding to use the code provided by the lesson's project in the Microsoft Web Dev for Beginners course, since this was closer to the type of functionality that I wante to use. But I had difficulties getting the element to move from the left side container to the jar side. In the chrome developer tools, the succulents numerical positioning would show that it was moving, but physically it stayed in the same place. Almost as if there was a barrier keeping it from moving. In the end, had an incorrect placement in the javascript code and one of my css positioning styles was interfering with the code.

# Future Implementation
Currently, there is no way to reset the terrarium without having to refresh the brower. So I would like to add a reset button alongside a button or function to allow the user to scale the succulent element to 3 diffrent sizes (small, medium, large). I would also like to add a way for the user to rotate and adjust the placement between foreground and background, so that the user can have more control over the placement and positioning of the succulent element within their terrarium. I would also like to continue to resolve some of the layout issues, like the image overflow at the bottom of the screen, present in the project. This might even require redesigning the  site layout so that it fits all elements, including the new additions, and allows the site to resize to different screen sizes without breaking the design.

# Live Demo
[TerrariumBuild](https://erlopez11.github.io/terrariumBuild/)
