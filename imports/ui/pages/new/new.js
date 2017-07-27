import { Articles } from '/imports/api/articles/articles.js';
import { Meteor } from 'meteor/meteor';

import './new.html';

// Template.App_new.onCreated(function () {
//   Meteor.subscribe('articles.all');
// });

Template.App_new.events({
  'submit .article-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const body = target.body;

    Meteor.call('articles.insert', title.value, body.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        console.log("success!");
        // window.location.href = "/";
      }
    });
  },
});
