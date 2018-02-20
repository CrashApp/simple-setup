//console.log('loaded jquery')

var counter =  1

$(document).ready(function() {
	
	$('.addField').click(function(){
		var id = $(this).attr('id')
		htmlString = '<tr><td> <input name="' + id + counter + '" type="text" placeholder="NAME OF PROPERTY"></td> <td> <input type="text" name="' + id + counter + '" placeholder="edit me"></td></tr>'
		$(this).closest('tr').before(htmlString)
		counter++
	})


})
	