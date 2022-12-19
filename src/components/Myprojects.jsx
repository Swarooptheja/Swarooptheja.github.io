import React from 'react';
import './Myprojects.css'
function Myprojects(props) {
    return (
        <div id='myprojects'>
            <h1 id='headingprojects'>My Projects!</h1>

            <div id='myprojectsmain'>
                <div>
                    <img src="data:image/jpeg;base64,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" alt="" />
                        <h3 className='title'>TITLE :  MYNTRA</h3>
                    <div>
                        <h3 id='techstack'>
                            
 DESCRIPTION:
                        </h3>
                        <h5 className="discription">
                        {/* <h3 id='techstack'>
                            
                            DESCRIPTION:
                                                   </h3> */}
                        
It is one of the most popular online fashion stores. We have cloned the Login/Signup, home page, navbar, products page, sorting and filtering of the products, view product, cart and dummy payment features.

                        </h5>

                        <h3 id='techstack'>
                            TECH STACK  :
                        </h3>
                        <div id='tc'>
                            <button >HTML</button>
                            <button>CSS</button>
                            <button>Javascript</button>

                        </div>
                    </div>
                    <div>
                        <button className='myprojectgitbtn' >
                        <h3>
                          <a   className='a' href="https://github.com/Shibshankar01/Myntra"> Github Link</a>  
                         </h3>
                        </button>
                        <button className='myprojectnetlifybtn'>
                            <h3>
                          <a  className='a' href="https://grand-tarsier-842e30.netlify.app/"> Netlify Link</a>  
                         </h3>
                         </button>
                    </div>
                </div>
                <div>
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <h3 className='title'>TITLE :  ANTHROPOLOGIE</h3>
                    <div>
                        <h3 id='techstack'>
                            
 DESCRIPTION:
                        </h3>
                        <h5 className="discription">
                        {/* <h3 id='techstack'>
                            
                            DESCRIPTION:
                                                   </h3> */}
                        Clone of Anthropologie a shopping website for Clothings where you can find all latest arrivals in shoes, clothing, dresses and home & furniture
                        </h5>

                        <h3 id='techstack'>
                            TECH STACK  :
                        </h3>
                        <div id='tc'>
                            <button >HTML</button>
                            <button>CSS</button>
                            <button>Javascript</button>

                        </div>
                    </div>
                    <div>
                        <button className='myprojectgitbtn'>
                        <h3>
                          <a  className='a' href="https://github.com/suraj9716/common-rhythm-7706"> Github Link</a>  
                         </h3>
                        </button>
                        <button className='myprojectnetlifybtn'>
                        <h3>
                          <a  className='a' href="https://ornate-phoenix-387be5.netlify.app/"> Netlify Link</a>  
                         </h3>
                            </button>
                    </div>
                </div>
                <div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB7CAMAAAAfU9HRAAAAZlBMVEUAAAD///+4uLiurq7p6elbW1v8/Pw/Pz+rq6vFxcXl5eX4+PgWFhZvb281NTVJSUmJiYnd3d2BgYElJSWgoKB0dHQeHh7w8PAtLS1UVFSUlJROTk5ERERjY2NpaWl6enrPz88LCwtxl7n0AAADOklEQVR4nO2aaZOrKhBAu1FQ4gZIFHH//3/yQWapeXNz7+TLu2q9PpWqSCCpI2mWpgQgCIIgCIIgCIIgCIIgCOIbc8K+4bujnV5C4a/o+mirF6hvT8zRHK31AvyZOOZHa70AF8/Mk6O1XuD65uKS5izpsWAsXGmWbOJC5hncsHeuQObgbZq8inkTzbNa3KCV6cxv1zNn4BH74mp9XtcigeRiI3QGhjeohYZRoLXFdcy3x5VFoeL7dCFzsfG2YUG4YJNT6YWi5dprKJn/PZ7vcq9g3vTPzP3RWq8gn5nzo61eIk+/o4ejnV6kzv7NtB9tRBDEhchUmKV3tb6VOPvtnN16ZkeAmZ1lclzjml6GZPOBwfU37UxM55CFTPr+19z+zFfz2q1YQfZWUbfvLdp4ELpgYVejsVGhRaj8ONd1x52SfprblKFekKVYhCSo0SiYZmEpZUJs5b49hFsO0XxIUeR9DkxLgXo62jxHYU0VNoQ+xXunMbEaZUhFtd/QdkX/3j6Yu7TIbRoiR+LNJqjLo8zzD3MTSxZgRDbH+6lFMC+mkIJKJ9JP88XETWMTWsgijOcED+r0R5/vGM15LMWgQFk9zsrTYN534ArZpuIR0F009zjHRqHP4+i4H7WF5EI3pQpx8W4u9yCXD7hFp9jnbTQHi3ronO2nYF4F6TALhT6P97fhUYOUYXHD8LcnsScNopbYjzG+ZfFuXgfzkoWaHm9jnBXlozLGeSF1vI1jKP2m4+piZBPWmW0NE0YI3NJqbRIPinXQMrtDaaTevINlG6DL9VYxBTJVWvsr7n5l+nObcyLT9udGp8T4g6ZygiAIgiAIgvjfUp59E65KUF9K9rPQuo/Pcpt9+cJpnl503oLyowqZTgWDykquVGVMvarBm0UpKPPRdcYvyo7h5dV5ngHMm3s1cl+r2NvTemfKq3qdq0S17aaSkPEPDbBq5av0uTH8LGe6sNt9rtbRJ9UCsC7LqiZ+3yvrrFkqOzqo/VQvhtvK2Gyu5vtpzEPc7s0Ew9iGhL7jQ+l4iHCXdc4N+zSUUM68aaC2Uw28dp3Lfv7Jc3HUoTNBEARBEARBEARBEARBEARBEMR/xz9rYixWk/ajRgAAAABJRU5ErkJggg==" alt="" />
                    <h3 className='title'>TITLE :  URBAN COMPANY</h3>
                    <div>
                        <h3 id='techstack'>
                            
 DESCRIPTION:
                        </h3>
                        <h5 className="discription">
                        {/* <h3 id='techstack'>
                            
                            DESCRIPTION:
                                                   </h3> */}
                        
                        Urban Company is the largest home service platform in Asia. The platform helps customers book professional home services such as beauty services ...
                        </h5>

                        <h3 id='techstack'>
                            TECH STACK  :
                        </h3>
                        <div id='tc'>
                            <button >HTML</button>
                            <button>CSS</button>
                            <button>Javascript</button>

                        </div>
                    </div>
                    <div>
                        <button className='myprojectgitbtn'>
                        <h3>
                          <a  className='a' href="https://github.com/skypassboy/outgoing-mine-4990"> Github Link</a>  
                         </h3>
                        </button>
                        <button className='myprojectnetlifybtn'>
                        <h3>
                          <a  className='a' href="https://friendly-raindrop-3d7f7b.netlify.app/"> Netlify Link</a>  
                         </h3>
                         </button>
                    </div>
                </div>
                <div>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2020/09/How-To-Wear-A-Beret-Without-Looking-Ridiculous.jpg.webp" alt="" />
                    <h3 className='title'>TITLE :  STYLECRAZE</h3>
                    <div>
                        <h3 id='techstack'>
                            
 DESCRIPTION:
                        </h3>
                        <h5 className="discription">
                        {/* <h3 id='techstack'>
                            
                            DESCRIPTION:
                                                   </h3> */}
                        Women's Fashion, Beauty And Wellness Community to get solutions to all your Beauty queries and stay upto on the latest Beauty Trends.
                        </h5>

                        <h3 id='techstack'>
                            TECH STACK  :
                        </h3>
                        <div id='tc'>
                            <button >HTML</button>
                            <button>CSS</button>
                            <button>Javascript</button>
                            <button>React js</button>
                            <button>Chakra Ui</button>

                        </div>
                    </div>
                    <div>
                        <button className='myprojectgitbtn'>
                        <h3>
                          <a  className='a' href="https://github.com/Swarooptheja/agonizing-cable-172/tree/main/my-app"> Github Link</a>  
                         </h3>
                        </button>
                        <button className='myprojectnetlifybtn'>
                        <h3>
                          <a  className='a' href="https://glowing-klepon-bdc000.netlify.app/"> Netlify Link</a>  
                         </h3>
                            </button>
                    </div>
                </div>
                <div>
                    <img src="https://user-images.githubusercontent.com/105920094/200612352-d5d40575-2896-46b4-8632-b3aef0ed8875.jpg" alt="" />
                    <h3 className='title'>TITLE :  KINDMEAL</h3>
                    <div>
                        <h3 id='techstack'>
                            
 DESCRIPTION:
                        </h3>
                        <h5 className="discription">
                        {/* <h3 id='techstack'>
                            
                            DESCRIPTION:
                                                   </h3> */}
                       KindMeal.my is Malaysia's leading meat-free lifestyle platform , indulging you with delicious discounted vegetarian meals to save animals, health, environment and money.
                        </h5>

                        <h3 id='techstack'>
                            TECH STACK  :
                        </h3>
                        <div id='tc'>
                            <button >HTML</button>
                            <button>CSS</button>
                            <button>Javascript</button>
                            <button>React js</button>
                            <button>Chakra Ui</button>
                            <button>Redux</button>

                        </div>
                    </div>
                     <div>
                        <button className='myprojectgitbtn'>
                        <h3>
                          <a  className='a' href="https://github.com/priyankadora20/blessed-toes-567"> Github Link</a>  
                         </h3>
                        </button>
                        <button  className='myprojectnetlifybtn'>
                        <h3>
                          <a  className='a' href="https://blessed-toes-567-ten.vercel.app/"> Netlify Link</a>  
                         </h3>
                         </button>
                    </div>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kIJNhrBprznAwf00T3iqLueIcwRRFRpN7Q&usqp=CAU" alt="" />
                    <h3 className='title'>TITLE :  JIOMART</h3>
                    <div>
                        <h3 id='techstack'>
                            
 DESCRIPTION:
                        </h3>
                        <h5 className="discription">
                        {/* <h3 id='techstack'>
                            
                            DESCRIPTION:
                                                   </h3> */}
                      Jiomart - Choose and Buy Online Grocery from a wide range of fruits, vegetables, baby care products, personal care products and much more. </h5>

                        <h3 id='techstack'>
                            TECH STACK  :
                        </h3>
                        <div id='tc'>
                            <button >HTML</button>
                            <button>CSS</button>
                            <button>Javascript</button>
                            <button>React js</button>
                            <button>Chakra Ui</button>
                            <button>Redux</button>
                            <button>nodejs</button>
                            <button>express</button>
                            <button>mongoDB</button>

                        </div>
                    </div>
                    <div>
                        <button className='myprojectgitbtn'>
                        <h3>
                          <a className='a' href="https://github.com/darshancoder/solid-scarecrow-3984"> Github Link</a>  
                         </h3>
                        </button>
                        <button className='myprojectnetlifybtn'>
                        <h3>
                          <a  className='a' href="https://glittering-kleicha-186978.netlify.app/"> Netlify Link</a>  
                         </h3></button>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Myprojects;