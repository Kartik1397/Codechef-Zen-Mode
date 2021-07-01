document.getElementById('_webengage_script_tag')?.remove();

function cleanPage() {
    document.querySelector("#ember242 > section").style.display = "none";
    document.querySelector("#ember242 > header").style.display = "none";
    document.querySelector("#content-regions > div").style.display = "none";
    document.querySelector("#content-regions > header > div > div.large-12.columns > div").style.display = "none";
    document.querySelector("#content-regions > header > div > div.large-12.columns > div").className = "";
    document.querySelector("#cc-footer-div").style.display = "none";
    document.querySelector("#problem-comments > div > div").style.display = "none";
    document.querySelector("#content-regions > aside").style.display = "none";
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > span").style.display = "none";
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > i").style.display = "none";
    if (document.querySelector("#problem-statement")?.firstElementChild.nodeName === 'H3') {
        document.querySelector("#problem-statement").firstElementChild.style.display = "none";
    }
    document.querySelector("#problem-statement > aside.problem-info.mathjax-support").style.display = "none";
    document.querySelector("#problem-statement > aside").style.display = "none";
    document.querySelector("#problem-statement > div").style.display = "none";
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

function savePage() {
    document.querySelector("#ember242 > section").style.display2 = document.querySelector("#ember242 > section").style.display;
    document.querySelector("#ember242 > header").style.display2 = document.querySelector("#ember242 > header").style.display;
    document.querySelector("#content-regions > div").style.display2 = document.querySelector("#content-regions > div").style.display;
    document.querySelector("#content-regions > header > div > div.large-12.columns > div").style.display2 = document.querySelector("#content-regions > header > div > div.large-12.columns > div").style.display;
    document.querySelector("#content-regions > header > div > div.large-12.columns > div").className2 = document.querySelector("#content-regions > header > div > div.large-12.columns > div").className;
    document.querySelector("#cc-footer-div").style.display2 = document.querySelector("#cc-footer-div").style.display;
    document.querySelector("#problem-comments > div > div").style.display2 = document.querySelector("#problem-comments > div > div").style.display;
    document.querySelector("#content-regions > aside").style.display2 = document.querySelector("#content-regions > aside").style.display;
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > span").style.display2 = document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > span").style.display;
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > i").style.display2 = document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > i").style.display;
    if (document.querySelector("#problem-statement")?.firstElementChild.nodeName === 'H3') {
        document.querySelector("#problem-statement").firstElementChild.style.display2 = document.querySelector("#problem-statement").firstElementChild.style.display;
    }
    document.querySelector("#problem-statement > aside.problem-info.mathjax-support").style.display2 = document.querySelector("#problem-statement > aside.problem-info.mathjax-support").style.display;
    document.querySelector("#problem-statement > aside").style.display2 = document.querySelector("#problem-statement > aside").style.display;
    document.querySelector("#problem-statement > div").style.display2 = document.querySelector("#problem-statement > div").style.display;

    document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.width2 = document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.width;
    document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.boxShadow2 = document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.boxShadow;
    document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.paddingRight2 = document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.paddingRight;
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1").style.borderBottom2 = document.querySelector("#content-regions > header > div > div.large-12.columns > h1").style.borderBottom;
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > a").innerText2 = document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > a").innerText;
    document.querySelector("#content-regions").style.margin2 = document.querySelector("#content-regions").style.margin;
    document.querySelector("#content-regions").style.padding2 = document.querySelector("#content-regions").style.padding;
    document.querySelector("#content-regions").style.boxShadow2 = document.querySelector("#content-regions").style.boxShadow;
    document.querySelector("body header > div").style.margin2 = document.querySelector("body header > div").style.margin;
    document.querySelector("body header > div").style.maxWidth2 = document.querySelector("body header > div").style.maxWidth;
}

function restorePage() {
    document.querySelector("#ember242 > section").style.display = document.querySelector("#ember242 > section").style.display2;
    document.querySelector("#ember242 > header").style.display = document.querySelector("#ember242 > header").style.display2;
    document.querySelector("#content-regions > div").style.display = document.querySelector("#content-regions > div").style.display2;
    document.querySelector("#content-regions > header > div > div.large-12.columns > div").style.display = document.querySelector("#content-regions > header > div > div.large-12.columns > div").style.display2;
    document.querySelector("#content-regions > header > div > div.large-12.columns > div").className = document.querySelector("#content-regions > header > div > div.large-12.columns > div").className2;
    document.querySelector("#cc-footer-div").style.display = document.querySelector("#cc-footer-div").style.display2;
    document.querySelector("#problem-comments > div > div").style.display = document.querySelector("#problem-comments > div > div").style.display2;
    document.querySelector("#content-regions > aside").style.display = document.querySelector("#content-regions > aside").style.display2;
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > span").style.display = document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > span").style.display2;
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > i").style.display = document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > i").style.display2;
    if (document.querySelector("#problem-statement")?.firstElementChild.nodeName === 'H3') {
        document.querySelector("#problem-statement").firstElementChild.style.display = document.querySelector("#problem-statement").firstElementChild.style.display2;
    }
    document.querySelector("#problem-statement > aside.problem-info.mathjax-support").style.display2 = document.querySelector("#problem-statement > aside.problem-info.mathjax-support").style.display2;
    document.querySelector("#problem-statement > aside").style.display2 = document.querySelector("#problem-statement > aside").style.display2;
    document.querySelector("#problem-statement > div").style.display2 = document.querySelector("#problem-statement > div").style.display2;

    document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.width = document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.width2;
    document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.boxShadow = document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.boxShadow2;
    document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.paddingRight = document.querySelector("#content-regions > section.content-area.small-8.columns.pl0").style.paddingRight2;
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1").style.borderBottom = document.querySelector("#content-regions > header > div > div.large-12.columns > h1").style.borderBottom2;
    document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > a").innerText = document.querySelector("#content-regions > header > div > div.large-12.columns > h1 > a").innerText2;
    document.querySelector("#content-regions").style.margin = document.querySelector("#content-regions").style.margin2;
    document.querySelector("#content-regions").style.padding = document.querySelector("#content-regions").style.padding2;
    document.querySelector("#content-regions").style.boxShadow = document.querySelector("#content-regions").style.boxShadow2;
    document.querySelector("body header > div").style.margin = document.querySelector("body header > div").style.margin2;
    document.querySelector("body header > div").style.maxWidth = document.querySelector("body header > div").style.maxWidth2;
}

function enableDarkMode() {
    document.querySelector('html').style.filter = "invert(0.94) hue-rotate(180deg)";
    document.querySelector('body').style.filter = "invert(0.10)";
    document.querySelector("#content-regions").style.boxShadow = "none";
}

function disableDarkMode() {
    document.querySelector('html').style.filter = "none";
    document.querySelector('body').style.filter = "none";
    document.querySelector("#content-regions").style.boxShadow = "0 2px 10px 2px rgb(0 0 0 / 10%)";
}

let zen = false;
function toggleZen() {
    if (zen) {
        restorePage();
    } else {
        savePage();
        cleanPage();
    }
    zen = !zen;
}

let dark = false;
function toggleDark() {
    if (dark) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
    dark = !dark;
}

const defaultZen = Boolean(window.localStorage.getItem('zen')) || true;
const defaultDark = Boolean(window.localStorage.getItem('dark')) || false;
setTimeout(async () => {
    if (defaultZen) {
        toggleZen();
    }
    if (defaultDark) {
        toggleDark();
    }
}, 4000);

window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key == 'i') {
        toggleZen();
    }
});

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "zen":
                if (message.value === zen) break;
                if (window.localStorage.getItem('zen')) {
                    window.localStorage.setItem('zen', !Boolean(window.localStorage.getItem('zen')));
                } else {
                    window.localStorage.setItem('zen', !defaultZen);
                }
                toggleZen();
                break;
            case "dark":
                if (message.value === dark) break;
                if (window.localStorage.getItem('dark')) {
                    window.localStorage.setItem('dark', !Boolean(window.localStorage.getItem('dark')));
                } else {
                    window.localStorage.setItem('dark', !defaultDark);
                }
                toggleDark();
            break;
        }
    }
);

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     alert(response.farewell);
// });