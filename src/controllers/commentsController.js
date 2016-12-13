angular.module('finalProject')
  .controller('CommentsIndexController', CommentsIndexController)
  .controller('CommentsNewController', CommentsNewController)
  .controller('CommentsShowController', CommentsShowController)
  .controller('CommentsEditController', CommentsEditController);

CommentsIndexController.$inject = ['Comment', 'Comment', '$state'];
function CommentsIndexController(Comment, $state) {
  const commentsIndex = this;

  commentsIndex.all = Comment.query();

  commentsIndex.newcomment = {};

  function comment() {
    console.log('hi ED', commentsIndex.newcomment);

    Comment.save(commentsIndex.newcomment, () => {
      $state.go('commentsIndex');
    });
  }
  commentsIndex.comment = comment;
}

CommentsNewController.$inject = ['Comment', '$state', '$auth'];
function CommentsNewController(Comment, $state, $auth) {
  const commentsNew = this;
  commentsNew.comment = {};

  commentsNew.comment.post_id = parseInt($state.params.id);
  commentsNew.comment.user_id = parseInt($auth.getPayload().id);
  function create() {
    console.log('comment: ', commentsNew.comment);
    Comment.save(commentsNew.comment, () => {
      $state.reload();
    });
  }
  commentsNew.create = create;
}

CommentsShowController.$inject = ['Comment', '$state', '$auth'];
function CommentsShowController(Comment, $state, $auth) {
  const commentsShow = this;

  commentsShow.post = Comment.get($state.params);

  function deleteComment() {
    commentsShow.post.$remove(() => {
      $state.go('commentsIndex');
    });
  }

  commentsShow.delete = deleteComment;
  commentsShow.isLoggedIn = $auth.isAuthenticated;
}

CommentsEditController.$inject = ['Comment', '$state'];
function CommentsEditController(Comment, $state) {
  const commentsEdit = this;

  commentsEdit.post = Comment.get($state.params);

  function update() {
    commentsEdit.post.$update(() => {
      $state.go('commentsShow', $state.params);
    });
  }

  this.update = update;

}
