self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    event.waitUntil(
        self.registration.showNotification(data.title || '🔴 Deprem!', {
            body: data.message || '',
            icon: 'https://depremradar.net/favicon.ico',
            badge: 'https://depremradar.net/favicon.ico',
            vibrate: [200, 100, 200],
            data: { url: 'https://depremradar.net' }
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow('https://depremradar.net'));
});
