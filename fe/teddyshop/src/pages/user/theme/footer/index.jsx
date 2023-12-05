/* eslint-disable react-refresh/only-export-components */
import { memo, useState } from "react";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-about">
              <h1 className="footer-about-logo">TEDDY</h1>
              <ul>
                <li>Địa chỉ: 985 Âu Cơ, Tân Phú, Hồ Chí Minh</li>
                <li>Phone: 0392262423</li>
                <li>Email: duyenle.843703@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to="">Liên hệ</Link>
                </li>
                <li>
                  <Link to="">Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to="">Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="">Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to="">Giỏ hàng</Link>
                </li>
                <li>
                  <Link to="">Danh sách yêu thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget">
              <h6>Khuyến mãi & ưu đãi</h6>
              <p>Đăng ký nhận thông tin tại đây</p>
              <form action="#">
                <div>
                  <input type="text" placeholder="Nhập email..." />
                  <button type="submit" className="button-submit">
                    Đăng ký
                  </button>
                </div>
                <div className="footer-widget-social">
                  <div>
                    <AiOutlineFacebook />
                  </div>
                  <div>
                    <AiOutlineInstagram />
                  </div>
                  <div>
                    <AiOutlineYoutube />
                  </div>
                  <div>
                    <AiOutlineLinkedin />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default memo(Footer);
