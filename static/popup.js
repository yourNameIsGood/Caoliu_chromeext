chrome.cookies.getAll({domain: 'baidu.com'}, function(cookies) {
    console.dir(cookies);
});