
angular.module("myApp").service("dataService", function(){

	var empArray = [{aname:"Cameron Kozinski",
		bstreet:"320 High Street", city:"Chattanooga", state:"TN",
		zip:"32118",}
		,
		{aname:"Bob Loblaw", 
		bstreet:"123 Apple Street", city:"Smalltown", state:"MI",
		zip:"32118",}];


	this.getNames = function(){
		var str = localStorage.getItem("JnItems");
		empArray = JSON.parse(str) || empArray;
		return empArray;
	};

	this.addItem = function(emName, emStreet, emCity, emState, emZip){

		var adding = {aname:emName, 
		bstreet:emStreet, city:emCity, state:emState,
		zip:emZip,};
		
		empArray.push(adding);
		var str = JSON.stringify(empArray);
		localStorage.setItem("JnItems", str);
	};	


		

	this.removeName = function(pName){
		empArray.splice(empArray.indexOf(pName),1);
		var str = JSON.stringify(empArray);
		localStorage.setItem("JnItems", str);

	};


});