import { useNavigate } from 'react-router-dom';
import StatusBlock from '../components/StatusBlock.jsx';

export default function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <section className="page-shell">
      <StatusBlock
        emoji="🍂"
        title="Такой страницы нет"
        subtitle={`Путь не совпал ни с одним маршрутом.`}
        actionLabel="Вернуться на назад"
        onAction={()=>navigate(-1)}
      />
    </section>
  );
}
