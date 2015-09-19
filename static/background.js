// 監聽來自 content_script.js 的訊息
chrome.runtime.onMessage.addListener(
    // https://crxdoc-zh.appspot.com/extensions/runtime.html#event-onMessage
    function(message_obj, sender, sendResponse) {
        var purpose = message_obj.purpose;
        var result = null;

        switch (purpose) {
            case 'can_spacing':
                result = true;//can_spacing(sender.tab);
                sendResponse({result: result});
                break;
            case 'can_notify':
                result = can_notify();
                sendResponse({result: result});
                break;
        }
    }
);