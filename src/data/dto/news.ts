export interface News {
  id_news?: number;
  title: string;
  text: string;
  image_path: string;
  is_enabled: boolean;
  created_at_utc: number;
}