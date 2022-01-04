package com.WebTechnologies.demo.repo;

import com.WebTechnologies.demo.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PostRepo extends JpaRepository<Post,Long> {

    void deletePostById(Long Id);

    Optional<Post> findPostById(Long id);

    void deletePostByTitle(String title);


}
