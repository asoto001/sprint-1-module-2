const URL_API = "http://localhost:3000/"

export const getUsers = async (idUser) => {
    try {
        const url = `${URL_API}cuentas/${idUser}`;
        const { data } = await axios.get(url)
        return data;
    } catch (error){
        console.log(error)
    }
    
  //renderSmallCards(response.data)
}

export const getConversations = async (idLoggedUser) => {
    try {
      const urlConversationsSender = `${URL_API}conversations?userSender=${idLoggedUser}`;
      const urlConversationsReceptor = `${URL_API}conversations?userReceptor=${idLoggedUser}`;
      const responseSender = await axios.get(urlConversationsSender);
      const responseReceptor = await axios.get(urlConversationsReceptor);
      return [...responseSender.data, ...responseReceptor.data];
    } catch (error) {
      console.log(error);
      return error;
    }
};


export const sendText = async (idConversation, arrayMessages) => {
    try {
        const urlConversation = `${URL_API}conversations/${idConversation}`;
        const response = await axios.patch(urlConversation, {
          messages: arrayMessages
        });
        console.log(response);
        return response
    } catch (error) {
        console.log(error);
        return error
    }
}

export const getContacts = async (idLoggedUser, conversations) => {
    
        const contacts = [];
         for (const element of conversations) {
         const idContact =
           element.userSender == idLoggedUser
             ? element.userReceptor
             : element.userSender;
        
              const contact = await getUsers(idContact);
             contacts.push(contact);
             
                 
         }
         return contacts
    
    };
    