package com.pixeltrice.springbootOTPapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
@SpringBootApplication
@ComponentScan({"com.mypackage.controller"})

public class SpringBootOtpAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootOtpAppApplication.class, args);
	}

}
