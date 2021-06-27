// console.log(chrome);
// console.log('hello');

function cleanProblemStatement() {
    document.querySelector("#ember242 > section")?.remove();
    document.querySelector("#ember242 > header")?.remove();
    document.querySelector("#content-regions > div")?.remove();
    document.querySelector("#content-regions > header > div > div.large-12.columns > div")?.remove();    
    document.querySelector("#cc-footer-div")?.remove();
    document.querySelector("#problem-comments > div > div")?.remove();
    document.querySelector("#content-regions > aside")?.remove();
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > span")?.remove();
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > i")?.remove();
    document.querySelector("#problem-statement")?.firstElementChild?.remove();
    document.querySelector("#problem-statement > aside.problem-info.mathjax-support")?.remove();
    document.querySelector("#problem-statement > aside")?.remove();
    document.querySelector("#problem-statement > div")?.remove();    
    document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.boxShadow = 'none';
    document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.width = '100%';
    document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.paddingRight = '0';
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1").style.borderBottom = 'none';
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > a").innerText = 'Submit';
    document.querySelector("#content-regions").style.margin = "60px auto 0";
    document.querySelector("#content-regions").style.padding = "40px 55px";
    document.querySelector("#content-regions").style.boxShadow = "0 2px 10px 2px rgb(0 0 0 / 10%)";
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > a").setAttribute('target', '_blank');
    document.querySelector("body header > div").style.margin = "0 !important";
    document.querySelector("body header > div").style.maxWidth = "100%";
}

function getProblemStatementContent() {
    cleanProblemStatement();
    return document.querySelector("#content-regions").innerHTML;
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,ru;q=0.8",
        "cache-control": "no-cache",
        "content-type": "text/plain;charset=UTF-8",
        "pragma": "no-cache",
        "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "cross-site"
      },
      "referrer": "https://www.codechef.com/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "method": "POST",
      "mode": "cors",
      "credentials": "omit",
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

async function getFromCDN(href) {
    const data = await postData("https://cdn.codechef.workers.dev/", { type: "query", id: href });
    if (data.content) {
        return data.content;
    }
    data.content = getProblemStatementContent();
    data.type = "submit";
    const res = await postData("https://cdn.codechef.workers.dev/", { ...data, id: href })
    if (res.status === 'success') {
        return data.content;
    }
}

async function getFromCache() {
    let data;
    if (window.location.href.match(/https:\/\/.*\.codechef\.com\/.*\/problems\/.*/gm)) {
        data = await getFromCDN(window.location.href);
    }
    return data;
}

function paper(props) {
    const el = document.createElement('div');
    el.innerHTML = props.content;
    Object.assign(el.style, {
        ...background.style,
        background: "white",
        margin: "50px 20vw",
    });
    return el;
}

function background(props) {
    const el = document.createElement('div');
    el.appendChild(paper(props));
    Object.assign(el.style, {
        ...background.style,
        background: "red",
        position: "fixed",
        minHeight: "100vh",
        width: " 100vw",
        top: 0
    });
    return el;
}

setTimeout(async () => {
    const data = await getFromCache();
    const body = document.querySelector('body');
    body.childNodes.forEach(cn => cn.remove());
    body.appendChild(background({content: data}));
}, 5000);
