$.connection.hub.start().done(function () {
    // Wire up Send button to call NewContosoChatMessage on the server.
    $('#newContosoChatMessage').click(function () {
        contosoChatHubProxy.server.newContosoChatMessage(
            $('#displayname').val(), $('#message').val());
            $('#message').val('').focus();
    });