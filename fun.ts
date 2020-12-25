import type {
  EditorType,
  CanvasType,
  SizeType,
  CoordinatesType,
  TextType,
  FilterType,
  PrimitiveType,
  ShapeType,
  ImageType,
  BorderType,
  RGBAType,
  CurrentStateType,
  SelectedAreaType,
  ComandHistoryType,
} from "./typ";

function createCanvas(editor: EditorType, topleft: CoordinatesType): EditorType{
  return editor;
}

function openFile(editor: EditorType): EditorType{
  return editor
}

function exportFile(editor: EditorType, canvas: CanvasType): EditorType{
  return editor
}

function undo(editor: EditorType, comandHistory: ComandHistoryType): EditorType{
  return editor
}

function redo(editor: EditorType, comandHistory: ComandHistoryType): EditorType{
  return editor
}

function addImage(editor: EditorType, photo: ImageType): EditorType{
  return editor
}

function selectArea(editor: EditorType, size: SizeType, topleft: CoordinatesType ): EditorType{
  return editor
}

function moveArea(editor: EditorType, selectedArea: SelectedAreaType ): EditorType{
  return editor
}

function cropArea(editor: EditorType, selectedArea: SelectedAreaType ): EditorType{
  return editor
}

function deleteArea(editor: EditorType, selectedArea: SelectedAreaType ): EditorType{
  return editor
}

function insertText(editor: EditorType, text: TextType ): EditorType{
  return editor
}

function insertPrimitive(editor: EditorType, primitive: PrimitiveType): EditorType{
  return editor
}

function insertArtObject(editor: EditorType, artObject: ImageType): EditorType{
  return editor
}

function addFilter(editor: EditorType, filter: FilterType): EditorType{
  return editor
}

function importFile(editor: EditorType, way: string, photo: ImageType): EditorType{
  return editor
}