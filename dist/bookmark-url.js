javascript:"use strict";(function(){function jsDate2bibTex(date){var dd=date.getDate();var mm=date.getMonth()+1;var yyyy=date.getFullYear();if(dd<10){dd="0"+dd}if(mm<10){mm="0"+mm}return yyyy+"-"+mm+"-"+dd}var title=document.title;var url=document.URL;var author_tag=document.querySelector("[name=author]");var author=author_tag==null?"":author_tag.content;var type="article";var today=new Date;var urldate=jsDate2bibTex(today);var date=jsDate2bibTex(new Date(document.lastModified));var title_key=title.replace(/[^0-9a-z]/gi,"");var citationKey=title_key+"-"+date;if(url.startsWith("https://www.youtube.com")){type="video";author=window["ytInitialPlayerResponse"]["videoDetails"]["author"];title=window["ytInitialPlayerResponse"]["videoDetails"]["title"]}else if(url.startsWith("https://vimeo.com")){type="video"}var title_tex=title.replace(/\u00e4/g,'\\"a').replace(/\u00c4/g,'\\"A').replace(/\u00f6/g,'\\"o').replace(/\u00d6/g,'\\"O').replace(/\u00fc/g,'\\"u').replace(/\u00dc/g,'\\"U').replace(/\u00DF/g,'\\"s');if(author==null||author==""){author=prompt("No author found - please provide a value: ","Unknown");if(author==null)return}var affiliation=prompt("No affiliation found - empty means no affiliation: ","");if(affiliation==null)return;date=prompt("Best guess date - please adjust as needed",date);if(date==null)return;var note=prompt("Want to provide a note ? ","");if(note==null)return;var bibTexEntry="- id: "+citationKey+"\r  type: "+type+' \n  title: "'+title_tex+'"\r  date: "'+date+'"\r'+(author?'  author: "'+author+'"\r':"")+(affiliation?'  affiliation: "'+affiliation+'"\r':"")+(note?'  note: "'+note+'"\r':"")+'  url: "'+url+'"\r  urldate: "'+urldate+'"\r';var ghurl="https://github.com/quarkusio/quarkusio.github.io/issues/new?"+"body="+encodeURIComponent("```\r"+bibTexEntry+"\r```")+"&title="+encodeURIComponent("Add "+title_tex+" to Publications")+"&labels=publication";window.open(ghurl)})();