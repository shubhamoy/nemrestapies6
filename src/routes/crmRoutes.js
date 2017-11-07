import { addNewContact, getContacts, getContact, updateContact } from '../controllers/crmController';


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
     .delete((req, res) =>
             res.send(`I am the DELETE contact route ${req.params.contactId}`));
}

export default routes;
