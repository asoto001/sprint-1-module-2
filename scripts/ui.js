

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

export const renderProfileCard = (cuentas) => {
    profileCard.innerHTML = ''
    profileCard.innerHTML = `
    <figure><img src="${cuentas.foto}" alt="img"></figure>
    <p>Tu nombre</p>
    <h3>${cuentas.nombre}</h3>
    <p>Info.</p>
    <h3>${cuentas.info}</h3>
    `
}

export const rendercharacterProfileCard = (cuentas) => {
    characterProfileCard.innerHTML = ''
    characterProfileCard.innerHTML = `
        <figure><img src="${cuentas.foto}" alt="img"></figure>
        <h2>${cuentas.nombre}</h2>
        <p>Info.</p>
        <h3>${cuentas.info}</h3>
    `
}

export const renderConversations = ( messages, container, idUserLogged) => {
    container.innerHTML = '';
    const arr = Array.from(messages.messages);
    //arr.forEach(element => console.log(element))
    arr.forEach(element => {
        container.innerHTML += `
            <section class=${element.sendBy === idUserLogged? 'main-container__mns-user': 'main-container__mns-receiver'}>${
                element.message
        }</section>
        `;
    })
};