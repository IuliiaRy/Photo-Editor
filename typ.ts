type editor = {
  canvas: canvasType;
  currentState: currentStateType;
}
type canvasType = {
  size: sizeType;
  text: textType;
  filter: filterType;
  primitive: primitiveType;
  photo: photoType;
  artobject: artObjectType;
}
type sizeType = {
  width: number;
  height: number;
}
type coordinatesType = {
  x: number;
  y: number;
}
type textType = {
  value: string;
  fontSize: number;
  fontColor: rgbaType;
  font: string;
  topleft: coordinatesType;
}
type filterType = {
  color: string;
}
type primitiveType = {
  shape: 'circle' | 'rectangle' | 'triangle';
  fill: rgbaType | null;
  border: borderType |null;
  size: sizeType;
  topLeft: coordinatesType;
}
type photoType = {
  size: sizeType;
  topleft: coordinatesType;
}
type artObjectType = {
  size: sizeType;
  topleft: coordinatesType;
}
type borderType = {
  color: rgbaType;
  width: number;
}
type rgbaType = {
  colorRgba: 'red' | 'blue' | 'green';
}
type comandHistoryType = {
  undo: editor[];
  redo: editor[];
}
type currentStateType = {
  currentFont: string;
  currentFontSize: number;
  currentFontColor: rgbaType;
  currentShape: 'circle' | 'rectangle' | 'triangle';
  currentFill: rgbaType | null;
  currentBorder: borderType |null;
}
type selectedAreaType = {
  size: sizeType;
  topleft: coordinatesType;
}

function createCanvas(editor: editor, topleft: coordinatesType): editor{
  return editor
}

function openFile(editor: editor): editor{
  return editor
}

function exportFile(editor: editor, canvas: canvasType): editor{
  return editor
}

function undo(editor: editor, comandHistory: comandHistoryType): editor{
  return editor
}

function redo(editor: editor, comandHistory: comandHistoryType): editor{
  return editor
}

function addImage(editor: editor, photo: photoType): editor{
  return editor
}

function selectArea(editor: editor, size: sizeType, topleft: coordinatesType ): editor{
  return editor
}

function moveArea(editor: editor, selectedArea: selectedAreaType ): editor{
  return editor
}

function cropArea(editor: editor, selectedArea: selectedAreaType ): editor{
  return editor
}

function deleteArea(editor: editor, selectedArea: selectedAreaType ): editor{
  return editor
}

function insertText(editor: editor, text: textType ): editor{
  return editor
}

function insertPrimitive(editor: editor, primitive: primitiveType): editor{
  return editor
}

function insertArtObject(editor: editor, artObject: artObjectType): editor{
  return editor
}

function addFilter(editor: editor, filter: filterType): editor{
  return editor
}

function importFile(editor: editor, way: string, photo: photoType): editor{
  return editor
}