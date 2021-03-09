let headerTag = document.createElement('h1');
let headerText = document.createTextNode('My HTML adventure');
headerTag.appendChild(headerText);
document.querySelector("body").appendChild(headerTag);

let paraTag = document.createElement('p');
let paraText = document.createTextNode("We're writing HTML markup to display in our <strong>browser</strong>");
paraTag.appendChild(paraText);
document.querySelector("body").appendChild(paraTag);

paraTag.innerHTML = `We're writing HTML markup to display in our <strong>browser</strong>. We're basically telling computers what to do. <em>Neat!</em>. We're writing <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> markup to display in our <strong>browser</strong>.`;

let tbl = document.createElement("table");
let tblBody = document.createElement("thead");
paraTag.appendChild(tbl);
document.querySelector("body").appendChild(tbl);