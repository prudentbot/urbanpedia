import { Meteor } from 'meteor/meteor';

import Quill from 'quill';

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

import './editor.html';
import './editor.css';

Template.editor.onRendered(function () {
  var quill = new Quill('#article-body-editor', {
    theme: 'snow'
  });
});
