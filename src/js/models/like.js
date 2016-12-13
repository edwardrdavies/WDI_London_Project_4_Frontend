angular.module('finalProject')
  .factory('Like', Like);

Like.$inject = ['$resource', 'API_URL'];
function Like($resource, API_URL) {
  return new $resource(`${API_URL}/likes/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
