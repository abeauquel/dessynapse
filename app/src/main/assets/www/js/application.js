(function()
{
	var instance = this;

	var initialiser = function()
	{
		window.addEventListener("hashchange", naviguer);
		naviguer();
	}

	var naviguer = function()
	{
		var hash = window.location.hash;

		if(!hash)
		{
			var pageHelloWorld = document.getElementById("page-hello-world").innerHTML; 
            document.getElementsByTagName("body")[0].innerHTML = pageHelloWorld;
		}
	}
	
	initialiser();
})();
