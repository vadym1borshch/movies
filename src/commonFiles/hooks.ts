import { useEffect, useState } from "react";

export const useResize = (usedHeight: number) => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;

      const freeHeight = windowHeight - usedHeight;
      setHeight(freeHeight);
    };

    // Виклик функції при завантаженні сторінки
    handleResize();

    // Додавання обробника події для зміни розміру вікна
    window.addEventListener('resize', handleResize);

    // Видалення обробника події при розмонтуванні компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [usedHeight]);

  return height
}