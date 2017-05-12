angular.module('MyApp', ['ngMaterial'])
.controller('AppCtrl', function($scope, $http) {

    $scope.products = [
        ];

    $http.get("/product")
      .then(function(response) {

            console.log(response);

          response.data._embedded.product.forEach(function(data){
                      $scope.products.push({
                          "name": data.name,
                          "price": data.price,
                          "qty": 0
                      });
                  });
      });

    $scope.cart = [
        ];

    $scope.total = 0;

    $scope.addToCart = function(product){

        console.log("Adding to Cart...");



        $scope.cart.push(product);

        $scope.total += product.qty*product.price;
    }

//    $scope.showConfirm = function(ev) {
//        // Appending dialog to document.body to cover sidenav in docs app
//        var confirm = $mdDialog.confirm()
//              .title('Are you sure?')
//              .textContent($scope.products)
//              .targetEvent(ev)
//              .ok('Please do it!')
//              .cancel('Dont do it);
//
//        $mdDialog.show(confirm).then(function() {
//          $scope.status = 'You decided to get rid of your debt.';
//        }, function() {
//          $scope.status = 'You decided to keep your debt.';
//        });
//      };

});