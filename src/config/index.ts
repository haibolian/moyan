const { MODE } = import.meta.env;

export let baseURL = MODE === 'development' ? '/api' : ''

