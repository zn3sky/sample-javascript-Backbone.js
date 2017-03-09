window.App = {};

/* 子view動作確認コード
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
*/
/*親view動作確認コード*/;
$(function() {
	var noteCollection = new App.NoteCollection([{
		title: "てすと１",
		body: "てすと１です"
	}, {title: "てすと２",
		body: "てすと２です"
	}]);

	var mainContainer = new App.Container({
		el: "#main-container"
	});

	var noteListView = new App.NoteListView({
		collection: noteCollection
	});

	mainContainer.show(noteListView);
})