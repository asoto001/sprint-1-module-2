import { getConversations, sendText, getContacts } from "./scripts/services.js"

import { renderSmallCards, renderProfileCard, rendercharacterProfileCard, renderConversations} from "./scripts/ui.js"

const modalSignIn = document.querySelector('.login-register')
const loginRegisBtnsSection = document.querySelector('.login-register__btns');
const regiterSection = document.querySelector('.login-register__register-container');
const loginSection = document.querySelector('.login-register__login-container');
const loginBtn = document.querySelector('.login-register__login');
const formLoginBtn = document.querySelector('.form-login__login-btn');
const sigUpBtn = document.querySelector('.login-register__register-btn');
const formReg = document.querySelector('.login-register__register-form');
const formRegBtn = document.querySelector('.form-register__form-btn');

const registerNameInpput = document.querySelector('#registerName');
const registerNameErrorDiv = document.querySelector('.form-register__name--error');

const registerProfilePhoto = document.querySelector('#profilePhoto');
const registerProfilePhotoError = document.querySelector('.form-register__profilePhoto--error');

const registerPhoneInput = document.querySelector('#registerPhoneNumber');
const registerPhoneErrorDiv = document.querySelector('.form-register__registerPhoneNumber--error');

const registerPaswordInput = document.querySelector('#registerPasword');
const registerPaswordErrorDiv = document.querySelector('.form-register__registerPasword--error');

const registerConfirmPaswordInput = document.querySelector('#registerConfirmPasword');
const registerConfirmPaswordErrorDiv = document.querySelector('.form-register__registerConfirmPasword--error');

const registerInfoSentence = document.querySelector('#registerInfoSentence');
const registerInfoSentenceError = document.querySelector('.form-register__registerInfoSentence--error');

const loginPhoneNumber = document.querySelector('#cardNumberLogin');
const loginPhoneNumberErrorDiv = document.querySelector('.form-login__cardnumber--error');

const loginPasword = document.querySelector('#loginPasword');
const loginPaswordErrorDiv = document.querySelector('.form-register__loginPasword--error')

const conversationsContainer = document.querySelector('.main-container__mensage-container');
 
const showProfile = document.querySelector('.aside-container__user');
const profileSection = document.querySelector('.aside-container__user-info-container');
const btnBackProfile = document.querySelector('.aside-container__btn-back');
const smallCardsContainer = document.querySelector('.aside-container__chats-container')

const showCharacter = document.querySelector('.main-container__mns-receiver-info');
const  charaterInfoContiner = document.querySelector('.main-container__character-container');
const btnBackCharater = document.querySelector('.main-container__btn-close');

const profileCard = document.querySelector('.aside-container__info-container');
const characterProfileCard = document.querySelector('.main-container__character-info-container');
const form = document.querySelector('.main-container__new-mensage')

const loggedUser = 3;
let conversations = [];
 

document.addEventListener('DOMContentLoaded', async () => {
    conversations = await getConversations(loggedUser);
    console.log(conversations);
    const contacts = await getContacts(loggedUser, conversations);
    renderSmallCards(smallCardsContainer, contacts);


    
});



smallCardsContainer.addEventListener('click', ({target}) => {
    //console.log(e)
    if(target.id){
        const index = parseInt(target.dataset.index)
        const conversation = conversations[index];
        renderConversations(conversation, conversationsContainer, loggedUser);
        sessionStorage.setItem('indexConversation', JSON.stringify(index));
        console.log(conversation)
    }
})


sigUpBtn.addEventListener('click', () => {
    regiterSection.classList.remove('hidden')
    loginRegisBtnsSection.classList.add('hidden')
})
loginBtn.addEventListener('click', () => {
    loginRegisBtnsSection.classList.add('hidden')
    loginSection.classList.remove('hidden')
    //enderSmallCards(URL_API)
    
})
formRegBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalSignIn.classList.add('hidden')
})
formLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalSignIn.classList.add('hidden')
    
    
})


showProfile.addEventListener('click', () => {
    profileSection.classList.remove('hidden')
})
btnBackProfile.addEventListener('click', () => {
    profileSection.classList.add('hidden')
})

showCharacter.addEventListener('click', () => {
    charaterInfoContiner.classList.remove('hidden')
})
btnBackCharater.addEventListener('click', () => {
    charaterInfoContiner.classList.add('hidden')
})


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const textBox = document.querySelector('.main-container__new-mensage-imput');
    const indexConversation = JSON.parse(sessionStorage.getItem("indexConversation"));
    const { id, messages } = conversations[indexConversation];
    console.log(textBox.value);
    if (textBox.value) {
        const msg = {
            id: messages.length + 1,
            sendBy: loggedUser,
            message: textBox.value,
            isSeem:false
        };
        messages.push(msg);
        await sendText(id, messages);
        renderConversations(conversations[indexConversation], conversationsContainer, loggedUser);
        textBox.value = "";
        console.log(messages)
        //e.preventDefault();
    }
    
})

// funciones 



