import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { ReactNode } from 'react';

const drawerWidth = 240;

interface DrawerItems {
  drawerItems: ReactNode;
  variant: variant;
  open: boolean;
}

type variant = "permanent" | "persistent" | "temporary" | undefined;

function DrawerContainer({ drawerItems, variant, open, ...props }: DrawerItems) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <Drawer
      variant={variant}
      open={mobileOpen || open}
      onTransitionEnd={handleDrawerTransitionEnd}
      onClose={handleDrawerClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      {...props}
    >
      {drawerItems}
    </Drawer>
  )
}

export default DrawerContainer