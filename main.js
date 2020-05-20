function getData() {
    const container = document.getElementById("container");
    const url = 'https://dog.ceo/api/breeds/image/random';
    const xhttps = new XMLHttpRequest();


    xhttps.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText));
            const data = JSON.parse(this.responseText);
            document.getElementById("image").src = data.message;
        }
    };
    xhttps.open("GET", url, true);
    xhttps.send();

}
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    getData();
});