import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import folder from "../../assets/images/folder.svg";
import whiteFolder from "../../assets/images/whiteFolder.svg";
import greyMenu from "../../assets/images/greyMenu.svg";
import whiteMenu from "../../assets/images/whiteMenu.svg";

import nextPage from "../../assets/images/nextPage.png";
import whitePolygon from "../../assets/images/whitePolygon.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import frame from "../../assets/images/frame.png";
import isia from "../../assets/images/isia.svg";
import isia2 from "../../assets/images/isia2.svg";
import vector from "../../assets/images/vector.svg";
import kosmovisiones from "../../assets/images/kosmovisiones.svg";

const Menu = ({ setShowMenu }) => {
  React.useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (e) => {
    if (
      e.target.classList.contains("menu") ||
      e.target.classList.contains("navbar__menu_title")
    ) {
    } else {
      setShowMenu(false);
    }
  };

  const [home, setHome] = useState({
    Folder: folder,
    Polygon: nextPage,
  });

  const setIconsHome = (Folder, Polygon) => {
    setHome({
      Folder,
      Polygon,
    });
  };

  const [aboutUs, setAboutUs] = useState({
    Folder: folder,
    Polygon: nextPage,
    folderSubMenu: greyMenu,
  });

  const setIconsAboutUs = (Folder, Polygon, folderSubMenu) => {
    setAboutUs({
      Folder,
      Polygon,
      folderSubMenu,
    });
  };

  const [ito3dsgn, setIto3dsgn] = useState({
    Folder: folder,
    Polygon: nextPage,
    folderSubMenu: greyMenu,
    folderSubMenu2: greyMenu,
  });

  const setIconsIto3dsgn = (Folder, Polygon, folderSubMenu, folderSubMenu2) => {
    setIto3dsgn({
      Folder,
      Polygon,
      folderSubMenu,
      folderSubMenu2,
    });
  };

  const [itoGallery, setItoGallery] = useState({
    Folder: folder,
    Polygon: nextPage,
    folderSubMenu: greyMenu,
    polygonSubMenu: nextPage,
    folderSubMenu2: greyMenu,
  });

  const setIconsItoGallery = (
    Folder,
    Polygon,
    folderSubMenu,
    polygonSubMenu,
    folderSubMenu2
  ) => {
    setItoGallery({
      Folder,
      Polygon,
      folderSubMenu,
      polygonSubMenu,
      folderSubMenu2,
    });
  };

  const [itoStudio, setItoStudio] = useState({
    Folder: folder,
    Polygon: nextPage,
    folderSubMenu: greyMenu,
    folderSubMenu2: greyMenu,
  });

  const setIconsItoStudio = (
    Folder,
    Polygon,
    folderSubMenu,
    folderSubMenu2
  ) => {
    setItoStudio({
      Folder,
      Polygon,
      folderSubMenu,
      folderSubMenu2,
    });
  };

  const [letsTalk, setLetsTalk] = useState({
    Folder: folder,
    Polygon: nextPage,
  });

  const setIconsLetsTalk = (Folder, Polygon) => {
    setLetsTalk({
      Folder,
      Polygon,
    });
  };

  return (
    <div className="menu__container menu">
      <div className="menu__sidebar menu"></div>
      <div className="menu__navbar menu">
        <div className="menu__navbar_border menu"></div>
        <div className="menu__wrapper_home menu">
          <div
            className="menu__home menu"
            onMouseEnter={() => setIconsHome(whiteFolder, whitePolygon)}
            onMouseLeave={() => setIconsHome(folder, nextPage)}
          >
            <a className="menu__link menu" href="/">
              <img
                src={home.Folder}
                alt="home"
                className="menu__home_icon menu"
              />

              <p className="menu__home_title menu">{"Home"}</p>
              <div className="menu__home_img menu" />
            </a>
          </div>
        </div>

        <div className="menu__pages menu">
          <div className="menu__wrapper_aboutUs menu">
            <div
              className="menu__aboutUs menu"
              onMouseEnter={() =>
                setIconsAboutUs(whiteFolder, whitePolygon, greyMenu)
              }
              onMouseLeave={() =>
                setIconsAboutUs(folder, nextPage, whiteFolder, whiteMenu)
              }
            >
              <img
                src={aboutUs.Folder}
                alt="page icon menu"
                className="menu__icon_folder menu"
              />

              <p className="menu__page_title menu">About Us</p>

              <img
                src={aboutUs.Polygon}
                alt="next"
                className="menu__icon_nextPage menu"
              />

              <ul className="submenu menu">
                <ul className="menu__pages_border menu" />

                <ul className="subMenu__aboutUs menu">
                  <li
                    className="subMenu__aboutUs_blog menu folder"
                    onMouseEnter={() =>
                      setIconsAboutUs(whiteFolder, whitePolygon, whiteMenu)
                    }
                    onMouseLeave={() =>
                      setIconsAboutUs(whiteFolder, whitePolygon, greyMenu)
                    }
                  >
                    <img
                      src={aboutUs.folderSubMenu}
                      alt="folder icon"
                      className="subMenu__icon   menu"
                    />

                    <p className="subMenu__title menu">Blog</p>
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <div className="menu__wrapper_ito3dsgn menu">
            <div
              className="menu__ito3dsgn menu"
              onMouseEnter={() =>
                setIconsIto3dsgn(whiteFolder, whitePolygon, greyMenu, greyMenu)
              }
              onMouseLeave={() =>
                setIconsIto3dsgn(folder, nextPage, whiteMenu, whiteMenu)
              }
            >
              <img
                src={ito3dsgn.Folder}
                alt="page icon"
                className="menu__icon_folder menu"
              />

              <p className="menu__page_title menu">Ito 3dsgn</p>

              <img
                src={ito3dsgn.Polygon}
                alt="next"
                className="menu__icon_nextPage menu"
              />
              <ul className="submenu menu">
                <ul className="menu__pages_border menu" />

                <ul className="subMenu__ito3dsgn menu">
                  <li
                    className="subMenu__ito3dsgn_art folder menu"
                    onMouseEnter={() =>
                      setIconsIto3dsgn(
                        whiteFolder,
                        whitePolygon,
                        whiteMenu,
                        greyMenu
                      )
                    }
                    onMouseLeave={() =>
                      setIconsIto3dsgn(
                        whiteFolder,
                        whitePolygon,
                        greyMenu,
                        greyMenu
                      )
                    }
                  >
                    <img
                      src={ito3dsgn.folderSubMenu}
                      alt="folder icon"
                      className="subMenu__icon menu"
                    />

                    <p className="subMenu__title menu">Art direction</p>
                  </li>

                  <li
                    className="subMenu__ito3dsgn_branding folder menu"
                    onMouseEnter={() =>
                      setIconsIto3dsgn(
                        whiteFolder,
                        whitePolygon,
                        greyMenu,
                        whiteMenu
                      )
                    }
                    onMouseLeave={() =>
                      setIconsIto3dsgn(
                        whiteFolder,
                        whitePolygon,
                        greyMenu,
                        greyMenu
                      )
                    }
                  >
                    <img
                      src={ito3dsgn.folderSubMenu2}
                      alt="folder icon"
                      className="subMenu__icon menu"
                    />

                    <p className="subMenu__title menu">Branding</p>
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <div className="menu__wrapper_itoGallery menu">
            <div
              className="menu__itoGallery menu"
              onMouseEnter={() =>
                setIconsItoGallery(
                  whiteFolder,
                  whitePolygon,
                  greyMenu,
                  nextPage,
                  greyMenu
                )
              }
              onMouseLeave={() =>
                setIconsItoGallery(
                  folder,
                  nextPage,
                  whiteMenu,
                  whitePolygon,
                  whiteMenu
                )
              }
            >
              <img
                src={itoGallery.Folder}
                alt="page icon"
                className="menu__icon_folder menu"
              />

              <p className="menu__page_title menu">Ito Gallery</p>

              <img
                src={itoGallery.Polygon}
                alt="next"
                className="menu__icon_nextPage menu"
              />
              <ul className="submenu menu">
                <ul className="menu__pages_border menu" />

                <ul className="subMenu__itoGallery menu">
                  <li
                    className="subMenu__itoGallery_NFT folder menu"
                    onMouseEnter={() =>
                      setIconsItoGallery(
                        whiteFolder,
                        whitePolygon,
                        whiteMenu,
                        whitePolygon,
                        greyMenu
                      )
                    }
                    onMouseLeave={() =>
                      setIconsItoGallery(
                        whiteFolder,
                        whitePolygon,
                        greyMenu,
                        nextPage,
                        greyMenu
                      )
                    }
                  >
                    <img
                      src={itoGallery.folderSubMenu}
                      alt="folder icon"
                      className="subMenu__icon_gallery menu"
                    />

                    <p className="subMenu__title_gallery menu">NFT Drops</p>

                    <img
                      src={itoGallery.polygonSubMenu}
                      alt="next"
                      className="menu__icon_nextPage  menu"
                    />

                    <ul className="submenu__wrapper_NFT menu">
                      <ul className="menu__pages_border menu" />

                      <li className="submenu__NFT menu">
                        <img
                          src={isia}
                          alt="isia icon"
                          className="submenu__NFT_isia menu"
                        />
                        <img
                          src={isia2}
                          alt="isia2 icon"
                          className="submenu__NFT_isia2 menu"
                        />
                      </li>
                      <li className="submenu__NFT menu">
                        <img
                          src={vector}
                          alt="vector icon"
                          className="submenu__NFT_vector menu"
                        />

                        <img
                          src={kosmovisiones}
                          alt="kosmovisiones icon"
                          className="submenu__NFT_kosmovisiones menu"
                        />
                      </li>
                    </ul>
                  </li>

                  <li
                    className="subMenu__itoGallery_events folder menu"
                    onMouseEnter={() =>
                      setIconsItoGallery(
                        whiteFolder,
                        whitePolygon,
                        greyMenu,
                        nextPage,
                        whiteMenu
                      )
                    }
                    onMouseLeave={() =>
                      setIconsItoGallery(
                        whiteFolder,
                        whitePolygon,
                        greyMenu,
                        nextPage,
                        greyMenu
                      )
                    }
                  >
                    <img
                      src={itoGallery.folderSubMenu2}
                      alt="folder icon"
                      className="subMenu__icon_gallery menu"
                    />

                    <p className="subMenu__title_events menu">Events</p>
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <div className="menu__wrapper_itoStudio menu">
            <div
              className="menu__itoStudio menu"
              onMouseEnter={() =>
                setIconsItoStudio(whiteFolder, whitePolygon, greyMenu, greyMenu)
              }
              onMouseLeave={() =>
                setIconsItoStudio(
                  folder,
                  nextPage,
                  whiteFolder,
                  whiteMenu,
                  whiteMenu
                )
              }
            >
              <Link className="menu__link menu" to="/main#studio">
                <img
                  src={itoStudio.Folder}
                  alt="page icon"
                  className="menu__icon_folder menu"
                />

                <p className="menu__page_title menu">{"Ito Studio"}</p>

                <img
                  src={itoStudio.Polygon}
                  alt="next"
                  className="menu__icon_nextPage menu"
                />
              </Link>

              <ul className="submenu menu">
                <ul className="menu__pages_border menu" />

                <ul className="subMenu__itoStudio menu">
                  <a href="/artist">
                    <li
                      className="subMenu__itoStudio_Rodrigo folder menu"
                      onMouseEnter={() =>
                        setIconsItoStudio(
                          whiteFolder,
                          whitePolygon,
                          whiteMenu,
                          greyMenu
                        )
                      }
                      onMouseLeave={() =>
                        setIconsItoStudio(
                          whiteFolder,
                          whitePolygon,
                          greyMenu,
                          greyMenu
                        )
                      }
                    >
                      <img
                        src={itoStudio.folderSubMenu}
                        alt="folder icon"
                        className="subMenu__icon menu"
                      />

                      <p className="subMenu__title menu">Rodrigo Salcedo</p>
                    </li>
                  </a>
                  <li
                    className="subMenu__itoStudio_Andres folder menu"
                    onMouseEnter={() =>
                      setIconsItoStudio(
                        whiteFolder,
                        whitePolygon,
                        greyMenu,
                        whiteMenu
                      )
                    }
                    onMouseLeave={() =>
                      setIconsItoStudio(
                        whiteFolder,
                        whitePolygon,
                        greyMenu,
                        greyMenu
                      )
                    }
                  >
                    <img
                      src={itoStudio.folderSubMenu2}
                      alt="folder icon"
                      className="subMenu__icon menu"
                    />

                    <p className="subMenu__title menu">Andrés Salcedo</p>
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <div className="menu__wrapper_letsTalk menu">
            <div
              className="menu__letsTalk menu"
              onMouseEnter={() => setIconsLetsTalk(whiteFolder, whitePolygon)}
              onMouseLeave={() => setIconsLetsTalk(folder, nextPage)}
            >
              <a className="menu__link menu" href="/main#talk">
                <img
                  src={letsTalk.Folder}
                  alt="page icon"
                  className="menu__icon_folder menu"
                />

                <p className="menu__page_lets menu">{"Let's Talk"}</p>
              </a>
            </div>

            <div className="menu___socialMedia menu">
              <div className="menu__socialMedia_icon menu">
                <img
                  src={twitter}
                  alt="twitter icon"
                  className="menu__icon_twitter menu"
                />
              </div>
              <div className="menu__socialMedia_icon menu">
                <img
                  src={instagram}
                  alt="instagram icon"
                  className="menu__icon_instagram menu"
                />
              </div>
              <div className="menu__socialMedia_icon menu">
                <img
                  src={frame}
                  alt="instagram icon"
                  className="menu__icon_frame menu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
