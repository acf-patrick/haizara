export default interface ICourseCardProps {
  image?: string;
  year: number;
  stars: number;
  title: string;
  lessons: number;
  duration: string;
  level: string;
  authorPhoto?: string;
  author: string;
  oldPrice: number;
  price: number;
  bestSeller?: boolean;
  status?: "new" | "popular"; // new / popular
}
