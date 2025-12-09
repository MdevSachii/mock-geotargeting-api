const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Fake license check
app.get("/api/v1/check-license", (req, res) => {
    res.status(200).json({
        status: "valid",
        message: "Development license active (local mock)"
    });
});

// Fake subscription check
app.get("/api/v1/check-subscription", (req, res) => {
    res.status(200).json({
        status: "active",
        domains_allowed: ["localhost", "127.0.0.1", "mock-geotargeting-api.fly.dev"],
        message: "Development subscription active (local mock)"
    });
});

// Fake geolocation data
app.get("/api/v1/data", (req, res) => {
    res.status(200).json({
        ip: "127.0.0.1",
        country: "US",
        city: "San Francisco",
        region: "California",
        latitude: "37.7749",
        longitude: "-122.4194"
    });
});

// Fallback default
app.use((req, res) => {
    res.status(200).json({ message: "Mock API endpoint OK" });
});

app.listen(port, () => {
    console.log(`✔ Mock GeoTargeting API running at http://localhost:${port}`);
});
