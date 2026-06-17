import { useInView } from '../hooks/useInView';

interface CardGridProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function CardGrid({ children, style }: CardGridProps) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`card-grid${inView ? ' animate' : ''}`} style={style}>
      {children}
    </div>
  );
}
