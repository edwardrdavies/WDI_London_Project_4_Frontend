angular.module('finalProject')
  .controller('PostsIndexController', PostsIndexController)
  .controller('PostsNewController', PostsNewController)
  .controller('PostsShowController', PostsShowController)
  .controller('PostsEditController', PostsEditController);

PostsIndexController.$inject = ['Post', 'Like', '$state'];
function PostsIndexController(Post, Like, $state) {
  const postsIndex = this;

  postsIndex.all = Post.query();
  console.log(postsIndex.all);
  postsIndex.all.reverse();
  console.log(postsIndex.all);

  postsIndex.newlike = {};

  function like(post) {
    postsIndex.newlike = {
      post_id: post.id
    };
    console.log('hi ED', postsIndex.newlike);
    Like.save(postsIndex.newlike, () => {
      $state.go('postsIndex');
      post.likes_length++;
    });
  }
  postsIndex.like = like;
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

PostsShowController.$inject = ['Post', '$state', '$auth'];
function PostsShowController(Post, $state, $auth) {
  const postsShow = this;

  postsShow.post = Post.get($state.params);
  console.log(postsShow.post);
  function deletePost() {
    postsShow.post.$remove(() => {
      $state.go('postsIndex');
    });
  }

  postsShow.delete = deletePost;
  postsShow.isLoggedIn = $auth.isAuthenticated;
}

PostsEditController.$inject = ['Post', '$state'];
function PostsEditController(Post, $state) {
  const postsEdit = this;

  postsEdit.post = Post.get($state.params);

  function update() {
    postsEdit.post.$update(() => {
      $state.go('postsShow', $state.params);
    });
  }

  this.update = update;

}
