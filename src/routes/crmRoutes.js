const routes = (app) => {
  app.route('/contact')
     .get((req, res) => 
          res.send('I am the GET contact route'))

     .post((req, res) =>
           res.send('I am the POST contact route'));
 
  app.route('/contact/:contactId')
     .put((req, res) =>
          res.send(`I am the PUT contact route ${req.params.contactId}`))

     .delete((req, res) =>
             res.send(`I am the DELETE contact route ${req.params.contactId}`));
}

export default routes;
