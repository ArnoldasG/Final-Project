import { creatingRegForm } from "./regFormModule.js";

function firstPageRender() {
  const headerContainer = document.querySelector(".headerContainer");
  headerContainer.style.display = "none";
  const carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.innerHTML = `
    <div class=advertismentName>
        <h5>Nr. 1 reklamavimo tinklapis pasaulyje!</h5>
    </div>
    <div 
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1">
            </button>
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2">
            </button>
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3">
            </button>
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4">
            </button>
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5">
            </button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img
                src="./images/img1.jpg"
                class="d-block w-100 carousel-img"
                alt="img1"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Nr. 1 reklamavimo tinklapis pasaulyje!</h5>
                    <p>Pirmaujantis tinklapis, norint reklamuoti savo perkamus ar parduodamus daiktus. Dabar visk?? parduoti tapo daug papras??iau.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img
                src="./images/img2.jpg"
                class="d-block w-100 carousel-img"
                alt="img2"
                />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Naujasis modernus ir paprastas dizainas</h5>
                    <p>Lengvai gal??site surasti tai ko ie??kote.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img
                src="images/img3.jpg"
                class="d-block w-100 carousel-img"
                alt="img3"
                />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Daugiau kaip 100.000.000 vartotoj?? duomen?? baz??je.</h5>
                    <p>Populiariausias reklamos tinklapis visame Pasaulyje!</p>
                </div>
            </div>
            <div class="carousel-item">
                <img
                src="images/img4.jpg"
                class="d-block w-100 carousel-img"
                alt="img4"
                />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Daug pasirinkim?? ir apib??dinim?? J??s?? reklamai</h5>
                    <p>Paprastai gal??site i??trinti, atnaujinti komentuoti savo bei kit?? skelbimus.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img
                src="images/img5.jpg"
                class="d-block w-100 carousel-img"
                alt="img5"
                />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Itin greitas puslapis</h5>
                    <p>Tinklapio k??rimui buvo pasirinktos itin modernios technologijos, tod??l tinklapis veikia ??viesos grei??iu.</p>
                </div>
            </div>
        </div>
        <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        
    </div>
    <div class="d-flex justify-content-center">
        <button class="btn btn-primary firstEntryBtn">Prisijungti/Registruotis</button>
    </div>`;

  const firstEntryBtn = document.querySelector(".firstEntryBtn");
  firstEntryBtn.addEventListener("click", () => {
    carouselContainer.style.display = "none";
    headerContainer.style.display = "block";
    creatingRegForm();
  });
}

export { firstPageRender };
