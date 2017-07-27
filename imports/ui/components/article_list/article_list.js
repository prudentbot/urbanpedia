import { Articles } from '/imports/api/articles/articles.js';
import { Meteor } from 'meteor/meteor';

import './article_list.html';

Template.article_list.onCreated(function () {
  Meteor.subscribe('articles.all');
});

Template.article_list.helpers({
  articles() {
    return Articles.find({});
  },
});
