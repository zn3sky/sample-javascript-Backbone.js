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
/*親view動作確認コード
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
*/;

// test用
var initializeNotes = function() {
	var noteCollection = new App.NoteCollection([{
		title: "てすと１",
		body: "てすと１です"
	}, {title: "てすと２",
		body: "てすと２です"
	}, {title: "てすと３",
		body: "てすと３です"
	}]);

	noteCollection.each(function(note) {
		note.save();
	});

	return noteCollection.models;
};

$(function() {
	App.noteCollection = new App.NoteCollection();
	
	App.mainContainer = new App.Container({
		el: "#main-container"
	});
	
	App.headerContainer = new App.Container({
		el: "#header-container"
	});
	
	App.noteCollection.fetch().then(function(notes) {
		if (notes.length === 0) {
			var models = initializeNotes();
			App.noteCollection.reset(models);
		}
		var mainContainer = new App.Container({
			el: "#main-container"
		});

		var noteListView = new App.NoteListView({
			collection: App.noteCollection
		});

		App.mainContainer.show(noteListView);
		
		App.router = new App.Router();
		Backbone.history.start();
	});

});