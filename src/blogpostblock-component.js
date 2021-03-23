import React, { Component } from 'react';

//simple components
const BlogImage = (props) => {
    return <img src={props.displayData.imageUrl} alt="" />
};



const BlogTitleandDesc = (props) => {
    return (
        <div className='blog-post-info-container'>
            <h1 className='blog-post-title'>{props.displayData.title}</h1>
            <h2 className="blg-post-description">{props.displayData.description}</h2>

        </div>
    )

};

//class components
export class BlogPostBlock extends Component {
    render() {
        const {blogData} = this.props;
       

        // blogs 
        return (
            <div className="blog-post-container">
                < BlogImage displayData={blogData} />
                < BlogTitleandDesc displayData={blogData} />  

            </div>)

    }
}

