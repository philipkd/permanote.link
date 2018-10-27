$(document).ready(function() {
	var converter = new Showdown.converter();
	$('#contents').html((converter.makeHtml($('#contents').text())));

	$('#contents h1, #contents h2, #contents h3').each(function(index) {
		var indent = "";
		if ($(this).is('h2'))
			indent = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		else if ($(this).is('h3'))
			indent = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

		$('#toc').append(indent + "<a href=#" + index + ">" + $(this).text() + "</a><br>");
		if ($(this).text().localeCompare("Why Only Dropbox?") == 0)
			$("<a name='dropbox'></a>").insertBefore($(this));
		// $("<!-- " + $(this).text() + " -->").insertBefore($(this));
		$("<a name=" + index + "></a>").insertBefore($(this));
		$(this).html($(this).text() + "<a href=#top><img src=top.gif></a>");
	});

});
