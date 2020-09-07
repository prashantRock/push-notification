importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyBm5LwPvhynxE5FG6hP31RtwVpPo-e1nOw",
    authDomain: "prashantsage-96c58.firebaseapp.com",
    databaseURL: "https://prashantsage-96c58.firebaseio.com",
    projectId: "prashantsage-96c58",
    storageBucket: "prashantsage-96c58.appspot.com",
    messagingSenderId: "352362700716",
    appId: "1:352362700716:web:440da466dd8858395be409",
    measurementId: "G-SL6NFSDRRH"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});