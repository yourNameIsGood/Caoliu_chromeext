chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    alert("ID都有"+message);
});