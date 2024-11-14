import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchServiceDetailsRequest } from '../actions/actions';

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  // Получаем детали услуги из состояния Redux
  const { serviceDetails, loading, error } = useSelector((state: any) => state.services);

  useEffect(() => {
    dispatch(fetchServiceDetailsRequest(Number(id)));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error}
        <button onClick={() => dispatch(fetchServiceDetailsRequest(Number(id)))}>Повторить запрос</button>
      </div>
    );
  }

  if (!serviceDetails) {
    return <div>No details found</div>;
  }

  return (
    <div>
      <h2>{serviceDetails.name}</h2>
      <p>Price: {serviceDetails.price}</p>
      <p>{serviceDetails.content}</p>
      <Link to="/">Back to services list</Link>
    </div>
  );
};

export default ServiceDetails;
