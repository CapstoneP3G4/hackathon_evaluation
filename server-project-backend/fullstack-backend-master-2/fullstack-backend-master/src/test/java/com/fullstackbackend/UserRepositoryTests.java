package com.fullstackbackend;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.fullstackbackend.model.User;
import com.fullstackbackend.repository.UserRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {

	 @Autowired
	 private TestEntityManager entityManager;
	     
	 @Autowired
	 private UserRepository repo;
	 
	 @Test
	 public void testCreateUser() {
	     User user = new User();
	     user.setEmail("ravikumar@gmai.com");
	     user.setPassword("ravi2020");
	     user.setName("Ravi");
	     user.setMobile(23L);
	      
	     User savedUser = repo.save(user);
	      
	     User existUser = entityManager.find(User.class, savedUser.getId());
	      
	     assertThat(user.getEmail()).isEqualTo(existUser.getEmail());
	 }
}
