url2quarkuspub
==============

Bookmarklet to make it easier to submit a url to [Quarkus Publications](https://quarkus.io/publications/).

Just click on the quarkuspub bookmark button, fill out missing/asked for metadata and it will automatically open a browser with an issue.

--------------------------------------------------------

Installation
------------

 1. Create a new bookmark in the bookmark panel of your browser.
 2. Name it ("quarkuspub" or whatever).
 3. URL: [Paste here the content from the file [dist/bookmark-url.js](dist/bookmark-url.js)]

Usage
-----

 1. Load the page you want to add to Quarkus Publications.
 2. Click on the new bookmark button.
 3. Fill in the missing/asked for metadata [ENTER].
 4. A new browser tab will open with a ready filled new issue on https://github.com/quarkusio/quarkusio.github.io

Tested with Google Chrome and Opera on OSX.

--------------------------------------------------------

Build (for developers)
----------------------

1. Install [yarn](https://yarnpkg.com/lang/en/docs/install/)
2. In a terminal run

  ```bash
  yarn install
  yarn start
  ```

  for quick testing this one-liner is useful:

  ```bash
  yarn start; cat dist/bookmark-url.js| pbcopy
  ```


  Thanks to https://github.com/dmstern/html2biblatex for the original idea!
  
