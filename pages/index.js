// find the edit profile elements in the DOM

let editProfileModal = document.querySelector(".modal");
let editProfileForm = editProfileModal.querySelector(".modal__form");
let editButton = document.querySelector(".profile__edit-button");
let submitButton = document.querySelector(".modal__save");
let inputName = document.querySelector(".modal__input_content_name");
let inputDescription = document.querySelector(
  ".modal__input_content_description"
);
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");

function openPopup(modal) {
  modal.classList.add("modal_is-open");
  document.addEventListener("keyup", handleEscClose);
}

function closePopup(modal) {
  modal.classList.remove("modal_is-open");
  document.removeEventListener("keyup", handleEscClose);
}

function openEditProfilePopup() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  openPopup(editProfileModal);
}

let submitEditProfilePopup = (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  closePopup(editProfileModal);
};

function handleEscClose(e) {
  if (e.key === "Escape") {
    closePopup(editProfileModal);
  }
}

function closePopupByClick(e) {
  if (
    e.target.classList.contains("modal__close-btn") ||
    e.target.classList.contains("modal_is-open")
  ) {
    closePopup(editProfileModal);
  }
}

function setEventListeners() {
  editProfileModal.addEventListener("click", closePopupByClick);
}

//edit info form handler
setEventListeners();

//open edit info form
editButton.addEventListener("click", openEditProfilePopup);

//submit edit info form
editProfileForm.addEventListener("submit", submitEditProfilePopup);
