# ChuckYe-Meme-Generator
Meme generator with Chuck Norris and Kanye quotes

We decided to work backwards and try and find usable, free API's before we chose our poject. Some of the first workable API's we found were focused on quotes and GIFs so we built a meme generator from GIFs, static images and generated quotes. 

The GIF url, title, and index are all stored locally as well as an indexer for the download function to help generate unique names for your memes.

The CSS framework we chose was Pure https://purecss.io/ which mostly handles Layour. We wanted a simple, lightweight framework that gave us more control over the styling but handled some of the layout for us. We like styling, hate positioning.

Our webapp handles user input entirely through search parameters: select from category, trending GIFs, or input a specific search term. The download function also allows users to decide which file format to save as.

The server-side APIs we used were : 
Giphy https://api.giphy.com/v1/gifs/
Kanye Quote Generator https://api.kanye.rest
Chuck Quote Generator https://api.chucknorris.io/jokes/random.

No alerts or Modals were used. The only case we really needed it for was the null case if you tried to use the search function without any input.
We changed it to just search "all" in that case, so no popups were needed.