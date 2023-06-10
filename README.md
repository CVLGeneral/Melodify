<!DOCTYPE html>
<html lang="en">

<body>
	<h1>The Melodify App</h1>
	<p>The Melodify App is a web application that provides a comprehensive list of songs categorized by genres. Users can select a genre to view songs related to that part and also search for songs by name. Additionally, users can view detailed information about each song, including similar songs and descriptions.</p>
	<p>This project was built using React and the Chakra UI, Styled Components and Material-UI libraries for styling.</p>


<h2>Features</h2>
<ul>
	<li>View all songs</li>
	<li>Search for songs by name</li>
	<li>View detailed information about each song</li>
    <li>View Songs based on genre</li>
	<li>View all artists</li>
    <li>View all songs belonging to one artist</li>

</ul>

<h2>Dependencies</h2>
<p>The following dependencies are required to run the Melodify App:</p>
<ul>
	<li>React</li>
	<li>React Router</li>
	<li>Chakra UI</li>
	<li>Styled Components</li>
	<li>Material-UI</li>
</ul>

<h2>Getting Started</h2>
<p>To get started with the Melodify App, follow these steps:</p>
<ol>
	<li>Clone this repository to your local machine</li>
	<li>Install the required dependencies by running npm install</li>
	<li>Start the development server by running npm start</li>
</ol>

<h2>Data Fetching</h2>
<p>The Imelodify App fetches song and artists data from an Sinatra API using fetch. The data is then stored in state using the useState hook. The API endpoint and headers are defined in the FetchData.js file.</p>

<h2>Components</h2>
<p>The Melodify App is made up of the following components:</p>

### Artist.js

This file defines the `Artist` component. It displays information about an artist and renders an artist card. It also includes a link to the artist's detail page.

### ArtistCard.js

This file defines the `ArtistCard` component. It fetches artists data from an API and displays a horizontal scrollable list of artist cards.

### ArtistDetail.js

This file defines the `ArtistDetail` component. It fetches artist data and songs data for a specific artist based on the provided ID. It displays the artist's name, image, and a list of songs associated with the artist.

### ArtistSong.js

This file defines the `ArtistSong` component. It fetches artist data and songs data for a specific artist based on the provided ID. It displays the artist's name, bio, and a list of songs associated with the artist.

### Button.js

This file defines the `Button` component. It renders a styled button with a link.

### Detail.js

This file defines the `Detail` component. It displays details about a song, including an image, title, and description.

### ArtistDetail.js

This file defines the `ArtistDetail` component. It fetches artist detail data based on the provided ID and displays the artist's detail information, including the artist's name and a list of songs associated with the artist.

### HomeHorizontalScrollbar.js

This file defines the `HomeHorizontalScrollbar` component. It displays a horizontal scrollbar with different song genres. It allows the user to scroll through the genres and select a genre.

### NewSong.js

This file defines the `NewSong` component. It allows the user to add a new song by filling out a form with title, genre, description, release date, image path, and artist ID.


<h2>Styling</h2>
<p>The Melodify App uses Chakra UI, Styled Components and Material-UI for styling.</p>
<h2>Author</h2>
This Melodify App application was created by: 
<ol>
Kiprotich Ngetich Leonard

</ol> You can contact us at cvlgeneral2020@gmail.com.

<h2>Contributing</h2>
    <p>If you would like to contribute to the project, please follow these steps:</p>
    <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch for your changes using <code>git checkout -b your-branch-name</code>.</li>
    <li>Make your changes to the code.</li>
    <li>Test your changes.</li>
    <li>Commit your changes with a descriptive commit message using <code>git commit -m "your commit message"</code>.</li>
    <li>Push your changes to your forked repository using <code>git push origin your-branch-name</code>.</li>
    <li>Submit a pull request to the original repository.</li>
    </ol>

<h2>License</h2>
<p>This project is licensed under the <a href="license.md">MIT License</a></p>