import { useState, useEffect, useRef } from "react";
import {
  useNavigate,
  useLocation,
  matchPath,
  useSearchParams,
} from "react-router-dom";
import "./Navbar.css";
import Logo from "./../../assets/logo.svg";
import SearchIcon from "./../../assets/search-icon.svg";
import CrossIcon from "./../../assets/cross.svg";

const MENU_ITEMS = [
  {
    display: "Home",
    value: "home",
    path: "/browse",
    key: "",
    isActive: true,
  },
  {
    display: "TV Shows",
    value: "tv-shows",
    path: "/browse/tv-shows",
    key: "tv",
    isActive: false,
  },
  {
    display: "Movies",
    value: "movies",
    path: "/browse/movies",
    key: "movie",
    isActive: false,
  },
];

function Navbar() {
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const searchInputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const match = matchPath("/browse/:type", location.pathname);
    const type = match?.params?.type || "";
    updateMenuItems(type);
  }, []);

  useEffect(() => {
    showSearchBox && searchInputRef?.current && searchInputRef.current.focus();
  }, [showSearchBox]);

  const updateMenuItems = (value) => {
    if (!value) {
      return;
    }
    const updatedMenuItems = MENU_ITEMS.map((menu) => ({
      ...menu,
      isActive: menu.value === value,
    }));
    setMenuItems(updatedMenuItems);
  };

  const onMenuItemClick = (item) => {
    updateMenuItems(item.value);
    navigate(item.path);
  };
  const MenuWrapper = () => {
    return (
      <div className="nav-item-wrapper">
        {menuItems.map((item) => {
          return (
            <div
              className={`${"nav-item"} ${
                item.isActive ? "active-nav-item" : ""
              }`}
              onClick={() => onMenuItemClick(item)}
              key={item.value}
            >
              {item.display}
            </div>
          );
        })}
      </div>
    );
  };

  const SearchBox = () => {
    const [searchText, setSearchText] = useState("");
    const q = searchParams.get("q") || "";

    useEffect(() => {
      if (q) {
        setSearchText(q);
      }

      showSearchBox &&
        searchInputRef?.current &&
        searchInputRef.current.focus();
    }, []);

    const onSearchClick = () => {
      setShowSearchBox(true);
    };
    const onSearchInput = (event) => {
      const text = searchInputRef.current.value;
      const q = searchParams.get("q");

      if (!q && !searchText) {
        setSearchText(text);
        navigate(`/search?q=${text}`);
      } else {
        setSearchParams((params) => {
          params.set("q", text);
          return params;
        });
      }
      setSearchText(text);
    };

    const onCrossClick = () => {
      setShowSearchBox(false);
    };
    return (
      <>
        <div
          className={`search-container ${
            showSearchBox ? "open-search-box" : ""
          }`}
        >
          <img
            className="searc-icon"
            src={SearchIcon}
            onClick={onSearchClick}
          />
          <input
            className="input-text"
            type="text"
            ref={searchInputRef}
            value={searchText}
            onInput={onSearchInput}
            placeholder="Titles, people, genres"
          ></input>
          <img
            className={`cross-icon ${searchText ? "show-cross-icon" : ""}`}
            src={CrossIcon}
            onClick={onCrossClick}
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="nav-wrapper">
        <div className="left-nav-wrapper">
          <div className="main-logo">
            <img src={Logo} />
          </div>
          <MenuWrapper></MenuWrapper>
        </div>
        <div className="right-nav-wrapper">
          <SearchBox></SearchBox>
        </div>
      </div>
    </>
  );
}

export default Navbar;
