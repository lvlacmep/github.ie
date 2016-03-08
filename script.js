$(document).ready(function(){
	$('#btn').click(function(){
		var tbl = $('#mytable').html();
		var srch = $('#field').val();
		$('#mytable tr:not(:first)').each(function(){
			if(!$(this).find('td').is(':contains(srch)'))
			{
				$('<tr">'+$(this).html()+'</tr>').insertAfter($("tr:last"));
				$(this).remove();
			}
		});
		
	});
});
