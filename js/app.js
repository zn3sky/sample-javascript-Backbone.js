window.App = {};

$(function() {
	var note = new App.Note({
		title: "てすと",
		body: "てすとです"
	});
	
	var noteView = new App.NoteListItemView({
		model: note
	});
	
	noteView.render().$el.appendTo($(document.body));
});