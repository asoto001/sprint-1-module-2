

export const renderSmallCards = (container, contactList) => {
    container.innerHTML = "";
    contactList.forEach((contact, index) => {
        container.innerHTML += `
        <article class="aside-container__chats-card" name=${contact.id} data-index=${index} id="${contact.id}">
            <figure><img src="${contact.foto}" alt="${contact.nombre}"></figure>
            <div class="aside-container__chat-info">
                <div class="aside-container__chat-info1">
                    <h3>${contact.nombre}</h3>
                    <p>gg2</p>
                    <div class="aside-container__chat-preview">
                        <figure><img src="./01 ICONS/check.svg" alt=""></figure>
                        <p >gg</p>
                    </div>
                </div>
            
            </div>
    </article>`;
    })
}

export const renderProfileBtn = (users, loggedUser, container) => {
    if (users.id === loggedUser) {
        console.log(users)
        container.innerHTML = '';
        container.innerHTML = `
            <figure><img src="${users.foto}" alt=""></figure>
        `
    }        
  
} 
export const renderProfileCard = (users, loggedUser, container) => {
    if (users.id === loggedUser) {
        container.innerHTML = ''
        container.innerHTML = `
            <figure><img src="${users.foto}" alt="img"></figure>
            <p>Tu nombre</p>
            <h3>${users.nombre}</h3>
            <p>Info.</p>
            <h3>${users.info}</h3>
        `
    }
}

export const renderCharacterBtn = (character, idReceptor, container) => {
    if (character.id === idReceptor) {
        container.innerHTML = ''
        container.innerHTML = `
        <figure class="main-container__reciever-photo"><img src="${character.foto}" alt=""></figure>
        <div>
            <h2>${character.nombre}</h2>
            <p>${character.conectado}</p>
        </div>
    `
    }
}

export const rendercharacterProfileCard = (character, idReceptor, container) => {
    if (character.id === idReceptor) {
        container.innerHTML = ''
        container.innerHTML = `
            <figure><img src="${character.foto}" alt="img"></figure>
            <h2>${character.nombre}</h2>
            <p>Info.</p>
            <h3>${character.info}</h3>
    `
    }
}

export const renderConversations = ( messages, container, idUserLogged) => {
    container.innerHTML = '';
    const arr = Array.from(messages.messages);
    arr.forEach(element => {
        container.innerHTML += `
            <section class=${element.sendBy === idUserLogged? 'main-container__mns-user': 'main-container__mns-receiver'}>${
                element.message
        }</section>
        `;
    })
};