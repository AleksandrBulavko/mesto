const profileEditButton = document.querySelector('.profile__edit-button');
const popuptypeEditProfile = document.querySelector('.popup_type_edit-profile');
const popupCloseButtonProfile = document.querySelector('.popup__close-button_place_edit-profile');
const inputName = document.querySelector('.popup__input_edit-profile_name');
const inputAbout = document.querySelector('.popup__input_edit-profile_about');
const formEditProfile = document.querySelector('.popup__form_place_edit-profile');
const formName = document.querySelector('.profile__name');
const formAbout = document.querySelector('.profile__about-me');


function openPopup(popup) {
    popup.classList.add("popup_opened")
}
function closePopup(popup) {
    popup.classList.remove("popup_opened")
}

function handleFormSubmit(evt) {
    evt.preventDefault()
    formName.textContent = inputName.value;
    formAbout.textContent = inputAbout.value;
    closePopup(popuptypeEditProfile)
}

profileEditButton.addEventListener("click", () => {
    inputName.value = formName.textContent
    inputAbout.value = formAbout.textContent
    openPopup(popuptypeEditProfile)
})
popupCloseButtonProfile.addEventListener("click", () => closePopup(popuptypeEditProfile))
formEditProfile.addEventListener("submit", function (event) {
    handleFormSubmit(event)
})

