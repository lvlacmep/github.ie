$(document).ready(function(){
    jQuery.expr[":"].contains = function( elem, i, match, array ) {
    return (elem.textContent || elem.innerText || jQuery.text( elem ) || "").toLowerCase().indexOf(match[3].toLowerCase()) >= 0;
    var table=$('.table-class').html();
    $('#btn').click(function(){ 
	if ($('#field').val() == ''){alert('Пустое поле');} 
	else{
    $(".table").append('<table class="class" id="mytable">'+table+'</table>');
		$('table.table-class').remove();
		var s1 = $('#field').val();
        if($('#mytable .search:contains("'+s1+'")').length>0){
    $('#mytable .search:contains("'+s1+'")').each(function(){ 
        var s2=$(this).html();
	    $('<tr class="search">'+s2+'</tr>').insertAfter($("tr:first"));
  })
     }
    else{alert('Ничего не найдено');}
    $('#mytable tr#del').remove(':contains("'+s1+'")');
    $("table").attr("class", "table-class")
    $('input').val('');}
	})    			 
});
