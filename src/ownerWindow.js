import ownerDocument from './ownerDocument';

function ownerWindow(node) {
  let doc = ownerDocument(node);
  return doc && doc.defaultView || doc.parentWindow;
}