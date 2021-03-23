import React, { Component } from 'react';

//simple components
const BlogImage = (props) => {
    return <img src="https://www.vr-accessory.com/wp-content/uploads/2019/12/oculusrift1.jpg" alt="" />
};

const BlogTitleandDesc = (props) => {
    return (
        <div className='blog-post-info-container'>
            <h1 className='blog-post-title'>A blog about occulus</h1>
            <h2 className="blg-post-description">Discover a universe of possibilities and explore the world like never before. The new Introduction to Virtual Reality takes you to faraway lands, puts you in the center of a Cirque du Soleil performance and brings you face to face with a giant from a bygone era. Created by Felix & Paul Studios.</h2>

        </div>
    )

};

//class components
export class BlogPostBlock1 extends Component {
    render() {       
        // blogs 
        return (
            <div className="blog-post-container">
                < BlogImage/>
                < BlogTitleandDesc />  

            </div>)

    }
}

