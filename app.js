Items = new Meteor.Collection('items', {
  schema: new SimpleSchema({
    name: {
      type: String
    }
  })
});

Items.allow({
  insert: function(userId, doc) {
    return true;
  }
})

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to app.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
