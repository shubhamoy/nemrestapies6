import { addNewContact, getContacts } from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
     .get((req, res, next)  => {
       console.log(`Request from: ${req.originalUrl}`);
       next();
     }, getContacts)
     .post(addNewContact);
 
  app.route('/contact/:contactId')
     .put((req, res) =>
          res.send(`I am the PUT contact route ${req.params.contactId}`))

     .delete((req, res) =>
             res.send(`I am the DELETE contact route ${req.params.contactId}`));
}

export default routes;
