import { 
  Box, Image, Link as ChakraLink, IconButton, 
  useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody 
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../../assets/fullLogo.svg";
import SearchIcon from "../../assets/searchIcon.svg";
import { FC } from "react";

// NavItem Component with Router NavLink
interface NavItemProps {
  label: string;
  to: string;
  onClick?: any;
}

const NavItem: FC<NavItemProps> = ({ label, to }) => {
  const location = useLocation(); // Get the current route
  const isActive = location.pathname === to; // Check if active

  return (
    <ChakraLink
      as={NavLink}
      to={to}
      fontSize={{ base: "1rem", md: "0.8rem" }}
      color={isActive ? "#1F1F1F" : "#BFBFBF"}
      fontWeight={isActive ? "bold" : "normal"}
      bg={isActive ? "#EAEAEA" : "transparent"}
      borderRadius="8px"
      p="0.4rem 0.8rem"
      _hover={{
        color: "#fff",
        transform: "scale(1.05)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      {label}
    </ChakraLink>
  );
};

// Navbar Component
const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Control drawer

  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* Logo Section */}
      <Image src={Logo} alt="Logo" maxW={{ base: "120px", md: "160px" }} />

      {/* Hamburger Menu for Mobile */}
      <IconButton
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Toggle Menu"
        display={{ base: "block", md: "none" }}
        onClick={isOpen ? onClose : onOpen}
      />

      {/* Navigation Links for Desktop */}
      <Box
        display={{ base: "none", md: "flex" }}
        gap="1rem"
        bg="#0F0F0F"
        border="1px solid #1F1F1F"
        borderRadius="16px"
        alignItems="center"
        p="1rem"
      >
        <NavItem to="/" label="Home" />
        <NavItem to="/movie" label="Movies" />
        <NavItem to="/tv" label="Tv 4Shows" />
        <NavItem to="/subscription" label="Subscription" />
      </Box>

      {/* Icons Section */}
      <Box display={{base:"none", md:"flex"}} gap="1rem" alignItems="center" >
        <NavLink to="/search">
          <Image src={SearchIcon} alt="Search" boxSize={{ base: "20px", md: "24px" }} />
        </NavLink>
        
        {/* <Image src={NotificationIcon} alt="Notifications" boxSize={{ base: "20px", md: "24px" }} /> */}
      </Box>

      {/* Drawer Menu for Mobile */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#0F0F0F">
          <DrawerBody display="flex" flexDirection="column" gap="1rem" mt="2rem">
            <NavItem to="/" label="Home" onClick={onClose} />
            <NavItem to="/movie" label="Movies" onClick={onClose} />
            <NavItem to="/tv" label="Tv Shows" onClick={onClose} />
            <NavItem to="/subscription" label="Subscription" onClick={onClose} />
            <NavItem to="/search" label="Search" onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
