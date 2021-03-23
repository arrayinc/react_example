import React from 'react';
import './index.css';
import { BlogPostBlock1 } from './blogpostblock-component1';
// import { BlogPostBlock } from './blogpostblock-component';
// import { Blogs } from './blogData';
export default class App extends React.Component {
    
        // blog1 = {
        //     imageUrl: 'https://www.vr-accessory.com/wp-content/uploads/2019/12/oculusrift1.jpg',
        //     title: 'A blog about occulus',
        //     description: 'Discover a universe of possibilities and explore the world like never before. The new Introduction to Virtual Reality takes you to faraway lands, puts you in the center of a Cirque du Soleil performance and brings you face to face with a giant from a bygone era. Created by Felix & Paul Studios.',
        //     id: '1'
        // };

render() {
    return (
            <div className="main-container">
                    <BlogPostBlock1/> 
                    {/* <BlogPostBlock blogData={this.blog1}/> 
                    <BlogPostBlock blogData={Blogs.blog1}/>  */}
                    
                      
                    
            </div>
            )
        }

}



