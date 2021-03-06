/*extern ufJS, ufJSActions, ufJSParser, openUILink */ 

var blogmarks_search_tags = {
  description: "Find bookmarks on BlogMarks",
  shortDescription: "BlogMarks",
  icon: "http://blogmarks.net/favicon.ico",
  scope: {
    semantic: {
      "tag" : "tag"
    }
  },
  doAction: function(semanticObject, semanticObjectType) {
    if (semanticObject.tag) {
      return "http://blogmarks.net/marks/tag/" + encodeURIComponent(semanticObject.tag);
    }
  }
};

SemanticActions.add("blogmarks_search_tags", blogmarks_search_tags);
