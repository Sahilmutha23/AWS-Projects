Serverless-Portfolio-Website-with-Contact-Form-AWS-Free-Tier-Project-
A fully serverless, cost-efficient portfolio website built using AWS services—hosted on the Free Tier. Includes a working contact form that securely sends messages via email without using any backend servers.

🚀 Project Overview
This project showcases how to build and deploy a static portfolio website using:
Amazon S3 for hosting
AWS Lambda for backend logic
API Gateway to handle contact form submissions
Amazon SES for sending emails
CloudFront for secure global content deliver
IAM for permissions
CloudWatch for monitoring and alerts
The goal: Create a modern, secure, and interactive portfolio with zero server management and minimal cost.

📌 Features
Fully static site hosted on Amazon S3
Contact form that triggers Lambda and sends email using SES
Global HTTPS delivery via CloudFront
Secure communication and role-based access using IAM
CloudWatch alerts for monitoring Lambda performance
Total monthly cost: ~$0 (AWS Free Tier)

🔧 Architecture Flow
User visits site via a custom domain or S3 URL.
CloudFront delivers the static content securely.
Contact form sends a POST request to API Gateway.
API Gateway invokes a Lambda function.
Lambda validates the form and uses SES to email the message.
User receives a success message on the website.

📌 Architecture Diagram
→ (Add your AWS architecture diagram image or link here)

🛠️ AWS Services Used
Service	Purpose
Amazon S3	Static website hosting
Amazon CloudFront	Global content delivery + HTTPS
Amazon API Gateway	Accepting form submissions securely
AWS Lambda	Serverless backend for processing data
Amazon SES	Sending contact form emails
IAM	Secure permissions between services
Amazon CloudWatch	Monitoring + alerts (e.g., Lambda memory)

📸 Demo & Screenshots
Link to walkthrough video (add your YouTube or demo link)
Screenshots of services in use (API Gateway, Lambda, SES, etc.)

🧠 What I Learned
Hands-on AWS experience with real-world use cases
Debugging CORS errors and handling cross-origin requests
Configuring IAM roles and permissions securely
Monitoring Lambda performance using CloudWatch

✅ Benefits
No server to manage — 100% serverless
Free Tier eligible — ideal for students and beginners
Scalable, secure, and globally available
Clean and professional portfolio site for job applications

📎 Getting Started
To deploy your own version:
Clone this repo
Host your frontend on S3
Create Lambda function & API Gateway endpoin
Set up SES and verify your email
Add IAM roles and permissions
Link everything and deploy via CloudFront (optional)

🙋‍♂️ Contact
If you have any questions or want to connect, feel free to reach out via LinkedIn or use the contact form on my site! 😉

