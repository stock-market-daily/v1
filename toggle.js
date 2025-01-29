const jsonData = [
    {
        "title": "Welcome to StockDaily 2!",
        "description": "Stock Daily is stock trading learner's club",
        "details2": "Mobile first, bit sized lessons on stock market investing",
        "details": "Understand the Business highlights the value of"
    },
    {

        "title": "Do you know how to differentiate a good stock from the bad one? We plan to teach you exactly that",
        "details": "Walk through the 10 most i.",
        "details2": "Estimated time 2-3 minutes per term"
    }
    // Add more slides here as needed
];
const menuItems = [
    { name: "Ratios ", page: "roce.html" },
    { name: "book summary", page: "books.html" },
    { name: "itemC", page: "itemC.html" }
];

function createMenu() {
    const menuList = document.getElementById("menuList");
    menuList.innerHTML = ""; // Clear any existing content

    // Create menu items dynamically
    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.textContent = item.name;
        menuItem.onclick = () => {
            window.location.href = item.page; // Navigate to the corresponding HTML page
        };

        menuList.appendChild(menuItem);
    });
}
const summary4 = {name:"hi"}
const menuItemsLeft = [
    { name: "Ratios ", page: "roce.html", summary: summary4 },
    { name: "book summary", page: "books.html", summary:summary2 },
    { name: "itemC", page: "itemC.html",summary:summary3  }
];
function createMenuLeft() {
    const menuListLeft = document.getElementById("menuListLeft");
    menuListLeft.innerHTML = ""; // Clear any existing content

    // Create menu items dynamically
    menuItems.forEach(item => {
        const menuItemsLeft = document.createElement("div");
        menuItemsLeft.classList.add("menu-item-left");
        menuItemsLeft.textContent = item.name;
        menuItemsLeft.onclick = () => {
          //  window.location.href = item.page; // Navigate to the corresponding HTML page
          //console.log(item.summary.Value)
          console.log(item.summary)
          //console.log(sum)
          createSlides(item.summary)
          createSlides(summary2)
        };

        menuListLeft.appendChild(menuItemsLeft);
    });
}
function toggleMenu() {
    const menuList = document.getElementById("menuList");
    menuList.classList.toggle("active");
}
function toggleMenuLeft() {
    const menuListLeft = document.getElementById("menuListLeft");
    menuListLeft.classList.toggle("active");
}
function nextSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    document.getElementById(`slide${slideNumber}`).classList.add('active');
}
function createSlides(jsonData) {
    const slidesContainer = document.getElementById("slidesContainer");
    slidesContainer.innerHTML = ""; // Clear any existing content

    jsonData.forEach((slideData, index) => {
        const slideNumber = index + 1;

        // Create a new slide element
        const slideElement = document.createElement("div");
        slideElement.classList.add("slide");
        if (slideNumber === 1) slideElement.classList.add("active"); // Set the first slide as active

        slideElement.id = `slide${slideNumber}`;

        // Add slide content
        slideElement.innerHTML = `
            <div class="main-box">
                <h1>${slideData.title}</h1>
                <p>${slideData.description}</p>
                <p>${slideData.details}</p>
                <p>${slideData.details2}</p>
                <div class="button-container">
                    ${slideNumber > 1 ? `<button class="btn btn-slide" onclick="nextSlide(${slideNumber - 1})">Previous Slide</button>` : ""}

                </div>
            </div>
        `;

        slidesContainer.appendChild(slideElement);
    });
}

function createSlides(jsonData) {
    const slidesContainer = document.getElementById("slidesContainer");
    slidesContainer.innerHTML = ""; // Clear any existing content

    jsonData.forEach((slideData, index) => {
        const slideNumber = index + 1;

        // Create a new slide element
        const slideElement = document.createElement("div");
        slideElement.classList.add("slide");
        if (slideNumber === 1) slideElement.classList.add("active"); // Set the first slide as active

        slideElement.id = `slide${slideNumber}`;

        // Add slide content
        slideElement.innerHTML = `
            <div class="main-box">
                <h1>${slideData.title}</h1>
                <p>${slideData.description}</p>
                <p>${slideData.details}</p>
                <p>${slideData.details2}</p>

                <div class="button-container">
                    ${slideNumber > 1 ? `<button class="btn btn-slide" onclick="nextSlide(${slideNumber - 1})">Previous Slide</button>` : ""}
                    ${slideNumber < jsonData.length ?
                      `<button class="btn btn-slide" onclick="nextSlide(${slideNumber + 1})">Next Slide</button>` :
                      `<button class="btn btn-slide" onclick="window.location.href='mcq5.html'">Go to MCQ</button>`}
                </div>
            </div>
        `;

        slidesContainer.appendChild(slideElement);
    });
}
//createSlides(summary);
