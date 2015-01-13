angular.module('starter.list').controller('ListController', function ($scope, $ionicModal) {
  var that = this;

  this.items = createList();
  this.selectItem = selectItem;
  this.hideItem = hideItem;

  $ionicModal.fromTemplateUrl('templates/item_modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    that.modal = modal;
  });

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  function selectItem(item) {
    that.currentItem = item;
    if (that.modal) {
      that.modal.show();
    }
  }

  function hideItem() {
    that.modal.hide();
  }

  function createList() {
    return [
      {
        name: 'allahu akbar!',
        description: 'some description text',
        img: 'http://www.paklatest.com/wp-content/uploads/2014/12/allahuakbar.jpeg'
      },
      {
        name: 'krowa',
        description: 'krowa to ssak',
        img: 'http://pressmix.eu/wp-content/uploads/2013/12/Krowa-na-pastwisku.jpg'
      },
      {
        name: 'pies',
        description: 'pies je śmieci',
        img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSMp3Zb-s_O38HlY4x9xPI0k0cJ8_DtEH4zJ4mKCt_4sGapVOOYrw'
      },
      {name: 'kot', description: 'kot śmierdzi', img: 'http://kooteczki.blog.pl/files/2014/07/Kot-Syberyjski2.jpg'},
      {
        name: 'allahu akbar!',
        description: 'some description text',
        img: 'http://www.paklatest.com/wp-content/uploads/2014/12/allahuakbar.jpeg'
      },
      {
        name: 'krowa',
        description: 'krowa to ssak',
        img: 'http://pressmix.eu/wp-content/uploads/2013/12/Krowa-na-pastwisku.jpg'
      },
      {
        name: 'pies',
        description: 'pies je śmieci',
        img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSMp3Zb-s_O38HlY4x9xPI0k0cJ8_DtEH4zJ4mKCt_4sGapVOOYrw'
      },
      {name: 'kot', description: 'kot śmierdzi', img: 'http://kooteczki.blog.pl/files/2014/07/Kot-Syberyjski2.jpg'}
    ];
  }
});