const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

function renderResources(){
    
    let printHTML = ""
    /*lager en tom variabl slik at den kan ta imot dataen fra mapping-en og så derretter skrive ut det til HTML-en*/

    resources.map((button, id) => printHTML += `
    <button onClick="activateArticle(${id})" class="inactive" id="button-${id}">${button.category}</button>`)
    /*kjører en map først for å lage buttons for hvert av objektene i resources arrayen og legger det til i printHTML.
    Bruker button parameteren til å hente ut category slik at riktig navn står på button-en. id parameteren brukes til å gi hver knapp en unik id slik at jeg senere kan endre på class-en til buttons.*/

    resources.map((article, id) => printHTML += `
    <article id="article-${id}" class="hidden">
    <h2>${article.category}</h2>
    <p>${article.text}</p>
    <ul>
        ${article.sources.map(links => 
        `<li><a href="${links.url}">${links.title}</a></li>`).join("")}
    </ul>
    </article>`)
    /*Den andre mappen jeg kjører er for å produsere artikkelene og legger det til i printHTML.
    Den bruker article parameteren til å hente ut dataen fra resources arrayen og putter det i HTML strukturen jeg vil ha.
    Jeg måtte mappe sources arrayen som er i resources array slik at jeg kan hente ut både title og url fra den.
    Id parameteren brukes da igjen for å gi en unik id til hver artikkel slik at jeg kan endre class senere i oppgaven. */

    document.querySelector("main").innerHTML += printHTML
    /*Linjen med kode over tar da å skrive ut alt som står i printHTML til main i HTML*/

    document.querySelector("button").classList.replace("inactive", "active")
    document.querySelector("article").classList.remove("hidden")
    /*koden over tar å endrer class-en til det første elemente i HTML strukteren.
    classlist.replace endrer classes til den første button-en fra inactive til active. classlist.remove fjerner hidden class-en til den første article-en i HTML strukturen.
    Dette gjør at når du åpner nettsiden for første gang så vil den første artikkelen være synlig.*/
}

function activateArticle(id){
    const buttonElements = document.querySelectorAll("button");
    buttonElements.forEach((element) => {
        element.classList.replace("active", "inactive");
    });

    const articleElements = document.querySelectorAll("article");
    articleElements.forEach((element) => {
        element.classList.add('hidden');
    });
    /*https://codingbeautydev.com/blog/javascript-remove-class-from-multiple-elements/
    Slet med å finne en måte å endre class-er på flere elementer samtidig så jeg brukte koden i lenken over til å løse det.
    Koden over bruker forEach til å gå igjennom alle button og article elementer.
    Gjennom classlist.replace så erstatter den classen på buttons slik at ingen er "active" og  classlist.add tar da å legger til hidden slik at ingen av artikkelene syntes.
    Jeg gjør dette slik at når man trykker på en ny artikkel så vil den forrige som var aktivert bli deaktivert slik at den nye som blir trykket på vises*/

    document.querySelector("#button-"+id).classList.replace("inactive", "active")
    document.querySelector("#article-"+id).classList.remove("hidden")
    /*koden over tar imot parameteren "id" slik at det elementet som blir trykket på blir endret.
    button går fra inactive til active og hidden blir fjernet fra artikkelen slik at artikkelen syntes.
    Hele activeArticle funksjonen gjør da at først alle buttons og articles blir "deaktivert" og så at den som blir trykket på blir "aktivert".*/
}

renderResources()