let resp = await fetch("http://13.233.121.162:90");
console.log(resp.status); // 200
console.log(resp.headers.get("Content-Type")); // "text/html"
console.log(await resp.text()); // "Hello, World!"


const { userAgent } = navigator
console.log(userAgent);

if (userAgent.includes('Firefox/')) {
    console.log(userAgent)
} else if (userAgent.includes('Edg/')) {
    console.log(userAgent)
} else if (userAgent.includes('Chrome/')) {
    console.log(userAgent)
} else if (userAgent.includes('Safari/')) {
    // Safari
}
