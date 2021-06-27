function cleanPage() {
    document.querySelector("#ember242 > section")?.remove();
    document.querySelector("#ember242 > header")?.remove();
    document.querySelector("#content-regions > div")?.remove();
    document.querySelector("#content-regions > header > div > div.large-12.columns > div")?.remove();    
    document.querySelector("#cc-footer-div")?.remove();
    document.querySelector("#problem-comments > div > div")?.remove();
    document.querySelector("#content-regions > aside")?.remove();
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > span")?.remove();
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > i")?.remove();
    if (document.querySelector("#problem-statement")?.firstElementChild.nodeName === 'H3') {
        document.querySelector("#problem-statement")?.firstElementChild?.remove();        
    }
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

setTimeout(async () => {
    cleanPage();
}, 2000);
