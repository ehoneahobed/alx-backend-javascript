// create a new WeakMap instance
export const weakMap = new WeakMap();

// function to query an API endpoint
export function queryAPI(endpoint) {
  // initialize the number of API calls to 0
  let numCalls = 0;

  // if the endpoint already exists in the map, get the number of previous calls
  if (weakMap.has(endpoint)) {
    numCalls = weakMap.get(endpoint);
  }

  // increment the number of API calls for the endpoint by 1 and update the map
  weakMap.set(endpoint, numCalls + 1);

  // if the number of API calls for the endpoint exceeds 5, throw an error
  if (numCalls + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
