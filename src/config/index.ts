const { MODE } = import.meta.env;

export let baseURL = MODE === 'development' ? '/api' : 'http:127.0.0.1:3000'

