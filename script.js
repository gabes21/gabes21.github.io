

var pro1 = ["Personal Website", "./asset/personalwebsite.JPG", "A website that shows an information about myself", ["HTML5", "CSS", "Javascript"]];
var pro2 = ["Room Booking System", "./asset/Roombooking.JPG", "A website that allows for the booking of available room based on specified date with a little interactive map", ["HTML5", "CSS", "TypeScript", "PHP", "Angular", "Leaflet"]];
var pro3 = ["Book Booking System", "./asset/Bookbooking.JPG", "A website that allows for the booking of books based on availibility on the specified date", ["HTML5", "CSS", "PHP", "Laravel", "MySQL", "Javascript"]];
var pro4 = ["Jujutsu Kaisen Character Win/Loss Rate API", "./asset/jjkapi.JPG", "An API that shows the win loss score of characters from a popular anime series Jujutsu Kaisen with Create and Update capability.", ["HTML", "CSS", "PHP", "Laravel", "MySQL"]];
var projects = [pro1, pro2, pro3, pro4];
var i = 0;

function removeTechs(){
    const list = document.querySelector("div.techs");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    };
} 

function addTechs(techs) {
    let numtechs = techs.length;
    var j = 0;
    while(j < numtechs) {
        let html = "<div>"+ techs[j] +"</div>";
        document.querySelector("div.techs").insertAdjacentHTML("afterbegin", html)
        j++;
    }

}

function changeProj (proj) {
    document.querySelector("h5.projtitle").innerHTML = proj[0]; 
    document.querySelector("img.projimage").src = proj[1]; 
    document.querySelector("p.projdesc").innerHTML = proj[2]; 
    removeTechs();
    addTechs(proj[3]);

}
document.querySelector("div.cleft").onclick = function() {
    console.log("cleft clicked");
    i = (i - 1 + projects.length) % projects.length;
    changeProj(projects[i]);
};

document.querySelector("div.cright").onclick = function() {
    console.log("cright clicked");
    i = (i + 1) % projects.length;
    changeProj(projects[i]);
};

