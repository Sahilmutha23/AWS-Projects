document.getElementById("uploadForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];

    const bucketName = "image-analysis-sahil"; // Replace with your S3 bucket name
    const imageKey = file.name;

    try {
        // 1. Upload image to S3
        const uploadUrl = `https://${bucketName}.s3.ap-south-1.amazonaws.com/${imageKey}`; // Change region if needed
        await fetch(uploadUrl, {
            method: "PUT",
            headers: {
                "Content-Type": file.type
            },
            body: file
        });

        // 2. Call your API Gateway
        const apiUrl = "https://punzeppvrk.execute-api.ap-south-1.amazonaws.com/analyze"; // Replace with your API Gateway URL
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                bucket: bucketName,
                image_key: imageKey
            })
        });

        const result = await response.json();
        document.getElementById("output").innerText = "Detected: " + result.label;
    } catch (error) {
        document.getElementById("output").innerText = "Error: " + error.message;
    }
});
