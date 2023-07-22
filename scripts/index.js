const profileEditButton = document.querySelector('.profile__edit-button');
const popuptypeEditProfile = document.querySelector('.popup_type_edit-profile');
const popupCloseButtonProfile = document.querySelector('.popup__close-button_place_edit-profile');
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const formEditProfile = document.querySelector('.popup__form_place_edit-profile');
const formName = document.querySelector('.profile__name');
const formAbout = document.querySelector('.profile__about-me');
const addButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupCloseButtonAddCard = document.querySelector('.popup__close-button_place_add-card');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');
const formAddCard = document.querySelector('.popup__form_place_add-card');
const title = document.querySelector('.element__title');
const link = document.querySelector('.element__photo');
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_image');
const popupCloseButtonImage = document.querySelector('.popup__close-button_place_image');
const image = document.querySelector('.popup__image');
const text = document.querySelector('.popup__text');


function openPopup(popup) {
    popup.classList.add('popup_opened')
}
function closePopup(popup) {
    popup.classList.remove('popup_opened')
}

function handleFormSubmit(evt) {
    evt.preventDefault()
    formName.textContent = inputName.value;
    formAbout.textContent = inputAbout.value;
    closePopup(popuptypeEditProfile)
}

profileEditButton.addEventListener('click', () => {
    inputName.value = formName.textContent
    inputAbout.value = formAbout.textContent
    openPopup(popuptypeEditProfile)
})

popupCloseButtonProfile.addEventListener('click', () => closePopup(popuptypeEditProfile))
formEditProfile.addEventListener('submit', function (event) {
    handleFormSubmit(event)
})

addButton.addEventListener('click', () => {
    openPopup(popupAddCard)
})

popupCloseButtonAddCard.addEventListener('click', () => closePopup(popupAddCard))

function createCard(title, link) {
    const templateCard = document.querySelector('#templateCard').content
    const cloneCard = templateCard.querySelector('.element').cloneNode(true)
    cloneCard.querySelector('.element__title').textContent = title
    cloneCard.querySelector('.element__photo').setAttribute('src', link)
    cloneCard.querySelector('.element__like-button').addEventListener('click', function (event) {
        event.target.classList.toggle('element__like-button_active')
    })
    cloneCard.querySelector('.element__basket').addEventListener('click', function (event) {
        event.target.parentNode.remove()
    })
    cloneCard.querySelector('.element__photo').addEventListener('click', function () {
        openPopup(popupImage)
        image.setAttribute('src', link)
        text.textContent = title
    })
    elements.prepend(cloneCard)
}

popupCloseButtonImage.addEventListener('click', () => closePopup(popupImage))

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

initialCards.forEach(function (element) {
    createCard(element.name, element.link)
})

function addCard(event) {
    event.preventDefault()
    createCard(inputTitle.value, inputLink.value)
    closePopup(popupAddCard)
}

formAddCard.addEventListener('submit', addCard)











