export const getCurrentCursorPosition = () => {
  const selection: Selection = window.getSelection() as Selection;
  const range = selection.getRangeAt(0);
  const preCursorRange = range.cloneRange();
  preCursorRange.selectNodeContents(range.startContainer);
  preCursorRange.setEnd(range.startContainer, range.startOffset);
  const cursorPosition = preCursorRange.toString().length;
  return cursorPosition;
}