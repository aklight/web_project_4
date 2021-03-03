// find the edit profile elements in the DOM

const editProfileModal = document.querySelector('.modal_type_edit-profile');
const editProfileForm = editProfileModal.querySelector('.modal__form');
const editButton = document.querySelector('.profile__edit-button'); 
const submitButton = document.querySelector('.modal__save'); 
const inputName = document.querySelector('.modal__input_name'); 
const inputDescription = document.querySelector('.modal__input_description'); 
const profileName = document.querySelector('.profile__name'); 
const profileDescription = document.querySelector('.profile__description'); 

function openPopup(modal) {
    modal.classList.add('modal_is-open');
    document.addEventListener('keyup', handleEscClose);
};

function closePopup(modal) {
    modal.classList.remove('modal_is-open');
    document.removeEventListener('keyup', handleEscClose);
};

function handleEscClose(e) {
    if (e.key === "Escape") {
        closePopup(editProfileModal)
    }
}

function handleEnterClose(e) {
    if (e.key === "Enter") {
        closePopup(editProfileModal)
    }
}

function setEventListeners() {
    editProfileModal.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal__close-btn') || e.target.classList.contains('modal_is-open')) {
            closePopup(editProfileModal);
        }
    })
};

//edit info form handler
setEventListeners();

const userInfo = {title: profileName.textContent, description: profileDescription.textContent};

//open edit info form
editButton.addEventListener('click', () => {
    inputName.value = userInfo.title;
    inputDescription.value = userInfo.description;
    openPopup(editProfileModal);
    document.addEventListener('keyup', handleEnterClose);
});

//submit edit info form
submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    userInfo.title = inputName.value;
    userInfo.description = inputDescription.value;
    profileName.textContent = userInfo.title;
    profileDescription.textContent = userInfo.description;
    closePopup(editProfileModal);
});
