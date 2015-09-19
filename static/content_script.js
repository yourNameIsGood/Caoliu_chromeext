/***
    content_script.js 只要使用了插件，这里的function就能自动加载
    无需background.js
***/

function ask_can_spacing() {
    console.log('ask_can_spacing()');
    var nums = document.getElementsByClassName("tal f10 y-style");
    for(i in nums){var count = nums[i].innerHTML;
        if(count>500){
            var tr = (nums[i].parentNode);
            tr.style.backgroundColor="#ff0" ;
        }
    }

    // chrome.runtime.sendMessage({purpose: 'can_spacing'},
    //     function(response) {
    //         console.log('can_spacing: %O', response.result);

    //         //moment of glory!!
    //         // var nums = document.getElementsByClassName("tal f10 y-style");
    //         // for(i in nums){var count = nums[i].innerHTML;
    //         //     if(count>500){
    //         //         var tr = (nums[i].parentNode);
    //         //         tr.style.backgroundColor="#ff0" ;
    //         //     }
    //         // }
    //     }
    // );
}

ask_can_spacing();
