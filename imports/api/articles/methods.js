// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Articles } from './articles.js';

Meteor.methods({
  'articles.insert'(title, url, body) {
    check(title, String);
    check(body, String);

    return Articles.insert({
      title,
      body,
      createdAt: new Date(),
    });
  },
});
