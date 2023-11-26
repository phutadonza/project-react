import React from "react";
import './Stylecss.css';
function Body(){
    return(
        <div className="home-layout">
            <div className="container p-2 ">
                <div className="row mt-4 g-2 justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-20 text-center">
                        <div className="title">
                            ระบบการประเมิน
                        </div>
                        <div className="title">
                            ความพร้อมเพื่อยกระดับ
                        </div>
                        <div className="sub-title">
                            เข้าสู่อุตสาหกรรม 4.0
                        </div>
                        <div className="banner-button" shape="rounded-pill">
                            เริ่มใช้งาน
                        </div>
                        <div className="banner-button2" shape="rounded-pill">
                            ทดลอง
                        </div>
                        <div className="banner-button3" shape="rounded-pill">
                            คู่มือ
                        </div>
                    </div>
                    <div className="col-lg-6 col-auto p-2 pt-4">
                        <img class="img-fluid" src="/images/asset1.png" 
                            alt="asset1">    
                        </img>
                    </div>
                </div>
                <div className="text-center mt-5 p-3">
                    <img class="" src="/images/i4mas.svg" 
                    alt="SVG" width="60%" height="auto"></img>
                    <div className="aboutus-title">
                        <span>Industry 4.0 Maturity Assessment System</span>
                    </div>
                    <p className="aboutus-sub-title">
                        เป็นเครื่องมือที่จะช่วยให้สถานประกอบการสามารถประเมินความพร้อมเข้าสู่อุตสาหกรรม 4.0 ได้ด้วยตนเอง <br/>
                        และทราบแนวทางการปรับปรุงเพื่อยกระดับศักยภาพองค์กรเข้าสู่อุตสาหกรรม 4.0
                    </p>
                    <a href="/file/manual.pdf" download="">Download - แบบประเมินความพร้อมเข้าสู่อุตสาหกรรม 4.0 (5 หมวด 18 ตัวชี้วัด)</a>
                </div>
                <div className="benefit-container">
                    <div className="row justify-content-center g-5 benefit-row">
                        <div className="col-md-6 col-12">
                            <img class src="/images/login-visual.svg" width="100%" height="auto"></img>
                        </div>
                        <div className="col-md-6 col-12 text-white">
                            <div className="benefits-title">
                                สิ่งที่ได้รับจากการประเมิน
                                <img class src="/public/images/i4mas.svg" width="30%"/>
                            </div>
                            <div className="benefits-item">
                                <img class="" src="/images/chart.svg" alt="/static/media/chart"/>
                                <div>
                                    <div>ประเมินโรงงาน</div>
                                    <div className="fonts">เพื่อประเมินระดับความพร้อมเข้าสู่อุตสาหกรรม 4.0</div>
                                </div>
                            </div>
                            <div class="benefits-item">
                                <img class="" src="/images/document.svg" 
                                alt="/image/document"/>
                                <div>
                                    <div>เปรียบเทียบผลการประเมิน</div>
                                    <div className="fonts">เพื่อเปรียบเทียบระดับอุตสาหกรรม</div>
                                </div>
                            </div>
                            <div className="benefits-item">
                                <img class="" src="/images/graph.svg" 
                                alt="/image/document"/>
                                <div>
                                    <div>วางแผนการปรับปรุง</div>
                                    <div className="fonts">เพื่อเพิ่มประสิทธิ ผลิตภาพ และยกระดับเข้าสู่อุตสาหกรรม 4.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Body