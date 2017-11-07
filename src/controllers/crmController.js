import mongoose from 'mongoose';

import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  
  newContact.save((err, contact) => {
    if(err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContacts = (req, res) => {
  Contact.find({"deleted_at":null}, (err, contact) => {
    if(err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContact = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if(err) {
      res.send(err);
    }
    
    if(contact.deleted_at) {
      res.send("Record Not Found");
    } else {
      res.json(contact);
    }
 });
};

export const updateContact = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if(err) {
      res.send(err);
    }

    if(!contact.deleted_at) {
      req.body.updated_at = Date.now();
      Contact.findOneAndUpdate({ _id: req.params.contactId }, 
                                 req.body, { new: true }, 
                                 (err, contact) => {
      if(err) {
        res.send(err);
      }
      res.json(contact);
      })
   } else {
     res.send("Record Not Found");
   }
 })
};

export const deleteContact = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if(err) {
      res.send(err);
    }

    if(!contact.deleted_at) {
      req.body.deleted_at = Date.now();
      Contact.findOneAndUpdate({ _id: req.params.contactId },
                               req.body, { new: true },
                               (err, contact) => {
        if(err) {
          res.send(err);
        }
        res.send("Contact Deleted Successfully");
      })
    }
  })
};

