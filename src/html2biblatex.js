(() => {
  
  function jsDate2bibTex(date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
  
    // Add zero prefix:
    if (dd < 10) {
      dd = `0${dd}`;
    }
  
    // Add zero prefix:
    if (mm < 10) {
      mm = `0${mm}`;
    }
  
    // create string for date:
    return `${yyyy}-${mm}-${dd}`;
  }

  let title = document.title;
  const url = document.URL;

  // get author if meta tag exists:
  const author_tag = document.querySelector("[name=author]");
  let author = author_tag == null ? "" : author_tag.content;
  let type = "article";


  const today = new Date();
  const urldate = jsDate2bibTex(today);

  let date = jsDate2bibTex(new Date(document.lastModified));

  // remove special characters for citation key:
  let title_key = title.replace(/[^0-9a-z]/gi, "");

  // create citation key:
  const citationKey = `${title_key}-${date}`;

  // youtube specific
  if (url.startsWith("https://www.youtube.com")) {
    type = "video";
    author = window['ytInitialPlayerResponse']["videoDetails"]["author"];
    title = window['ytInitialPlayerResponse']["videoDetails"]["title"];
  } else if (url.startsWith("https://vimeo.com")) {
    type = "video"
  }

  // Replace german umlauts with latex commands:
  let title_tex = title
    .replace(/\u00e4/g, '\\"a')
    .replace(/\u00c4/g, '\\"A')
    .replace(/\u00f6/g, '\\"o')
    .replace(/\u00d6/g, '\\"O')
    .replace(/\u00fc/g, '\\"u')
    .replace(/\u00dc/g, '\\"U')
    .replace(/\u00DF/g, '\\"s');

  if (author == null || author == "") {
    author = prompt("No author found - please provide a value: ", "Unknown");
  }

  let affiliation = prompt("No affiliation found - please provide a value: ", "Unknown");

  date = prompt("Best guess date - please adjust as needed", date);

  let note = prompt("Want to provide a note ? ", "");

  // generate BiBTeX entry:
  const bibTexEntry = `- id: ${citationKey}\r\
\ \ type: ${type} 
\ \ title: "${title_tex}"\r\
\ \ date: "${date}"\r\
${author ? `\ \ author: "${author}"\r` : ""}\
${affiliation ? `\ \ affiliation: "${affiliation}"\r` : ""}\
${note ? `\ \ note: "${note}"\r` : ""}\
\ \ url: "${url}"\r\
\ \ urldate: "${urldate}"\r\
`;

  window.prompt("Copy to clipboard: Ctrl+C, Enter", bibTexEntry);
  
})();
