import { Articles } from '/imports/api/articles/articles.js';
import { Meteor } from 'meteor/meteor';

import selectize from 'selectize';

import 'selectize/dist/css/selectize.default.css'

import '../../components/editor/editor.js';

import './new.html';

// Template.App_new.onCreated(function () {
//   Meteor.subscribe('articles.all');
// });

Template.App_new.onRendered(function () {

  $("#article-input-tags").selectize({
      delimiter: ',',
      persist: false,
      create: function(input) {
          return {
              value: input,
              text: input
          }
      }
  });

})

Template.App_new.events({
  'click #article-submit'(event) {
    const title = document.getElementById("article-title").value;
    const body = document.getElementById("article-body-editor").firstChild.innerHTML;
    const tags = document.getElementById("article-input-tags").value;

    Meteor.call('articles.insert', title, body, tags, (error) => {
      if (error) {
        alert(error.error);
      } else {
        // console.log("success!");
        FlowRouter.go('/');
      }
    });
  },
});
