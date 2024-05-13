import React from 'react'
import ci1 from '../../assets/ci1.png'
import ci2 from '../../assets/ci2.png'
import './blog.scss'

function Blog() {
    return (
        <section className='blog'>
            <div className="container">
                <h1 className='blog__title'> Blog Posts</h1>
                <div className="blog__cards">
                    <div className="blog__card">
                        <div className="blog__card__left">
                            <h2 className="blog__card__title">
                                Tempered Glass
                            </h2>
                            <div className="blog__card__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
                            </div>
                        </div>
                        <div className="blog__card__right">
                            <div className="blog__card__img">
                                <img src={ci1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="blog__card">
                        <div className="blog__card__left">
                            <div className="blog__card__img">
                                <img src={ci2} alt="" />
                            </div>
                        </div>
                        <div className="blog__card__right">
                            <h2 className="blog__card__title">
                                Back Cover
                            </h2>
                            <div className="blog__card__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
                            </div>
                        </div>
                    </div>
                    <div className="blog__card n">
                        <h2 className="blog__card__title">
                            Mobile Brand and Price Strategy
                        </h2>
                        <div className="blog__card__text n__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
