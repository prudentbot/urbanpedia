// Methods related to articles

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Articles } from './articles.js';

import slug from 'slug';
import sanitize from 'sanitize-html';

Meteor.methods({
  'articles.insert'(title, dirty_body, tags_string) {

    if(! Meteor.userId)
      return;

    check(title, String);
    check(tags_string, String);

    const body = sanitize(dirty_body);
    check(body, String);

    const url = slug(title);
    const count = (Articles.find({url:url}).count() + 1).toString();

    const tags = tags_string.split(',');
    return Articles.insert({
      title,
      body,
      url,
      tags,
      count,
      createdAt: new Date(),
    });
  },
});
