package com.tfoms.report.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class Main {

	@GetMapping("/greeting")
	public String greeting(@RequestParam(name = "name", required = false, defaultValue = "World") String name,
			Model model) {
		model.addAttribute("name", name);
		return "greeting";
	}

	@GetMapping("/home")
	public String home(Model model) {
		// model.addAttribute("name", name);
		return "home";
	}

	@GetMapping("/app")
	public String hello(Model model) {
		// model.addAttribute("name", name);
		return "app";
	}

	@GetMapping("/")
	public String index(Model model) {
		// model.addAttribute("name", name);
		return "index";
	}
}
