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
			soldOut : false,
			images : [
				{
					full: "assets/img/gem-01.gif",
					thumb: "assets/img/gem-02.gif"
				}
			]
		},
		{
			name : "Pentagonal Gems",
			price : 5.95,
			description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
						Perferendis omnis accusantium dicta provident, \
						nihil dolorem eligendi ipsum iure expedita reiciendis totam \
						harum placeat veritatis a voluptatibus esse atque velit, eaque.",
			canPurchase : true,
			soldOut : false,
			images : [
				{
					full: "assets/img/gem-03.gif",
					thumb: "assets/img/gem-04.gif"
				}
			]
		}
	];

	app.controller('PanelController', function(){
		this.tab=1;
		this.selectTab = function(setTab){
			console.log("selectTab");
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			console.log("isSelected");
			return this.tab === checkTab;
		};
	});
})();
