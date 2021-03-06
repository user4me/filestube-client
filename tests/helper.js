'use strict';

var FilestubeAPI = require('../index');
var initMock = require('./mocks/init-mock.js');

module.exports = function(options) {
  initMock(
    options.list,
    options.final,
    options.repetitions,
    options.pages
  );

  FilestubeAPI[options.testedMethod](
    'stawka wieksza niz zycie',
    options.options || {},
    function(data) {
      options.assert(data);
      if (typeof options.cb === 'function') {
        options.cb();
      }
    }
  );
};
