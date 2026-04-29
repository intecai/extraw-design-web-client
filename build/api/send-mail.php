<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Only POST requests are allowed'
    ]);
    exit();
}

$fullName = isset($_POST['fullName']) ? trim($_POST['fullName']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$timezone = isset($_POST['timezone']) ? trim($_POST['timezone']) : '';
$preferredDate = isset($_POST['preferredDate']) ? trim($_POST['preferredDate']) : '';
$preferredTime = isset($_POST['preferredTime']) ? trim($_POST['preferredTime']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

if (empty($fullName) || empty($email) || empty($timezone) || empty($preferredDate) || empty($preferredTime)) {
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all required fields'
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'Please enter a valid email address'
    ]);
    exit();
}

$smtpHost = 'YOUR_SMTP_HOST';
$smtpPort = 587;
$smtpUsername = 'YOUR_SMTP_USERNAME';
$smtpPassword = 'YOUR_SMTP_PASSWORD';
$fromEmail = 'YOUR_FROM_EMAIL';
$fromName = 'Extraw Designs';
$toEmail = 'RECIPIENT_EMAIL@example.com';
$toName = 'Extraw Designs Team';

if ($smtpHost === 'YOUR_SMTP_HOST' || $toEmail === 'RECIPIENT_EMAIL@example.com') {
    echo json_encode([
        'success' => false,
        'message' => 'Server configuration error. Please contact the administrator.'
    ]);
    exit();
}

$subject = "New Consultation Request from {$fullName} - Extraw Designs";

$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; }
        .field { margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; }
        .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
        .value { color: #333; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>New Consultation Request</h1>
            <p>Extraw Designs</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Full Name</div>
                <div class='value'>" . htmlspecialchars($fullName) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Email Address</div>
                <div class='value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div>
            </div>
            <div class='field'>
                <div class='label'>Phone Number</div>
                <div class='value'>" . (!empty($phone) ? htmlspecialchars($phone) : 'Not provided') . "</div>
            </div>
            <div class='field'>
                <div class='label'>Timezone</div>
                <div class='value'>" . htmlspecialchars($timezone) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Preferred Date</div>
                <div class='value'>" . htmlspecialchars($preferredDate) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Preferred Time</div>
                <div class='value'>" . htmlspecialchars($preferredTime) . "</div>
            </div>
            " . (!empty($message) ? "
            <div class='field'>
                <div class='label'>Message</div>
                <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
            </div>
            " : "") . "
        </div>
        <div class='footer'>
            <p>This email was sent from the consultation booking form on Extraw Designs website.</p>
            <p>Request received on: " . date('F j, Y \a\t g:i A') . "</p>
        </div>
    </div>
</body>
</html>
";

$plainTextBody = "
New Consultation Request - Extraw Designs

Full Name: {$fullName}
Email Address: {$email}
Phone Number: " . (!empty($phone) ? $phone : 'Not provided') . "
Timezone: {$timezone}
Preferred Date: {$preferredDate}
Preferred Time: {$preferredTime}
" . (!empty($message) ? "\nMessage:\n{$message}" : "") . "

Request received on: " . date('F j, Y \a\t g:i A') . "
";

class SMTPClient {
    private $socket;
    private $host;
    private $port;
    private $username;
    private $password;
    
    public function __construct($host, $port, $username, $password) {
        $this->host = $host;
        $this->port = $port;
        $this->username = $username;
        $this->password = $password;
    }
    
    public function send($from, $fromName, $to, $toName, $subject, $body, $altBody) {
        $this->connect();
        $this->helo();
        $this->auth();
        $this->mailFrom($from);
        $this->rcptTo($to);
        $this->data($from, $fromName, $to, $toName, $subject, $body, $altBody);
        $this->quit();
    }
    
    private function connect() {
        $this->socket = fsockopen($this->host, $this->port, $errno, $errstr, 30);
        if (!$this->socket) {
            throw new Exception("Connection failed: {$errno} - {$errstr}");
        }
        $response = fgets($this->socket, 515);
        if (substr($response, 0, 3) !== '220') {
            throw new Exception("SMTP server not ready");
        }
    }
    
    private function helo() {
        fputs($this->socket, "EHLO " . $this->host . "\r\n");
        while ($response = fgets($this->socket, 515)) {
            if (substr($response, 3, 1) !== '-') break;
        }
        fputs($this->socket, "AUTH LOGIN\r\n");
        fgets($this->socket, 515);
    }
    
    private function auth() {
        fputs($this->socket, base64_encode($this->username) . "\r\n");
        fgets($this->socket, 515);
        fputs($this->socket, base64_encode($this->password) . "\r\n");
        $response = fgets($this->socket, 515);
        if (substr($response, 0, 3) !== '235') {
            throw new Exception("Authentication failed");
        }
    }
    
    private function mailFrom($from) {
        fputs($this->socket, "MAIL FROM:<{$from}>\r\n");
        fgets($this->socket, 515);
    }
    
    private function rcptTo($to) {
        fputs($this->socket, "RCPT TO:<{$to}>\r\n");
        fgets($this->socket, 515);
    }
    
    private function data($from, $fromName, $to, $toName, $subject, $body, $altBody) {
        fputs($this->socket, "DATA\r\n");
        fgets($this->socket, 515);
        
        $mimeBoundary = md5(time());
        $headers = [
            "From: {$fromName} <{$from}>",
            "To: {$toName} <{$to}>",
            "Subject: {$subject}",
            "MIME-Version: 1.0",
            "Content-Type: multipart/alternative; boundary=\"{$mimeBoundary}\"",
            "Date: " . date('r')
        ];
        
        fputs($this->socket, implode("\r\n", $headers) . "\r\n\r\n");
        
        $message = "--{$mimeBoundary}\r\n";
        $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $message .= $altBody . "\r\n\r\n";
        
        $message .= "--{$mimeBoundary}\r\n";
        $message .= "Content-Type: text/html; charset=UTF-8\r\n";
        $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $message .= $body . "\r\n\r\n";
        
        $message .= "--{$mimeBoundary}--\r\n";
        $message .= "\r\n.\r\n";
        
        fputs($this->socket, $message);
        fgets($this->socket, 515);
    }
    
    private function quit() {
        fputs($this->socket, "QUIT\r\n");
        fgets($this->socket, 515);
        fclose($this->socket);
    }
}

try {
    $smtp = new SMTPClient($smtpHost, $smtpPort, $smtpUsername, $smtpPassword);
    $smtp->send($fromEmail, $fromName, $toEmail, $toName, $subject, $emailBody, $plainTextBody);
    
    echo json_encode([
        'success' => true,
        'message' => 'Consultation request sent successfully!'
    ]);
} catch (Exception $e) {
    error_log("Email Error: " . $e->getMessage());
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again later.'
    ]);
}
?>
