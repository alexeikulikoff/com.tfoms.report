package com.tfoms.report.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tfoms.report.dto.Person;

@Controller
public class Main {

	@GetMapping("/")
	public String index(Model model) {

		return "page1";
	}

	@GetMapping("/page1")
	public String page1(Model model) {

		return "page1";
	}

	@GetMapping("/page2")
	public String page2(Model model) {

		return "page2";
	}

	@GetMapping("/getPerson")
	@ResponseBody
	public Person getPerson(Model model) {

		Person person = new Person("Piter", "Bolen");
		return person;
	}

	@PostMapping("/savePerson")
	@ResponseBody
	public ResponseEntity<Person> savePerson(@RequestBody Person person) {

		person.setName("Bonobo");
		System.out.println(person);

		return ResponseEntity.ok(person);
	}

}
