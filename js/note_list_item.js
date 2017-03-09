App.NoteListItemView = Backbone.View.extend({
	tagName: "tr",
	render: function() {
		var template = $("#noteListItemView-template").html();
		
		// http://qiita.com/yuku_t/items/5acef8dd49f67fd7813c
		//var html = _.template(template, this.model.toJSON());
		var compiled = _.template(template);
    	var html = compiled(this.model.toJSON());
		
		this.$el.html(html);
		return this;
	}

});

