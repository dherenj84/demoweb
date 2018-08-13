package com.imi.demoweb.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UnsecureController extends BaseController {

	private static final Logger log = LoggerFactory.getLogger(UnsecureController.class);

	@GetMapping("/greet")
	public String greet() {
		log.info("inside unsecure greet");
		return "Hello World from an Unsecure Controller!";
	}
}
