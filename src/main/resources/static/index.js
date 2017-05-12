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
                          "qty": 0,
                          "link": data._links.self.href
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

    $scope.order_text = "";

    $scope.user = {
        "name": "",
        "email": ""
    }

    function addCustomer(){

        $http.post("/customer", {"name": $scope.user.name,"email": $scope.user.email}).then(function(response){
            customer_link  = response.data._links.self.href;
            //return customer_link;

            addOrderLines(customer_link)
        });

    }

    function addOrderLines(customer_link){

        var orderlines = [];

        $scope.cart.forEach(function(data, i){

            $http.post("/ordersline", {"qty": data.qty,"amount": data.qty*data.price, "product": data.link}).then(function(response){
                orderlines.push(response.data._links.self.href);

                if($scope.cart.length - 1 == i){
                    createOrder(customer_link, orderlines)
                }

            });

        });

        return orderlines;
    }

    function createOrder(customer_link, orderlines){

        $http.post("/orders", {"ordersLine" : orderlines, "customer" : customer_link}).then(function(response){
            $scope.order_text = "Order Placed";
        },
        function(response){
            $scope.order_text = "Something went wrong.";
        });

    }


    $scope.placeOrder = function(){
        console.log("Placing Order...");

        addCustomer();


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