var pics_array = [
    "Amey Pathak.png",
    "Ajay Pathak.jpeg",
    "Aditi Pathak.jpeg",
    "Rohini Pathak.jpeg",
];

var text_array = [
    "Amey Pathak",
    "Ajay Pathak",
    "Aditi Pathak",
    "Rohini Pathak",
];
var o = 1;
var y = 0;

function next() {

    if (o == 4) {
        o = 0;
        document.getElementById("head1").style.display = "none";
    };

    document.getElementById("family").src = pics_array[o];
    o++;

    if (y == 4) {
        y = 0;
    };
    document.getElementById("family_text").innerHTML = text_array[y];

};