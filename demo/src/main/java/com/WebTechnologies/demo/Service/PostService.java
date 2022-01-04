package com.WebTechnologies.demo.Service;


import com.WebTechnologies.demo.model.Post;
import com.WebTechnologies.demo.repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class PostService {

    private final PostRepo postRepo;

    @Autowired
    public PostService(PostRepo postRepo){this.postRepo = postRepo;}

    public List<Post> FindAllPosts()
    {
        return postRepo.findAll();
    }

    public void deletePost(Long id)
    {
        postRepo.deletePostById(id);
    }

    public Post addPost(Post post) {
        post.setPostCode(UUID.randomUUID().toString());
        return postRepo.save(post);
    }
}
