package com.emailSmtp.service;
import com.emailSmtp.EmailViaSmtp.EmailDetails;
public interface EmailService {
	String sendSimpleMail(EmailDetails details);
	String sendMailWithAttachment(EmailDetails details);
}
 