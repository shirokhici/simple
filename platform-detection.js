// platform-detection.js

// Function to detect the user's platform
function detectPlatform() {
    const userAgent = window.navigator.userAgent;
    let platform;

    if (userAgent.includes('Win')) {
        platform = 'Windows';
    } else if (userAgent.includes('Mac')) {
        platform = 'MacOS';
    } else if (userAgent.includes('Linux')) {
        platform = 'Linux';
    } else if (userAgent.includes('Android')) {
        platform = 'Android';
    } else if (userAgent.includes('like Mac')) {
        platform = 'iOS';
    } else {
        platform = 'Unknown';
    }

    return platform;
}

// Example usage
console.log('Detected platform:', detectPlatform());
