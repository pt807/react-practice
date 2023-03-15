package com.douzone.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.demo.vo.EmailVo;

@Repository
public class EmailRepository {
	@Autowired
	private SqlSession sqlSession;

	public List<EmailVo> findAll(String keyword) {
		return sqlSession.selectList("email.findAll", keyword);
	}

	public void insert(EmailVo emailVo) {
		sqlSession.insert("email.insert", emailVo);
	}

	public void delete(Long no) {
		sqlSession.delete("email.delete", no);
	}
}
