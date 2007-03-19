/*extern ufJS, ufJSActions, ufJSParser, openUILink */ 

ufJSActions.actions.goto_url = {
  description: "Go to web page",
  scope: {
    microformats: {
      "hCard" : "url",
      "hCalendar" : "url",
      "hAtom-hEntry" : "hAtom-hEntry"
    }
  },
  doAction: function(node, microformatName, event) {
    var microformatNames;
    if (!microformatName) {
      microformatNames = ufJS.getMicroformatNameFromNode(node);
    } else {
      microformatNames = [];
      microformatNames.push(microformatName);
    }
    var url;
    var action = ufJSActions.actions.goto_url;
    var i;
    for (i = 0; i< microformatNames.length; i++) {
      if (microformatNames[i] == "hAtom-hEntry") {
        var bookmark = ufJSParser.getMicroformatProperty(node, "hAtom-hEntry", "bookmark");
        url = bookmark.link;
      } else {
        url = ufJSParser.getMicroformatProperty(node, microformatNames[i], action.scope.microformats[microformatNames[i]]);
      }
      if (url) {
        if (url instanceof Array) {
          openUILink(url[0], event);
        } else {
          openUILink(url, event);
        }
        break;
      }
    }
  } 
};
