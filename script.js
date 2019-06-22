function getBio() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let anObj = JSON.parse(this.responseText);
            document.getElementById("einBio").innerHTML = anObj.bio;
        }
    };
xhttp.open("GET", "einstein.json", true);
xhttp.send();
}

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        document.getElementById("einInfo").innerHTML = myObj.name;
        document.getElementById("einInfo2").innerHTML = myObj.bday;
    }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();


