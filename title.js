const titles = [
    "g",
    "ge",
    "gel",
    "gelo",
    "geloh",
    "geloh1",
    "geloh12",
    "geloh123",
    "geloh123",
    "geloh12",
    "geloh1",
    "geloh",
    "gelo",
    "gel",
    "ge",
    "g"
];

let index = 0;

function changeTitle() {
    document.title = titles[index];  
    index = (index + 1) % titles.length;
}

setInterval(changeTitle, 150);
