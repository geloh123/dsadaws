const titles = [
"p",
"pt",
"pto",
"ptos",
"ptosz",
"ptosze",
"ptoszek",
"ptosze",
"ptosz",
"ptos",
"pto",
"pt",
"p"
];

let index = 0;

function changeTitle() {
    document.title = titles[index];  
    index = (index + 1) % titles.length;
}

setInterval(changeTitle, 150);
