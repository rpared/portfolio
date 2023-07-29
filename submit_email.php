<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set the recipient email address
    $recipient = "rparedes@costra.com"; // Replace with the actual recipient email address

    // Set the email subject
    $subject = "New Contact Form Submission from $name";

    // Compose the email message
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Set the headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($recipient, $subject, $email_content, $headers)) {
        // Email sent successfully
        echo "Thank you for your message. I try to get back to you soon!";
    } else {
        // Failed to send email
        echo "Oops! Something went wrong. Please try again.";
    }
}
?>
