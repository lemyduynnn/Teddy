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
import { formatter } from "../../../../utils/formater";
import { ROUTERS } from "../../../../utils/router";

const Header = () => {
  const [menus, setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.SHOP,
    },
    {
      name: "Sản phẩm",
      isShowSubmenu: false,
      path: "",
      child: [
        {
          name: "Gấu nâu",
          path: "",
        },
        {
          name: "Gấu dâu",
          path: "",
        },
        {
          name: "Gấu đen",
          path: "",
        },
        {
          name: "Gấu trắng",
          path: "",
        },
      ],
    },
    {
      name: "Liên hệ",
      path: ROUTERS.USER.CONTACT,
    },
    {
      name: "Về chúng tôi",
      path: ROUTERS.USER.ABOUT,
    },
  ]);

  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <AiOutlineMail />
                  duyenle.843703@gmail.com
                </li>
                <li>Miễn phí ship đơn từ {formatter(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header_top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineYoutube />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header-logo">
              <h1>TEDDY</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header-menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header-menu-dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}` }>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header-cart">
              <div className="header-cart-price">
                <span>{formatter(1000120)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Header);
