angular.module('finalProject')
  .controller('PostsIndexController', PostsIndexController)
  .controller('PostsNewController', PostsNewController);

PostsIndexController.$inject = ['Post'];
function PostsIndexController(Post) {
  const postsIndex = this;

  postsIndex.all = Post.query();
}

PostsNewController.$inject = ['Post', '$state'];
function PostsNewController(Post, $state) {
  const postsNew = this;

  postsNew.post = {};

  function create() {
    Post.save(postsNew.post, () => {
      $state.go('postsIndex');
    });
  }

  postsNew.create = create;
}
