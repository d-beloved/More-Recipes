import {Users} from '../models';

export default {
  create(req, res) {
    return Users
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};