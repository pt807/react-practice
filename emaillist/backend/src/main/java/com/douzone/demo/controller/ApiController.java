package com.douzone.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.demo.dto.JsonResult;
import com.douzone.demo.repository.EmailRepository;
import com.douzone.demo.vo.EmailVo;

@RestController
@RequestMapping("/api")
public class ApiController {

	@Autowired
	private EmailRepository emailRepository;

	@GetMapping("/email")
	public ResponseEntity<JsonResult> getEmail(@RequestParam(value="keyword", required=true, defaultValue="") String keyword) {
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(emailRepository.findAll(keyword)));
	}

	@PostMapping("/email")
	public ResponseEntity<JsonResult> createEmail(@RequestBody EmailVo emailVo) {
		emailRepository.insert(emailVo);

		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(emailVo));
	}

	@DeleteMapping("/email/{no}")
	public ResponseEntity<JsonResult> deleteEmail(@PathVariable("no") Long no) {
		emailRepository.delete(no);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(no));
	}

}
