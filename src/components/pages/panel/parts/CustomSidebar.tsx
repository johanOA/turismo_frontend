import {Gear, List, User,UserCircleGear,Desktop,UserList,
        UserPlus, House, ArchiveBox,PlusCircle,Mountains,
        FloppyDiskBack,MapPin,ArrowLeft,ArrowRight } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { useAuth } from "../../../../Auth/AuthProvider";
import  Colors from "../../../../constants/Colors.js";

import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar} from 'react-pro-sidebar';


const CustomSidebar = () => {
  const { isAuthenticated, userInfo} = useAuth();
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
  useProSidebar();

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      collapseSidebar();
    } else {
      collapseSidebar();
    }
  };

  return (

    <Sidebar
      backgroundColor={Colors.primarySoft}
      rtl={false}
      style={{ height: "100vh" }}
    >
    <Menu>
      <MenuItem  icon={<House/>} > Inicio </MenuItem>
      <SubMenu icon={<Gear/>} label="Ajustes">
        <MenuItem icon={<User/>}> Perfil </MenuItem>
      </SubMenu>

      <SubMenu icon={<UserCircleGear/>} label="Administrador">

        <SubMenu  icon={<User/>} label="Usuarios">
            <MenuItem icon={<UserList/>} > Lista </MenuItem>
            <MenuItem icon={<UserPlus/>} > Crear </MenuItem>
            <MenuItem icon={<Gear/>}> Ajustes </MenuItem>
        </SubMenu>
        <SubMenu icon={<Desktop/>}label="Micrositios">
            <MenuItem icon={<List/>}>  Lista </MenuItem>
            <MenuItem icon={<PlusCircle/>}> Crear </MenuItem>
            <MenuItem icon={<ArchiveBox/>}> Solicitudes </MenuItem>
            <MenuItem icon={<Gear/>}> Ajustes </MenuItem>
        </SubMenu>
        <SubMenu icon={<MapPin/>} label="Rutas turísticas">
            <MenuItem icon={<List/>}> Lista </MenuItem>
            <MenuItem icon={<PlusCircle/>}> Crear </MenuItem>
            <MenuItem icon={<Gear/>}> Ajustes </MenuItem>
        </SubMenu>

      </SubMenu>
      <SubMenu icon={<Desktop/>} label="Micrositio">

        <SubMenu label="Contenido">
            <MenuItem icon={<List/>}> Lista </MenuItem>
            <MenuItem icon={<Gear/>}> Ajustes </MenuItem>
            <MenuItem icon={<FloppyDiskBack/>}> Backup </MenuItem>
        </SubMenu>

        <SubMenu icon={<Mountains/>} label="Sitios de interés">
            <MenuItem icon={<List/>}> Lista </MenuItem>
            <MenuItem icon={<Gear/>}> Ajustes </MenuItem>
            <MenuItem icon={<FloppyDiskBack/>}> Backup </MenuItem>
        </SubMenu>

        <SubMenu icon={<MapPin/>} label="Rutas turísticas">
            <MenuItem icon={<List/>}> Lista </MenuItem>
            <MenuItem icon={<Gear/>}> Ajustes </MenuItem>
            <MenuItem icon={<FloppyDiskBack/>}> Backup </MenuItem>
        </SubMenu>

      </SubMenu>

      {toggled?

      <MenuItem onClick={toggle} > <ArrowRight/> </MenuItem>
      :
      
      <MenuItem onClick={toggle} > <ArrowLeft/> </MenuItem>
      }
    </Menu>
  </Sidebar>
  
  );
};

export default CustomSidebar;
