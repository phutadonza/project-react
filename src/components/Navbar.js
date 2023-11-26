import React from 'react';

function Navbar() {
  const divStyle = {
    backgroundColor:'#fff'
  }
  return(
    <nav className="navbar navbar-expand-lg navbar-dark" style={divStyle}>
        <div className="container-fluid">
            <a href="#" className="navbar-brand">I4MAS</a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarToggle">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggle">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">ข้อมูลสถานประกอบการ</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">ทำแบบประเมิน</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">เปรียบเทียบ</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">ตั้งเป้าหมาย</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">วางแผนปรับปรุง</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">ต้นแบบ 4.0</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">ส่วนlogin</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
}
export default Navbar