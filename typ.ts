type EditorType = {
  canvas: CanvasType;
  currentState: CurrentStateType;
}

type CanvasType = {
  size: SizeType;
  photo: ImageData;
}

type SizeType = {
  width: number;
  height: number;
}

type CoordinatesType = {
  x: number;
  y: number;
}

type TextType = {
  value: string;
  size: SizeType;
  fontSize: number;
  fontColor: RGBAType;
  font: string;
  topleft: CoordinatesType;
}

type FilterType = "grey" | "red" | "blue" | "green";

type PrimitiveType = {
  shape: ShapeType;
  fill: RGBAType | null;
  border: BorderType | null;
  size: SizeType;
  topLeft: CoordinatesType;
}

type ShapeType = 'circle' | 'rectangle' | 'triangle';

type ImageType = {
  size: SizeType;
  topleft: CoordinatesType;
  image: ImageData;
  src: string;
}

type BorderType = {
  color: RGBAType;
  width: number;
}

type RGBAType = {
  red: number;
  green: number;
  blue: number;
  a: number;
}

type CurrentStateType = TextType | PrimitiveType | SelectedAreaType | ImageType | null;

type SelectedAreaType = {
  topleft: CoordinatesType;
  size: SizeType;
  selection: ImageData;
}

export type {
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
}
