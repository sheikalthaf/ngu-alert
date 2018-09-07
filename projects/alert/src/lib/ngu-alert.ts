export interface NguAlertData {
  data: any;
}

export interface NguAlert {
  heading: string;
  msg: string;
  type?: NguAlertType;
  duration?: number;
  position?: Positions;
}

export type Positions =
  | 'BottomRight'
  | 'BottomLeft'
  | 'TopLeft'
  | 'TopRight'
  | 'BottomCenter'
  | 'TopCenter';

export type NguAlertType = 'success' | 'danger' | 'info';

export interface NguAlertConfig {
  defaultPosition?: Positions;
  duration?: number;
}