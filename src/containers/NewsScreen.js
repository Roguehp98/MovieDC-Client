import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class NewsScreen extends Component {
    render() {
        return (
            <div>
                <div className="few news">
                    <div className="container-fluid" style={{width:"100%",height:"500px", backgroundColor:"rgb(30, 30, 30)",display:"flex",flexWrap:"wrap", padding: "0px"}}>
                        <div className="card bg-dark text-white" style={{width:"50%",height:"500px"}}>
                            <a href="https://www.warnerbros.com/news/articles/2019/04/09/batman-80th-anniversary-returns-theaters" target="_blank" rel="noopener noreferrer" style={{color:"white"}}>
                                <img src="https://assets.www.warnerbros.com/sites/default/files/promopod/media/browser/Batman80_PromoImage_1920x1536.jpg" className="card-img" alt="Batman Anniversary" style={{width:"100%",height:"500px"}}/>
                                <div className="card-img-overlay" style={{display:"flex", flexDirection:"column",justifyContent:"flex-end", paddingLeft:"1.375rem"}}>
                                    <div style={{borderLeft:"0.1rem solid rgba(255, 255, 255, 0.4)", paddingLeft:"1rem"}}>
                                        <p className="card-title" style={{fontSize: "0.75rem"}}>April 09, 2019</p>
                                        <h3 className="card-text" style={{letterSpacing:"1px", fontSize:"1.875rem!important",textShadow:"0px 1px, 1px 0px, 1px 1px", fontWeight:"bold", lineHeight:"1.875rem"}}>Batman 80th Anniversary.</h3>
                                        <p className="card-text" style={{fontSize:"0.75rem", lineHeight:"1rem",fontWeight:"800"}}>The Caped Crusader Returns to Theaters</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div style={{width:"50%",height:"500px",backgroundColor:"rgb(30, 30, 30)", display:"flex",flexWrap:"wrap",padding: "0px"}}>
                            <div className="card bg-dark text-white" style={{width:"50%",height:"250px",backgroundColor:"rgb(30, 30, 30)"}}>
                                <a href="https://www.warnerbros.com/news/articles/2019/03/22/film-facts-shazam" target="_blank" rel="noopener noreferrer" style={{color:"white"}}>
                                    <img src="https://assets.www.warnerbros.com/sites/default/files/promopod/media/browser/shazam_1536x1920.jpg" className="card-img" alt="Shazam News" style={{height:"250px",width:"100%"}}/>
                                    <div className="card-img-overlay" style={{display:"flex", flexDirection:"column",justifyContent:"flex-end", paddingLeft:"1.375rem"}} >
                                        <div style={{borderLeft:"0.1rem solid rgba(255, 255, 255, 0.4)", paddingLeft:"1rem"}}>
                                            <p className="card-title" style={{fontSize: "0.75rem"}}>April 12, 2019</p>
                                            <p className="card-text" style={{letterSpacing:"1px", fontSize:"1.25rem!important",textShadow:"0px 1px, 1px 0px, 1px 1px", fontWeight:"bold", lineHeight:"1.25rem"}}>Warner Bros. Supports The Next Great Storytellers</p>
                                            <p className="card-text" style={{fontSize:"0.75rem", lineHeight:"1rem",fontWeight:"800"}}>WB Story Lab Showcases Students </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="card bg-dark text-white" style={{width:"50%",height:"250px",backgroundColor:"rgb(30, 30, 30)"}}>
                                <a href="https://www.warnerbros.com/news/articles/2018/11/03/matrix-trilogy-stunning-4k-uhd/" target="_blank" rel="noopener noreferrer" style={{color:"white"}}>
                                    <img src="https://assets.www.warnerbros.com/sites/default/files/promopod/media/browser/Matrix_1920x1536_0.jpg" className="card-img" alt="Shazam News" style={{height:"250px",width:"100%"}}/>
                                    <div className="card-img-overlay" style={{display:"flex", flexDirection:"column",justifyContent:"flex-end", paddingLeft:"1.375rem"}} >
                                        <div style={{borderLeft:"0.1rem solid rgba(255, 255, 255, 0.4)", paddingLeft:"1rem"}}>
                                            <p className="card-title" style={{fontSize: "0.75rem"}}>March 31, 2019</p>
                                            <p className="card-text" style={{letterSpacing:"1px", fontSize:"1.25rem!important",textShadow:"0px 1px, 1px 0px, 1px 1px", fontWeight:"bold", lineHeight:"1.25rem"}}>"The Matrix" Celebrates 20 Years</p>
                                            <p className="card-text" style={{fontSize:"0.75rem", lineHeight:"1rem",fontWeight:"800"}}>Own the Complete Matrix Trilogy Today</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="card bg-dark text-white" style={{width:"50%",height:"250px",backgroundColor:"rgb(30, 30, 30)"}}>
                                <a href="https://www.warnerbros.com/news/articles/2019/03/31/warner-bros-studio-tour-london-step-grigotts-bank" target="_blank" rel="noopener noreferrer" style={{color:"white"}}>
                                    <img src="https://assets.www.warnerbros.com/sites/default/files/promopod/media/browser/WBSTL-GrigottsBank_1920x1536.jpg" className="card-img" alt="Shazam News" style={{height:"250px",width:"100%"}}/>
                                    <div className="card-img-overlay" style={{display:"flex", flexDirection:"column",justifyContent:"flex-end", paddingLeft:"1.375rem"}} >
                                        <div style={{borderLeft:"0.1rem solid rgba(255, 255, 255, 0.4)", paddingLeft:"1rem"}}>
                                            <p className="card-title" style={{fontSize: "0.75rem"}}>March 31, 2019</p>
                                            <p className="card-text" style={{letterSpacing:"1px", fontSize:"1.25rem!important",textShadow:"0px 1px, 1px 0px, 1px 1px", fontWeight:"bold", lineHeight:"1.25rem"}}>Warner Bros. Studio Tour London - Step Into Grigotts Bank.</p>
                                            <p className="card-text" style={{fontSize:"0.75rem", lineHeight:"1rem",fontWeight:"800"}}>Biggest Expansion To Date.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="card bg-dark text-white" style={{width:"50%",height:"250px",backgroundColor:"rgb(30, 30, 30)"}}>
                                <a href="https://www.warnerbros.com/news/articles/2019/04/12/warner-bros-celebrates-students-wb-story-lab-showcase" target="_blank" rel="noopener noreferrer" style={{color:"white"}}>
                                    <img src="https://assets.www.warnerbros.com/sites/default/files/promopod/media/browser/PromoImage_WB-Story-Lab.jpg" className="card-img" alt="Shazam News" style={{height:"250px",width:"100%"}}/>
                                    <div className="card-img-overlay" style={{display:"flex", flexDirection:"column",justifyContent:"flex-end", paddingLeft:"1.375rem"}} >
                                        <div style={{borderLeft:"0.1rem solid rgba(255, 255, 255, 0.4)", paddingLeft:"1rem"}}>
                                            <p className="card-title" style={{fontSize: "0.75rem"}}>April 12, 2019</p>
                                            <p className="card-text" style={{letterSpacing:"1px", fontSize:"1.25rem!important",textShadow:"0px 1px, 1px 0px, 1px 1px", fontWeight:"bold", lineHeight:"1.25rem"}}>Warner Bros. Supports The Next Great Storytellers.</p>
                                            <p className="card-text" style={{fontSize:"0.75rem", lineHeight:"1rem",fontWeight:"800"}}>WB Story Lab Showcases Students </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news">
                    <div style={{paddingLeft:"1.875rem"}}>
                        <h1 className="mt-4" style={{fontSize:"50px!important",letterSpacing:"1px",textShadow:"0px 1px, 1px 0px, 1px 1px", fontWeight:"bold", lineHeight:"2.875rem",color:"white",borderLeft:"0.1rem solid rgba(255, 255, 255, 0.4)",paddingLeft:"1rem", textTransform:"uppercase"}}>New articles</h1>
                    </div>
                    <div className="card-deck mx-2 my-3 ">
                        <div className="card">
                            <a href="https://www.syfy.com/syfywire/arrow-is-ending-what-does-that-mean-for-the-cws-arrowverse" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                <img src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/03/arrow_the_cw.jpg?timestamp=1551930207" className="card-img-top" alt="Arrow Ending" />
                                <div className="card-body">
                                    <h5 className="card-title">TV Show</h5>
                                    <p className="card-text">ARROW IS ENDING. WHAT DOES THAT MEAN FOR THE CW'S ARROWVERSE?.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://www.syfy.com/syfywire/why-game-of-thrones-felt-like-fanfiction-this-week" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                <img src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/04/young_arya_and_gendry_game_of_thrones.jpg?timestamp=1555951874" className="card-img-top" alt="Game of Thrones" />
                                <div className="card-body">
                                    <h5 className="card-title">TV Show</h5>
                                    <p className="card-text">WHY GAME OF THRONES FELT LIKE FANFICTION THIS WEEK.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 25 mins ago</small>
                                </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://www.syfy.com/syfywire/before-supergirl-fought-manchester-black-there-was-superman-vs-the-elite" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                <img src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/04/superman_vs_the_elite.jpg?timestamp=1555770971" className="card-img-top" alt="SUPERMAN VS. THE ELITE" />
                                <div className="card-body">
                                    <h5 className="card-title">Movie</h5>
                                    <p className="card-text">BEFORE SUPERGIRL FOUGHT MANCHESTER BLACK, THERE WAS SUPERMAN VS. THE ELITE.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 1 hour ago</small>
                                </div>
                            </a>
                        </div>     
                    </div>
                    <div className="card-deck mx-2 my-3 ">
                        <div className="card">
                            <a href="https://www.syfy.com/syfywire/chosen-one-of-the-day-aquaman-and-mera-in-casual-resort-wear" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                <img src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/aquaman-movie-mera-desert-lock.jpg" className="card-img-top" alt="Aquaman and Mera" />
                                <div className="card-body">
                                    <h5 className="card-title">Movie</h5>
                                    <p className="card-text">CHOSEN ONE OF THE DAY: AQUAMAN AND MERA IN CASUAL RESORT-WEAR.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 2 hours ago</small>
                                </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://www.syfy.com/syfywire/todd-phillips-screens-joker-footage-at-cinemacon" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                <img src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/04/joker2.jpg?timestamp=1554254886" className="card-img-top" alt="Joker" />
                                <div className="card-body">
                                    <h5 className="card-title">Movie</h5>
                                    <p className="card-text">TODD PHILLIPS SCREENS DARK JOKER FOOTAGE AT CINEMACON, DESCRIBES FILM AS 'A TRAGEDY'.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 4 hours ago</small>
                                </div>
                            </a>
                        </div>
                        <div className="card">
                            <a href="https://www.syfy.com/syfywire/into-the-demonic-duo-of-the-batman-who-laughs-and-the-grim-knight-with-jock-and-scott" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                <img src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/12/bm_who_laughs_1.jpg?timestamp=1544570607" className="card-img-top" alt="Batman Who Laughs #1 Cover" />
                                <div className="card-body">
                                    <h5 className="card-title">Comics</h5>
                                    <p className="card-text">INTO THE DEMONIC DUO OF THE BATMAN WHO LAUGHS AND THE GRIM KNIGHT WITH JOCK AND SCOTT SNYDER.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 15 hours ago</small>
                                </div>
                            </a>
                        </div> 
                    </div>
                    <div className="pagination" style={{display:"flex", justifyContent:"center"}}>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                    <a className="page-link" href="/news" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="/news">1</a></li>
                                 
                                    <li className="page-item">
                                    <a className="page-link" href="/news" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                </div>
            </div>
        );
    }
}

export default NewsScreen;