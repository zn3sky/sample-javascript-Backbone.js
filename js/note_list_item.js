App.NoteListItemView = Backbone.View.extend({
	tagName: "tr",
	render: function() {
		var template = $("#noteListItemView-template").html();
		
		// http://text.ykhs.org/2014/10/22/javascript_engineer_training_book_fix.html
		//var html = _.template(template, this.model.toJSON());
		var compiled = _.template(template);
    	var html = compiled(this.model.toJSON());
		
		this.$el.html(html);
		return this;
	}

});

