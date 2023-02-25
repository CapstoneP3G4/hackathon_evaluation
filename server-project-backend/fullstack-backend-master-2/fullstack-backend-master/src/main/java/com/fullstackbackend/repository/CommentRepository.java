package com.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstackbackend.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
