import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default cookies;

// usage
// cookies.remove('access_token_qa', { path: '/' });
// cookies.set('access_token_qa', res.data.result.token, { path: '/', expires: date });
// cookies.get('access_token_qa');
