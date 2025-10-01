//https://pixabay.com/api/?key=52522940-9783397e1c576a849f4672259&q=yellow+flowers&image_type=photo

const query = "<%= q %>";
if (query) {
    const logo = document.querySelector("#hoogleLogo");
    logo.scrollIntoView( {behavior: "smooth"} );
}

const topBtn = document.querySelector(".topBtn");
topBtn.addEventListener("click", () => {
    window.scrollTo( {top : 0, behavior : "smooth"} );
});