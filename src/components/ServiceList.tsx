import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServicesRequest } from '../actions/actions';
import { Link } from 'react-router-dom';

const ServiceList = () => {
  const dispatch = useDispatch();

  // Получаем данные из состояния Redux
  const { services, loading, error } = useSelector((state: any) => state.services);

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error}
        <button onClick={() => dispatch(fetchServicesRequest())}>Повторить запрос</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Список услуг</h2>
      <ul>
        {services.map((service: any) => (
          <li key={service.id}>
            <Link to={`/services/${service.id}/details`}>
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
