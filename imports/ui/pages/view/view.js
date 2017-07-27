import { Articles } from '/imports/api/articles/articles.js';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';


import './view.html';

Template.App_view.onCreated(function () {
  Meteor.subscribe('articles.all');
});


Template.App_view.helpers({
  article() {
    const url = FlowRouter.getParam('url');
    const count = FlowRouter.getParam('count');
    return Articles.findOne({url:url, count:count});
  },
});
