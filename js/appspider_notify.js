/**
 * Created by nbugash on 2016-04-26.
 */
/**
 * Created by nbugash on 4/8/16.
 */
// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
    if (Notification.permission !== "granted"){
        Notification.requestPermission();
    }
});
window.addEventListener('load', function() {
    if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)){
        notifyPlugin();
    }
});
function notifyPlugin() {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('AppSpider Validate', {
            icon: 'images/icon.png',
            body: "Hey there! There's a chrome plugin available to open the validate button"
        });

        notification.onclick = function () {
            window.open("https://chrome.google.com/webstore/detail/appspider-validate-chrome/decadhidkojjhcbbjhljnofgejilmmkl");
        };

    }

}
