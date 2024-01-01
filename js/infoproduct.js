let OrgProducts = JSON.parse(localStorage.getItem("allProdcut"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".info-content");

let productsDetails = OrgProducts.find((item) => item.id == productId);

if (localStorage.getItem("productId")) {
    itemDom.innerHTML = `
    <h3 class="last-project">${productsDetails.heading}</h3>
    
    <img src="${productsDetails.imgUrl}" alt="">
    
    <h2><span>Name:</span> ${productsDetails.heading} </h2>
    <p><span>Description:</span> ${productsDetails.desc}</p>
    
    <h3 class="iframe-title">Watch On Youtube</h3>
    
    <iframe width="560" height="315" src="${productsDetails.iframe}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <a href="https://github.com/ProgrammerFero/100-Days-Of-Projects.git" class="buySoucre">Source Code</a>
    
    `    
}

if (productId == null || productId == undefined ) {
    alert("You Should Click An Any Day\n To Show This Page");
    window.location = "100days.html"
}