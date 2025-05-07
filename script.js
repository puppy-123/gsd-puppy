document.addEventListener("DOMContentLoaded", () => {
    const headingSection = document.getElementById("heading-section");
    const authSection = document.getElementById("auth-section");
    const dogBreedsSection = document.getElementById("dog-breeds-section");
    const breedImagesSection = document.getElementById("breed-images-section");
    const imageDetailSection = document.getElementById("image-detail-section");
  
    const authForm = document.getElementById("auth-form");
    const showLogin = document.getElementById("show-login");
    const showSignup = document.getElementById("show-signup");
    const goToAuth = document.getElementById("go-to-auth");
    const backToAuth = document.getElementById("back-to-auth");
    const backToBreeds = document.getElementById("back-to-breeds");
    const backToGallery = document.getElementById("back-to-gallery");
  
    const breedList = document.getElementById("breed-list");
    const breedTitle = document.getElementById("breed-title");
    const breedImages = document.getElementById("breed-images");
    const selectedImage = document.getElementById("selected-image");
    const imageBreedInfo = document.getElementById("image-breed-info");
  
    let currentBreed = "";
  
    const breedDescriptions = {
      labrador: "Labradors are friendly and good-natured, perfect for families.",
      germanshepherd: "German Shepherds are loyal, intelligent, and versatile working dogs.",
      goldenretriever: "Golden Retrievers are kind, confident, and eager to please.",
      bulldog: "Bulldogs are calm, courageous, and friendly.",
      poodle: "Poodles are smart, active, and trainable.",
      beagle: "Beagles are cheerful and full of energy.",
      pitbull: "Pit Bulls are strong and loyal companions.",
      boxer: "Boxers are bright, fun-loving, and very active.",
      doberman: "Doberman Pinschers are intelligent and alert guard dogs.",
      rottweiler: "Rottweilers are confident, fearless, and devoted.",
      weimaraner: "Weimaraners are friendly, fearless, alert, and obedient.",
      collie: "Collies are gentle, predictable, and easy to train.",
      malinois: "Belgian Malinois are hardworking and highly trainable.",
      standardpoodle: "Standard Poodles are elegant athletes with great intelligence."
    };
  
    const toggleSections = (...visibleSections) => {
      [headingSection, authSection, dogBreedsSection, breedImagesSection, imageDetailSection]
        .forEach(sec => sec.classList.add("hidden"));
      visibleSections.forEach(sec => sec.classList.remove("hidden"));
    };
  
    goToAuth.addEventListener("click", () => toggleSections(authSection));
    backToAuth.addEventListener("click", () => toggleSections(authSection));
    backToBreeds.addEventListener("click", () => toggleSections(dogBreedsSection));
    backToGallery.addEventListener("click", () => toggleSections(breedImagesSection));
  
    showLogin.addEventListener("click", () => {
      authForm.querySelector("button").textContent = "Login";
    });
  
    showSignup.addEventListener("click", () => {
      authForm.querySelector("button").textContent = "Sign Up";
    });
  
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      toggleSections(dogBreedsSection);
    });
  
    breedList.addEventListener("click", (e) => {
      const card = e.target.closest("[data-breed]");
      if (!card) return;
  
      currentBreed = card.dataset.breed;
      breedTitle.textContent = `${card.textContent} Gallery`;
      breedImages.innerHTML = "";
  
      // Load 6 placeholder images from the Dog CEO API
      for (let i = 1; i <= 6; i++) {
        const img = document.createElement("img");
        img.src = `https://placedog.net/500/300?id=${Math.floor(Math.random() * 1000)}`;
        img.alt = currentBreed;
        img.className = "w-full h-48 object-cover rounded cursor-pointer shadow";
        img.addEventListener("click", () => {
          selectedImage.src = img.src;
          imageBreedInfo.textContent = breedDescriptions[currentBreed] || "Information not available.";
          toggleSections(imageDetailSection);
        });
        breedImages.appendChild(img);
      }
  
      toggleSections(breedImagesSection);
    });
  });
  
