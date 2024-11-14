export const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';
export const FETCH_SERVICE_DETAILS_REQUEST = 'FETCH_SERVICE_DETAILS_REQUEST';
export const FETCH_SERVICE_DETAILS_SUCCESS = 'FETCH_SERVICE_DETAILS_SUCCESS';
export const FETCH_SERVICE_DETAILS_FAILURE = 'FETCH_SERVICE_DETAILS_FAILURE';

// Экшен для запроса списка услуг
export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

// Экшен для успешного получения списка услуг
export const fetchServicesSuccess = (services: any) => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: services,
});

// Экшен для ошибки при получении списка услуг
export const fetchServicesFailure = (error: string) => ({
  type: FETCH_SERVICES_FAILURE,
  payload: error,
});

// Экшен для запроса деталей услуги по ID
export const fetchServiceDetailsRequest = (id: number) => ({
  type: FETCH_SERVICE_DETAILS_REQUEST,
  payload: id,
});

// Экшен для успешного получения деталей услуги
export const fetchServiceDetailsSuccess = (serviceDetails: any) => ({
  type: FETCH_SERVICE_DETAILS_SUCCESS,
  payload: serviceDetails,
});

// Экшен для ошибки при получении деталей услуги
export const fetchServiceDetailsFailure = (error: string) => ({
  type: FETCH_SERVICE_DETAILS_FAILURE,
  payload: error,
});