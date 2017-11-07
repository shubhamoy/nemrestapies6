import { addNewContact, 
         getContacts, 
         getContact, 
         updateContact,
         deleteContact } from '../controllers/crmController';


const routes = (app) => {
  app.route('/contact')
     .get((req, res, next)  => {
       console.log(`Request from: ${req.originalUrl}`);
       next();
     }, getContacts)
     .post(addNewContact);
 
  app.route('/contact/:contactId')
     .get(getContact)
     .put(updateContact)
     .delete(deleteContact);
}

export default routes;
