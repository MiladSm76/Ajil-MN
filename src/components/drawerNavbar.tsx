import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Progress } from "@material-tailwind/react";
type Prop = {
  flag: boolean;
  closeflag:React.Dispatch<React.SetStateAction<any>>;
};
export default function TemporaryDrawer({ flag, closeflag }: Prop) {
  const list = () => (
    <>
      <Box className={"h-[100vh] w-[522px] bg-white"}>
        <Box 
        onClick={()=>closeflag(!flag)} 
        className={
            "h-[52px] w-[522px] bg-white border-b-black border-b-[1px] flex items-center cursor-pointer gap-3"
            }>
                <Box className={"flex items-center cursor-pointer gap-3 ml-4"}>

             <ArrowForwardIosOutlinedIcon className="headerNavbar " sx={{fontSize:"18px", transition:"0.5s"}}/>
           Continue shopping   
                </Box>
        </Box>
                <Progress value={50} label="Completed" />
      </Box>
    </>
  );
  return (
    <div>
      <Drawer anchor={"right"} open={flag} onClose={() => closeflag(!flag)}>
        {list()}
      </Drawer>
    </div>
  );
}
