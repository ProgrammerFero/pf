let AllDays = [
    {
        id: 1 ,
        imgUrl: "../assest/services/1 (1).png" ,
        heading: "Day 1 - Search Bar" ,
        desc: "Search Bar Using Html , Css , Js " ,
        iframe: "https://www.youtube.com/embed/iNotJe7KR7Q?si=bHYeZLFApy1QrtGF" ,
    },
    {
        id: 2 ,
        imgUrl: "../assest/services/1 (2).png" ,
        heading: "Day 2 - Dark Mode" ,
        desc: "Dark Mode Using Html , Css , Jquery" ,
        iframe: "https://www.youtube.com/embed/NbRvjh9uHNQ?si=az_IJqLaqFnb6SPa" ,
    },
    {
        id: 3 ,
        imgUrl: "../assest/services/1 (3).png" ,
        heading: "Day 3 - Image Top Down" ,
        desc: "Drop Image Top To Down To Right" ,
        iframe: "https://www.youtube.com/embed/n34SrTNzc3k?si=d4PpIcJMoDnRcCSO" ,
    },
    {
        id: 4 ,
        imgUrl: "../assest/services/1 (4).png" ,
        heading: "Day 4 - Magnet Effect" ,
        desc: "Hover Magnet Effect" ,
        iframe: "https://www.youtube.com/embed/j0aVoPUvVBo?si=NQq7AptNr9cwdfip" ,
    },
    {
        id: 5 ,
        imgUrl: "../assest/services/1 (5).png" ,
        heading: "Day 5 - Happy Christmas" ,
        desc: "Happy Christmas - Snow Man" ,
        iframe: "https://www.youtube.com/embed/BxdH4216OW0?si=VUhr0d9sJ9P2CePW" ,
    },
    {
        id: 6 ,
        imgUrl: "../assest/services/1 (6).png" ,
        heading: "Day 6 - Animated Bg" ,
        desc: "Animated Random Background" ,
        iframe: "https://www.youtube.com/embed/0N0JbuWaPO8?si=3-S2yZ5oxYWYxG3d" ,
    },
    {
        id: 7 ,
        imgUrl: "../assest/services/1 (7).png" ,
        heading: "Day 7 - Form Valadtion" ,
        desc: "Using Html , Css , Js" ,
        iframe: "https://www.youtube.com/embed/32zRwdg2u6A?si=qN38-MHLkoL95WVU" ,
    },
    {
        id: 8 ,
        imgUrl: "../assest/services/1 (8).png" ,
        heading: "Day 8 - Toast Succsed" ,
        desc: "Toast Succsed , Invailed , Error" ,
        iframe: "https://www.youtube.com/embed/9c9k88nSfwU?si=hIGvJ2E5a6gYCLic" ,
    },
    {
        id: 9 ,
        imgUrl: "../assest/services/1 (9).png" ,
        heading: "Day 9 - Welcome 2024" ,
        desc: "Using Html , Css , Js" ,
        iframe: "https://www.youtube.com/embed/Y2CGh71ttDs?si=reFslIwng01JDEeF" ,
    },
];

window.onload = function() {
    localStorage.setItem("allProdcut" , JSON.stringify(AllDays));
}

var servicescards = document.querySelector("#cards");


function drawproduct() {
    let productUi = AllDays.map((item) => {
        return `
        <div class="services-card">
            <div class="services-img">
                <img loading="lazy" src="${item.imgUrl}" loading="lazy" alt="">
            </div>
            <div class="services-info">
                <h3 class="title">${item.heading}</h3>
                <p>${item.desc}</p>
                <a herf="#" onClick="saveItem(${item.id})">Read More</a>
            </div>
        </div>
        `;
    });
    servicescards.innerHTML = productUi.join(''); 
}

drawproduct();


function saveItem(id) {
    localStorage.setItem("productId" , id)

    window.location = "infoProduct.html"
}



function searchCards() {
    var input, filter, cards, card, title, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    cards = document.getElementById("cards");
    card = cards.getElementsByClassName("services-card");

    for (i = 0; i < card.length; i++) {
        title = card[i].getElementsByClassName("title")[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}
