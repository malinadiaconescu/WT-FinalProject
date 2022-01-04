package com.WebTechnologies.demo.model;

import javax.persistence.*;
import java.io.Serializable;
@Entity
public class Post implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String title;
    private String text;
    private String user;
     public Post(){

     }
    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getText() {
        return text;
    }

    public String getUser() {
        return user;
    }

    public String getDate() {
        return date;
    }

    public String getPostCode() {
        return postCode;
    }

    private String date;
    private String postCode;

    public Post(long id, String title,String text, String user)
    {
        this.id=id;
        this.title=title;
        this.text=text;
        this.user=user;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", text='" + text + '\'' +
                ", user='" + user + '\'' +
                ", date=" + date +
                '}';
    }
}
