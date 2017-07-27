// Methods related to articles

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Articles } from './articles.js';

import slug from 'slug';

Meteor.methods({
  'articles.insert'(title, body) {
    check(title, String);
    check(body, String);

    const url = slug(title);
    const count = (Articles.find({url:url}).count() + 1).toString();

    return Articles.insert({
      title,
      body,
      url,
      count,
      createdAt: new Date(),
    });
  },
});
