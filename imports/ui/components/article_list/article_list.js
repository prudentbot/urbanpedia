import { Articles } from '/imports/api/articles/articles.js';
import { Meteor } from 'meteor/meteor';
import slug from 'slug';

import './article_list.html';

Template.article_list.onCreated(function () {
  Meteor.subscribe('articles.all');
});

Template.article_list.helpers({
  articles() {
    return Articles.find({});
  },
  slug(title){
    console.log(title);
    return slug(title);
  }
});
