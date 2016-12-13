angular.module('finalProject')
  .controller('LikesController', LikesController);

LikesController.$inject = ['Post'];
function LikesController(Post) {
  const newLike = this;

  newLike.like = {};

  function create() {
    Like.save(newLike.like, () => {
      $state.go('postsIndex');
    });
  }

  newLike.create = create;
}
