export interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  onSelect: (id: string) => void;
}
