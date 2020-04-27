'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getSearchTextAt = require('./getSearchTextAt');

var _getSearchTextAt2 = _interopRequireDefault(_getSearchTextAt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (editorState, selection, trigger) {
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset();
  var currentContent = editorState.getCurrentContent();
  var currentBlock = currentContent.getBlockForKey(anchorKey);
  var blockText = currentBlock.getText();
  return (0, _getSearchTextAt2.default)(blockText, anchorOffset, trigger);
};