const query = "<%= q %>";
if (query) {
    const logo = document.querySelector("#hoogleLogo");
    logo.scrollIntoView( {behavior: "smooth"} );
}

const topBtn = document.querySelector(".topBtn");
topBtn.addEventListener("click", () => {
    window.scrollTo( {top : 0, behavior : "smooth"} );

});
