import { Articles } from '/imports/api/articles/articles.js';
import { Meteor } from 'meteor/meteor';

import Quill from 'quill';

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import './new.html';

// Template.App_new.onCreated(function () {
//   Meteor.subscribe('articles.all');
// });

Template.App_new.onRendered(function () {

  var quill = new Quill('#article-body-editor', {
    theme: 'snow'
  });

})

Template.App_new.events({
  'click #article-submit'(event) {
    const title = document.getElementById("article-title").value;
    const body = document.getElementById("article-body-editor").firstChild.innerHTML;

    console.log(body);
    Meteor.call('articles.insert', title, body, (error) => {
      if (error) {
        alert(error.error);
      } else {
        // console.log("success!");
        window.location.href = "/";
      }
    });
  },
});
