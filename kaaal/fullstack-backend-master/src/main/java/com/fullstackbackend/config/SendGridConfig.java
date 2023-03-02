package com.fullstackbackend.config;

import com.sendgrid.SendGrid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SendGridConfig {

    @Value("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")
    private String apiKey;

    @Bean
    public SendGrid sendGrid() {
        return new SendGrid(apiKey);
    }
}

