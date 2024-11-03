import { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubmenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const Menus = [
    { title: "NewsFeed", icon: "" },
    {
      title: "Profiles",
      icon: "",
      submenu: true,
      submenuItems: [
        { title: "profile1" },
        { title: "profile2" },
        { title: "profile3" },
      ],
    },
    { title: "Friend", icon: "" },
    { title: "Group", icon: "" },
    { title: "Notification", spacing: true, icon: "" },
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Check if the screen is mobile
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);
  const chevronBackHandler = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
    else setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
      {/* Menu button for small screens */}
      <div
        className="block lg:hidden text-red-800 bg-gray p-2 cursor-pointer"
        onClick={() => {
          setMobileMenuOpen(!mobileMenuOpen); // Toggle sidebar on mobile
        }}
      >
        {isMobile && !mobileMenuOpen && <IoIosMenu className="text-xl" />}
      </div>
      <div
        className={`h-screen ${
          isMobile && !mobileMenuOpen ? "hidden" : "block"
        } bg-gray p-5 ${open ? "w-72" : "w-20"} duration-300 relative`}
      >
        <IoChevronBack
          className={`text-xl bg-white rounded-full absolute top-24 -right-3 border border-black cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={chevronBackHandler}
        />
        <div className="inline-flex">
          <div
            className={`w-10 h-10 bg-red-400 rounded-md cursor-pointer font-medium float-left mr-2 ${
              open && "rotate-[360deg]"
            } duration-300`}
          >
            Logo
          </div>
          <h1
            className={`text-2xl origin-left font-medium ${
              !open && "scale-0"
            } duration-300`}
          >
            Logo name
          </h1>
        </div>
        <ul className="pt-2">
          {Menus.map((menuItem, index) => (
            <div key={index}>
              <li
                className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 ${
                  menuItem.spacing ? "mt-9" : "mt-2"
                }  rounded-md hover:bg-lightBlue`}
              >
                <span className="float-left text-xl block ">
                  {menuItem.icon ? menuItem.icon : <PiNewspaperClippingLight />}
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  } duration-300`}
                >
                  {menuItem.title}
                </span>
                {menuItem.submenu && open && (
                  <IoChevronForward
                    className={`${subMenuOpen && "rotate-90"}`}
                    onClick={() => setSubmenuOpen(!subMenuOpen)}
                  />
                )}
              </li>
              {menuItem.submenu && subMenuOpen && open && (
                <ul>
                  {menuItem.submenuItems.map((submenu, index) => (
                    <li
                      key={index}
                      className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 ${
                        menuItem.spacing ? "mt-9" : "mt-2"
                      }  rounded-md hover:bg-lightBlue`}
                    >
                      {submenu.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
