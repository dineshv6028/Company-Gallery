document.addEventListener("DOMContentLoaded", function() {
    const gallery = [
        { title: "Event 1", imgSrc: "https://picsum.photos/1200/1200.jpg?1", description: "Description for event 1" },
        { title: "Event 2", imgSrc: "https://picsum.photos/1200/1200.jpg?2", description: "Description for event 2" },
        { title: "Event 3", imgSrc: "https://picsum.photos/1200/1200.jpg?3", description: "Description for event 3" },
        { title: "Event 4", imgSrc: "https://picsum.photos/1200/1200.jpg?4", description: "Description for event 4" },
        { title: "Event 5", imgSrc: "https://picsum.photos/1200/1200.jpg?5", description: "Description for event 5" },
        { title: "Event 6", imgSrc: "https://picsum.photos/1200/1200.jpg?6", description: "Description for event 6" }
    ];

    const galleryContainer = document.getElementById("gallery");

    gallery.forEach(item => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = item.imgSrc;
        img.alt = item.title;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = item.title;

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = item.description;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);

        galleryContainer.appendChild(col);
    });
});
