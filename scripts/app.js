(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;		
	});
	var gems = [
		{
			name : "Dodecahedron",
			price : 2.25,
			description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
						Perferendis omnis accusantium dicta provident, \
						nihil dolorem eligendi ipsum iure expedita reiciendis totam \
						harum placeat veritatis a voluptatibus esse atque velit, eaque.",
			canPurchase : true,
			soldOut : false
		},
		{
			name : "Pentagonal Gems",
			price : 5.95,
			description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
						Perferendis omnis accusantium dicta provident, \
						nihil dolorem eligendi ipsum iure expedita reiciendis totam \
						harum placeat veritatis a voluptatibus esse atque velit, eaque.",
			canPurchase : true,
			soldOut : false
		}
	];
})();
