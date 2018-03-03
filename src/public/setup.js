//console.log('loaded jquery')

var counter =  1

$(document).ready(function() {
	
	$('.addField').click(function(){
		var id = $(this).attr('id')
		htmlString = '<tr><td> <input name="' + id + counter + '" type="text" placeholder="NAME OF PROPERTY"></td> <td> <input type="text" name="' + id + counter + '" placeholder="edit me"></td></tr>'
		$(this).closest('tr').before(htmlString)
		counter++
	})

	$('.addCategory').click(function(){
		htmlString = '<table><tr><td><button class="addField" id="authentication.extra" type="button">Add Field to authentication</button></td></tr></table>'
		$(this).closest('input').replace(htmlString)
	})

	$()
})
	