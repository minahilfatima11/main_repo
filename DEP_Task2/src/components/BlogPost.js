// src/components/BlogPost.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import './BlogPost.css';


const BlogPost = ({ title, content, image }) => {
  const [props, set] = useSpring(() => ({
    transform: 'translateY(0px)',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  }));

  return (
    <animated.div
      className="blog-post"
      onMouseEnter={() =>
        set({
          transform: 'translateY(-10px)',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
        })
      }
      onMouseLeave={() =>
        set({
          transform: 'translateY(0px)',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        })
      }
      style={props}
    >
      <div className="blog-post-image-container">
        <img src={image} alt={title} className="blog-post-image" />
      </div>
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-content">{content}</p>
    </animated.div>
  );
}

export default BlogPost;
